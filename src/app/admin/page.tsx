"use client";

import React, { useState } from 'react';

// Mock data for users and their installments
const mockUsers = [
  {
    id: 1,
    name: 'علی رضایی',
    nationalId: '1234567890',
    installments: [
      { id: 1, date: '1403/05/01', amount: '2,500,000 ریال', status: 'پرداخت شده' },
      { id: 2, date: '1403/06/01', amount: '2,500,000 ریال', status: 'در انتظار پرداخت' },
    ],
  },
  {
    id: 2,
    name: 'مریم حسینی',
    nationalId: '0987654321',
    installments: [
      { id: 1, date: '1403/05/15', amount: '1,800,000 ریال', status: 'پرداخت شده' },
      { id: 2, date: '1403/06/15', amount: '1,800,000 ریال', status: 'دیرکرد' },
    ],
  },
];

type Status = 'پرداخت شده' | 'در انتظار پرداخت' | 'دیرکرد';

export default function AdminPage() {
  const [users] = useState(mockUsers);
  // For now, we'll just edit the first user's installments
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const handleStatusChange = (installmentId: number, newStatus: Status) => {
    const updatedUser = { ...selectedUser };
    const installmentIndex = updatedUser.installments.findIndex(inst => inst.id === installmentId);
    if (installmentIndex !== -1) {
      updatedUser.installments[installmentIndex].status = newStatus;
      setSelectedUser(updatedUser);
      // Here you would also update the main users array and persist the change
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">پنل مدیریت</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Users List */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">کاربران</h2>
          <ul>
            {users.map(user => (
              <li key={user.id} className="p-2 hover:bg-gray-50 cursor-pointer rounded-md">
                {user.name} - {user.nationalId}
              </li>
            ))}
          </ul>
        </div>

        {/* Installments Management */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">مدیریت اقساط کاربر: {selectedUser.name}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">تاریخ</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">مبلغ</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">وضعیت</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {selectedUser.installments.map(inst => (
                  <tr key={inst.id}>
                    <td className="px-4 py-4 whitespace-nowrap">{inst.date}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{inst.amount}</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <select
                        value={inst.status}
                        onChange={(e) => handleStatusChange(inst.id, e.target.value as Status)}
                        className="p-1 border rounded-md bg-white"
                      >
                        <option value="پرداخت شده">پرداخت شده</option>
                        <option value="در انتظار پرداخت">در انتظار پرداخت</option>
                        <option value="دیرکرد">دیرکرد</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
