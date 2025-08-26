"use client";

import { useAutoAnimate } from '@formkit/auto-animate/react';
import React from 'react';

// Mock data for the installment schedule
const installments = [
  { id: 1, date: '1403/05/01', amount: '2,500,000 ریال', status: 'پرداخت شده' },
  { id: 2, date: '1403/06/01', amount: '2,500,000 ریال', status: 'پرداخت شده' },
  { id: 3, date: '1403/07/01', amount: '2,500,000 ریال', status: 'در انتظار پرداخت' },
  { id: 4, date: '1403/08/01', amount: '2,500,000 ریال', status: 'در انتظار پرداخت' },
  { id: 5, date: '1403/04/01', amount: '2,500,000 ریال', status: 'دیرکرد' },
];

type Status = 'پرداخت شده' | 'در انتظار پرداخت' | 'دیرکرد';

const statusStyles: Record<Status, string> = {
  'پرداخت شده': 'bg-green-100 text-green-800',
  'در انتظار پرداخت': 'bg-yellow-100 text-yellow-800',
  'دیرکرد': 'bg-red-100 text-red-800',
};


export default function InstallmentTable() {
  const [animationParent] = useAutoAnimate();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">شناسه</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاریخ</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">مبلغ قسط</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">وضعیت</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">عملیات</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200" ref={animationParent}>
          {installments.map((installment) => (
            <tr key={installment.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{installment.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{installment.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{installment.amount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[installment.status as Status]}`}>
                  {installment.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {installment.status === 'در انتظار پرداخت' && (
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">پرداخت</a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
