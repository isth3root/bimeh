import React from 'react';
import DownloadReceiptsButton from '@/components/DownloadReceiptsButton';
import InstallmentTable from '@/components/InstallmentTable';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">داشبورد کاربری</h1>

        {/* Installment Schedule Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">جدول اقساط</h2>
          <InstallmentTable />
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
