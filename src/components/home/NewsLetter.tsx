import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

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
  const onSubmit = async (data: NewsLetterFormSchema) => {
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await res.json();

      if (res.status === 201) {
        alert(responseData.message || 'Subscribed successfully!');
        reset();
      } else if (res.status === 400) {
        alert(responseData.message || 'Invalid email address');
      } else {
        alert(responseData.message || 'Failed to send message');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    } catch (error) {
      alert('Error submitting form');
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
          className="flex items-center justify-center md:col-span-5 w-full"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex w-full gap-2">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your email"
                  className={`flex-1 rounded-l-lg px-4 py-2 border-none outline-none text-black ${errors.email ? 'ring-2 ring-red-400' : ''}`}
                  autoComplete="email"
                />
              )}
            />
            <button
              type="submit"
              className="bg-xanthous text-white px-4 py-2 rounded-r-lg font-semibold hover:bg-yellow-500 transition-colors"
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
