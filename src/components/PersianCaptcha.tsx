"use client";

import { useEffect } from 'react';

const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

const generateCaptcha = () => {
  let captcha = '';
  for (let i = 0; i < 5; i++) {
    captcha += persianNumbers[Math.floor(Math.random() * persianNumbers.length)];
  }
  return captcha;
};

interface PersianCaptchaProps {
  captcha: string;
  setCaptcha: (captcha: string) => void;
}

export default function PersianCaptcha({ captcha, setCaptcha }: PersianCaptchaProps) {
  useEffect(() => {
    // Generate captcha only on initial render on the client
    if (!captcha) {
      setCaptcha(generateCaptcha());
    }
  }, [captcha, setCaptcha]);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  return (
    <div className="flex items-center justify-between p-2 bg-gray-200 rounded-md">
      <span
        className="text-2xl font-bold tracking-widest text-gray-800 select-none"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {captcha}
      </span>
      <button
        type="button"
        onClick={refreshCaptcha}
        className="px-3 py-1 text-sm text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none"
      >
        تازه سازی
      </button>
    </div>
  );
}
