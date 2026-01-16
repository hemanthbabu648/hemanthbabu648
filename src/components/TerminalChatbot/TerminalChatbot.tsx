'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

import { CHATBOT_CONFIG, findResponse } from '@/constants/chatbot';
import { PROFILE } from '@/constants/common';

interface Message {
  id: string;
  type: 'user' | 'bot' | 'system';
  content: string;
  isTyping?: boolean;
}

interface ContactInfo {
  question: string;
  name?: string;
  contact?: string;
}

type CollectionStep = 'idle' | 'confirm' | 'collecting_name' | 'collecting_contact' | 'sending';

export default function TerminalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      type: 'system',
      content: CHATBOT_CONFIG.greeting,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [collectionStep, setCollectionStep] = useState<CollectionStep>('idle');
  const [contactInfo, setContactInfo] = useState<ContactInfo>({ question: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens or typing completes
  useEffect(() => {
    if (isOpen && !isTyping && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isTyping]);

  const typeMessage = useCallback((content: string, messageId: string) => {
    setIsTyping(true);
    let index = 0;
    const typingSpeed = 15;

    setMessages((prev) => [...prev, { id: messageId, type: 'bot', content: '', isTyping: true }]);

    const typeChar = () => {
      if (index < content.length) {
        setMessages((prev) =>
          prev.map((msg) => (msg.id === messageId ? { ...msg, content: content.slice(0, index + 1) } : msg))
        );
        index++;
        setTimeout(typeChar, typingSpeed);
      } else {
        setMessages((prev) => prev.map((msg) => (msg.id === messageId ? { ...msg, isTyping: false } : msg)));
        setIsTyping(false);
      }
    };

    typeChar();
  }, []);

  const sendToTelegram = async (data: ContactInfo) => {
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result.success === true;
    } catch {
      return false;
    }
  };

  const resetCollection = () => {
    setCollectionStep('idle');
    setContactInfo({ question: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    const userMessageId = `user-${Date.now()}`;
    const botMessageId = `bot-${Date.now()}`;

    // Add user message
    setMessages((prev) => [...prev, { id: userMessageId, type: 'user', content: userMessage }]);
    setInput('');

    // Immediately refocus input
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    // Handle collection flow based on current step
    switch (collectionStep) {
      case 'confirm': {
        const lowerInput = userMessage.toLowerCase();
        if (lowerInput === 'yes' || lowerInput === 'y' || lowerInput === 'send') {
          setCollectionStep('collecting_name');
          setTimeout(() => {
            typeMessage("Great! What's your name?", botMessageId);
          }, 300);
        } else if (lowerInput === 'no' || lowerInput === 'n' || lowerInput === 'cancel') {
          typeMessage("No problem! Feel free to ask me something else.", botMessageId);
          resetCollection();
        } else {
          typeMessage("Please type 'yes' to continue or 'no' to cancel.", botMessageId);
        }
        return;
      }

      case 'collecting_name': {
        setContactInfo((prev) => ({ ...prev, name: userMessage }));
        setCollectionStep('collecting_contact');
        setTimeout(() => {
          typeMessage(
            "Thanks! Now please share your contact info (email, phone, or Telegram username) so Hemanth can reach you:",
            botMessageId
          );
        }, 300);
        return;
      }

      case 'collecting_contact': {
        const updatedInfo = { ...contactInfo, contact: userMessage };
        setContactInfo(updatedInfo);
        setCollectionStep('sending');

        setTimeout(async () => {
          const sent = await sendToTelegram(updatedInfo);
          if (sent) {
            typeMessage(
              `Perfect! Your question has been sent to ${CHATBOT_CONFIG.name}.\n\nHe'll reach out to you at "${userMessage}" soon!`,
              botMessageId
            );
          } else {
            typeMessage(
              `I couldn't send the message right now. Please try reaching out directly at ${PROFILE.email}`,
              botMessageId
            );
          }
          resetCollection();
        }, 300);
        return;
      }

      default:
        break;
    }

    // Find response for normal questions
    const response = findResponse(userMessage);

    if (response) {
      setTimeout(() => {
        typeMessage(response.response, botMessageId);
      }, 300);
    } else {
      // Unknown question - start collection flow
      setContactInfo({ question: userMessage });
      setCollectionStep('confirm');
      setTimeout(() => {
        typeMessage(`${CHATBOT_CONFIG.unknownResponse}\n\nType 'yes' to send or 'no' to cancel.`, botMessageId);
      }, 300);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome',
        type: 'system',
        content: CHATBOT_CONFIG.greeting,
      },
    ]);
    resetCollection();
    // Refocus input after clearing
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-[#00cea8]/50 bg-[#0a0a0a]/90 backdrop-blur-sm text-[#00cea8] font-mono text-sm hover:border-[#00cea8] hover:bg-[#0a0a0a] transition-all duration-300 shadow-lg shadow-[#00cea8]/10"
          >
            <span className="text-[#00cea8]">$</span>
            <span className="text-white">./ask-hemanth</span>
            <span className="w-2 h-5 bg-[#00cea8] animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] flex flex-col rounded-xl overflow-hidden shadow-2xl shadow-black/50"
            style={{
              background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a2e] border-b border-white/10">
              <div className="flex items-center gap-2">
                {/* Traffic Light Buttons */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors"
                  aria-label="Close"
                />
                <button className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors disabled:opacity-90 disabled:cursor-not-allowed" disabled />
                <button className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors disabled:opacity-90 disabled:cursor-not-allowed" disabled />
              </div>

              {/* Title */}
              <div className="flex items-center gap-2 text-gray-400 text-sm font-mono">
                <span>hemanth@portfolio:~</span>
                {/* Space Invader Icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 4h2v2H3V4zm4 0h2v2H7V4zm8 0h2v2h-2V4zm4 0h2v2h-2V4zM5 6h2v2H5V6zm12 0h2v2h-2V6zM3 8h18v2H3V8zm0 2h2v2H3v-2zm4 0h10v2H7v-2zm12 0h2v2h-2v-2zm-14 2h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-10 2h2v2H7v-2zm8 0h2v2h-2v-2zm-6 2h2v2H9v-2zm4 0h2v2h-2v-2z" />
                </svg>
              </div>

              {/* Clear Button */}
              <button onClick={clearChat} className="text-[#00cea8] text-sm font-mono hover:text-[#00cea8]/80 transition-colors">
                Clear
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {messages.map((message) => (
                <div key={message.id} className="font-mono text-sm">
                  {message.type === 'system' && (
                    <div className="text-[#00cea8]">
                      <span className="text-[#ffbd2e]">$</span> {message.content}
                    </div>
                  )}
                  {message.type === 'user' && (
                    <div className="text-white">
                      <span className="text-[#ffbd2e]">$</span>{' '}
                      <span className="font-semibold">{message.content}</span>
                    </div>
                  )}
                  {message.type === 'bot' && (
                    <div className="pl-4 text-[#00cea8] whitespace-pre-wrap border-l-2 border-[#00cea8]/30">
                      {message.content}
                      {message.isTyping && <span className="inline-block w-2 h-4 ml-1 bg-[#00cea8] animate-pulse" />}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-[#0f0f1a]">
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-[#ffbd2e]">$</span>
                <input
                  id='userInput'
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={CHATBOT_CONFIG.placeholder}
                  disabled={isTyping}
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                  autoFocus
                />
                <span className="w-2 h-5 bg-[#00cea8] animate-pulse" />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
