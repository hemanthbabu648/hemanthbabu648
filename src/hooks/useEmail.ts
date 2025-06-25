import emailjs from '@emailjs/browser';
import { useState } from 'react';

import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '@/constants/emailJS';

type EmailParams = {
  name: string;
  email: string;
  message: string;
};

type EmailTemplateType = 'contact' | 'newsletter';

export const useEmail = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (req: EmailParams, type: EmailTemplateType) => {
    setLoading(true);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: req.name,
          to_name: 'Hemanth Babu S',
          from_email: req.email,
          to_email: 'hemanth170648@gmail.com',
          message: req.message,
          via: type === 'contact' ? 'Contact Form' : 'Newsletter',
          subscribed: type === 'newsletter' ? 'Yes' : 'No',
        },
        EMAILJS_PUBLIC_KEY
      );
      setLoading(false);
      return result;
    } catch (err: unknown) {
      setLoading(false);
      throw err;
    }
  };

  return { sendEmail, loading };
};
