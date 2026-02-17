import { PROFILE, MY_WEBSITES } from './common';
import { SKILLS } from './content';

export interface ChatResponse {
  keywords: string[];
  response: string;
}

export const CHATBOT_CONFIG = {
  name: 'Hemanth',
  greeting: `Welcome to ${PROFILE.name.split(' ')[2] || PROFILE.name.split(' ')[0]}'s terminal. Type your query.`,
  placeholder: 'Enter command...',
  unknownResponse: `I'm not sure about that. Would you like to send this question to Hemanth directly? He'll get back to you soon!`,
};

// Predefined responses for common questions
export const CHAT_RESPONSES: ChatResponse[] = [
  // Name & Introduction
  {
    keywords: ['name', 'who are you', 'introduce', 'yourself', 'about you'],
    response: `Hey there! I'm ${PROFILE.name}, a ${PROFILE.role[0]} with ${PROFILE.yearsOfExperience} years of experience building modern web and mobile applications. I'm currently working at ${PROFILE.currentCompany}.`,
  },
  // Experience
  {
    keywords: ['experience', 'years', 'how long', 'working'],
    response: `I have ${PROFILE.yearsOfExperience} years of experience as a ${PROFILE.role[0]}. I specialize in building sleek, responsive user interfaces and dynamic web apps, along with high-quality mobile applications.`,
  },
  // Current Job
  {
    keywords: ['current job', 'where do you work', 'company', 'working at', 'employer'],
    response: `I'm currently working as a ${PROFILE.role[0]} at ${PROFILE.currentCompany}. I focus on building modern, scalable applications using cutting-edge technologies.`,
  },
  // Skills
  {
    keywords: ['skills', 'technologies', 'tech stack', 'what can you do', 'expertise'],
    response: `Here are my core skills:\n\n${SKILLS.map(s => `• ${s.category}: ${s.items.join(', ')}`).join('\n')}\n\nI'm always learning and exploring new technologies!`,
  },
  // Contact
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'get in touch'],
    response: `You can reach me at:\n\n• Email: ${PROFILE.email}\n• Phone: ${PROFILE.phoneNumber}\n\nFeel free to drop me a message anytime!`,
  },
  // Social Links
  {
    keywords: ['social', 'github', 'linkedin', 'twitter', 'instagram', 'links'],
    response: `Connect with me on:\n\n• GitHub: ${PROFILE.github}\n• LinkedIn: ${PROFILE.linkedin}\n• Twitter: ${PROFILE.twitter}\n• Instagram: ${PROFILE.instagram}`,
  },
  // Resume
  {
    keywords: ['resume', 'cv', 'download'],
    response: `You can download my resume from: ${PROFILE.resumeUrl}\n\nIt includes my complete work history, skills, and achievements.`,
  },
  // Projects / Portfolio
  {
    keywords: ['projects', 'portfolio', 'work', 'apps'],
    response: `Check out my projects and apps at:\n\n• Apps: ${MY_WEBSITES.apps}\n• Blogs: ${MY_WEBSITES.blogs}\n\nYou can also scroll down on this page to see featured projects!`,
  },
  // Blogs
  {
    keywords: ['blog', 'articles', 'write', 'content'],
    response: `I write about web development, tech trends, and my coding journey. Check out my blogs at: ${MY_WEBSITES.blogs}`,
  },
  // Freelance / Hire
  {
    keywords: ['hire', 'freelance', 'available', 'open to work', 'collaboration'],
    response: `Yes, I'm open to freelance opportunities and collaborations! Feel free to reach out at ${PROFILE.email} to discuss your project requirements.`,
  },
  // Help
  {
    keywords: ['help', 'commands', 'what can i ask', 'options'],
    response: `You can ask me about:\n\n• My name & introduction\n• Years of experience\n• Current job & company\n• Skills & technologies\n• Contact information\n• Social media links\n• Resume/CV\n• Projects & portfolio\n• Freelance availability\n\nOr feel free to ask anything else!`,
  },
  // Hello / Greetings
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening'],
    response: `Hey there! Great to meet you! I'm ${PROFILE.name.split(' ')[2] || PROFILE.name.split(' ')[0]}'s AI assistant. How can I help you today? Type 'help' to see what you can ask me.`,
  },
  // Thanks
  {
    keywords: ['thanks', 'thank you', 'appreciate', 'helpful'],
    response: `You're welcome! Feel free to ask if you have more questions. Have a great day!`,
  },
  // Location
  {
    keywords: ['location', 'where are you', 'based', 'city', 'country'],
    response: `I'm based in India. I work remotely and collaborate with clients and teams worldwide.`,
  },
  // Education
  {
    keywords: ['education', 'degree', 'college', 'university', 'studied'],
    response: `I have a background in Computer Science and have been continuously learning through online courses, certifications, and hands-on project experience.`,
  },
];

// Function to find the best matching response
export function findResponse(query: string): ChatResponse | null {
  const normalizedQuery = query.toLowerCase().trim();

  // Find the response with the most matching keywords
  let bestMatch: ChatResponse | null = null;
  let maxMatches = 0;

  for (const item of CHAT_RESPONSES) {
    const matches = item.keywords.filter(
      keyword => normalizedQuery.includes(keyword) || keyword.includes(normalizedQuery)
    ).length;

    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = item;
    }
  }

  return bestMatch;
}
