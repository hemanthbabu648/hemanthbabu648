import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import React from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import SectionWrapper from '@/hooks/SectionWrapper';
import { useEmail } from '@/hooks/useEmail';
import { slideIn } from '@/utils/motion';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(5, 'Message is required'),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { sendEmail, loading } = useEmail();

  const onSubmit = async (form: FormData) => {
    try {
      await sendEmail(
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        'contact'
      );
      alert('Thank you. I will get back to you as soon as possible.');
      reset();
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    } catch (err) {
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <h3 className="text-white text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-[5px] uppercase text-2xl mb-4">
        Contact Me
      </h3>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className="text-white text-2xl font-bold tracking-[5px] mb-4">Get in Touch</p>
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                {...register('name')}
                placeholder="What's your name?"
                className="bg-space-black py-4 px-6 placeholder:text-slate-100 text-white rounde-lg outlined-none border-none font-medium"
              />
              {errors.name && (
                <span className="text-red-400 text-xs mt-1">{errors.name.message}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                {...register('email')}
                placeholder="What's your email?"
                className="bg-space-black py-4 px-6 placeholder:text-slate-100 text-white rounde-lg outlined-none border-none font-medium"
              />
              {errors.email && (
                <span className="text-red-400 text-xs mt-1">{errors.email.message}</span>
              )}
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                {...register('message')}
                placeholder="Do you want to say something...?"
                className="bg-space-black py-4 px-6 placeholder:text-slate-100 text-white rounde-lg outlined-none border-none font-medium"
              />
              {errors.message && (
                <span className="text-red-400 text-xs mt-1">{errors.message.message}</span>
              )}
            </label>
            <button
              type="submit"
              className="violet-gradient py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl self-end cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
