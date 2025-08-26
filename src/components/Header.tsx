import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              بیمه البرز
            </Link>
          </div>
          <div className="hidden md:block">
            {/* For RTL, space-x-4 will add margin to the right of elements, which is what we want */}
            <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
              <Link href="/dashboard" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">داشبورد</Link>
              <Link href="/tips" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">نکات بیمه</Link>
              <Link href="/info" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">اطلاعات</Link>
              <Link href="/rules" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">مقررات</Link>
              <Link href="/contact" className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">تماس با ما</Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/login" className="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
              ورود / ثبت نام
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
