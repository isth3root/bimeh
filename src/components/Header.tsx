"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationParent] = useAutoAnimate();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" ref={animationParent}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              بیمه البرز
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
              <Link href="/dashboard" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">داشبورد</Link>
              <Link href="/tips" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">نکات بیمه</Link>
              <Link href="/info" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">اطلاعات</Link>
              <Link href="/rules" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">مقررات</Link>
              <Link href="/contact" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">تماس با ما</Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/login" className="hidden md:block bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
              ورود / ثبت نام
            </Link>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link onClick={() => setIsMenuOpen(false)} href="/dashboard" className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">داشبورد</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/tips" className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">نکات بیمه</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/info" className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">اطلاعات</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/rules" className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">مقررات</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/contact" className="text-gray-700 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">تماس با ما</Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/login" className="bg-indigo-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600">
              ورود / ثبت نام
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
