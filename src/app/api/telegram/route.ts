import { NextRequest, NextResponse } from 'next/server';
interface ContactRequest {
  question: string;
  name?: string;
  contact?: string;
}

export async function POST(request: NextRequest) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Telegram not configured. Please check TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID',
        },
        { status: 200 }
      );
    }

    const { question, name, contact }: ContactRequest = await request.json();

    if (!question || typeof question !== 'string') {
      return NextResponse.json({ error: 'Invalid question' }, { status: 400 });
    }

    const message = `🔔 <b>Portfolio Query</b> 🔔
<b>Question:</b> ${question}
<b>From:</b> ${name || 'Anonymous'}
<b>Contact:</b> ${contact || 'Not provided'}
<b>Time:</b> ${new Date().toLocaleString()}
Website: https://hemanthbabu648.com`;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send message to Telegram',
          details: errorData,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent to Telegram successfully',
        details: null,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
