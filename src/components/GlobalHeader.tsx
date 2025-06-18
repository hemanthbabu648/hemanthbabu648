'use client';

import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { globalHeaderNavLinks } from '../constants/navigation';

const GlobalHeader = () => {
  const [active, setActive] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header className="w-full flex items-center px-4 sm:px-6 lg:px-12 xl:px-16 py-2 fixed top-0 z-20 h-16 bg-image-pattern bg-cover bg-no-repeat bg-center">
      <nav className="w-full flex gap-3 justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scroll(0, 0);
          }}
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={50}
            height={50}
            className="object-contain rounded-full"
          />
          <p className="text-white text-base sm:text-xl font-semibold md:font-extrabold cursor-pointer sm:hidden lg:block">
            HEMANTH BABU SETTI
          </p>
        </Link>
        {/* Navigation links form 'sm' devices */}
        <ul className="list-none hidden sm:flex flex-row gap-6 xl:gap-10">
          {globalHeaderNavLinks.map(link => {
            const path = link?.path ? link.path : `#${link.id}`;
            return (
              <li
                key={link.id}
                className={clsx(
                  'hover:text-white text-[18px] font-medium cursor-pointer',
                  active === link.title ? 'text-white underline' : 'text-secondary'
                )}
                onClick={() => setActive(link.title)}
              >
                <a href={path}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        {/* Navigation links for mobile/(< 640px) devices */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button onClick={() => setToggle(!toggle)} className="cursor-pointer">
            {toggle ? <X color="#fff" size={30} /> : <Menu color="#fff" size={30} />}
          </button>
          <div
            className={clsx(
              !toggle ? 'hidden' : 'flex flex-col gap-3',
              'p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'
            )}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {globalHeaderNavLinks.map(link => {
                const path = link?.path ? link.path : `#${link.id}`;
                return (
                  <li
                    key={link.id}
                    className={clsx(
                      'font-poppins text-[16px] font-medium cursor-pointer',
                      active === link.title ? 'text-white underline' : 'text-secondary'
                    )}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={path}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default GlobalHeader;
