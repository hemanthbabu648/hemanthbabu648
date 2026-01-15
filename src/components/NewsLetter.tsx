import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { useEmail } from '@/hooks/useEmail';

const NewsLetterSchema = z.object({
  email: z.string().trim().email({ message: 'Invalid email address' }),
});

type NewsLetterFormSchema = z.infer<typeof NewsLetterSchema>;

const NewsLetter = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsLetterFormSchema>({
    resolver: zodResolver(NewsLetterSchema),
    defaultValues: {
      email: '',
    },
  });
  const { sendEmail, loading } = useEmail();

  const onSubmit = async (data: NewsLetterFormSchema) => {
    try {
      await sendEmail(
        {
          name: 'Newsletter Subscriber',
          email: data.email,
          message: 'I would like to subscribe to the newsletter.',
        },
        'newsletter'
      );
      alert('Thank you. You have successfully subscribed to the newsletter.');
      reset();
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    } catch (err) {
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <motion.div
      className="rounded-2xl black-violet-gradient p-3 md:p-5 mt-10 md:mt-20"
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="flex flex-col justify-center text-center md:col-span-7 md:text-left">
          <p className="font-lusitana text-lg font-medium text-white">Subscribe Now</p>
          <h4 className="mt-2 text-2xl font-bold  text-xanthous md:text-3xl">Get My Newsletter</h4>
          <p className="mt-4 text-sm text-white md:text-base">
            Get the latest news, updates, tips, and tricks delivered straight to your inbox.
          </p>
        </div>
        <form
          className="flex flex-col lg:flex-row items-center justify-center md:col-span-5 w-full gap-2 mt-6 md:mt-0"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex w-full flex-col lg:flex-row gap-2">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your email"
                  className={clsx(
                    'flex-1 rounded-lg lg:rounded-l-lg lg:rounded-r-none px-4 py-2 border border-xanthous bg-white/90 outline-none text-black placeholder:text-gray-500',
                    errors?.email && 'ring-2 ring-red-400'
                  )}
                  autoComplete="email"
                />
              )}
            />
            <button
              type="submit"
              className="bg-orange-400 text-white px-4 py-2 rounded-lg lg:rounded-r-lg lg:rounded-l-none font-semibold hover:bg-yellow-500 transition-colors w-full lg:w-auto disabled:cursor-not-allowed disabled:opacity-50"
              disabled={loading}
            >
              Submit
            </button>
          </div>
          {errors.email && (
            <span className="text-red-400 text-xs mt-2 block">{errors.email.message}</span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default NewsLetter;
