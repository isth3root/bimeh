import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center p-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        به سامانه خدمات مشتریان بیمه البرز خوش آمدید
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
        در این سامانه می توانید به راحتی وضعیت اقساط بیمه نامه خود را مشاهده کرده، رسیدهای پرداخت را دریافت و سوابق بیمه ای خود را مدیریت کنید.
      </p>
      <Link href="/login" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300">
        ورود به پنل کاربری
      </Link>
    </div>
  );
}
