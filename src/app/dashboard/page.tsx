import React from 'react';
import DownloadReceiptsButton from '@/components/DownloadReceiptsButton';

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

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">داشبورد کاربری</h1>

        {/* Installment Schedule Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">جدول اقساط</h2>
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
              <tbody className="bg-white divide-y divide-gray-200">
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
        </div>

        {/* Other Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">بیمه نامه های من</h2>
            <p className="text-gray-600">لیست بیمه نامه های شما در اینجا نمایش داده می شود.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">رسید های پرداخت</h2>
            <p className="text-gray-600">برای دانلود رسید پرداخت، روی دکمه مربوطه کلیک کنید.</p>
            <DownloadReceiptsButton />
          </div>
        </div>

      </div>
    </div>
  );
}
