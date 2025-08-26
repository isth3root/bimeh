"use client";

import jsPDF from 'jspdf';
// The default export is the autoTable function, but we can also get the types.
import autoTable, { UserOptions } from 'jspdf-autotable';

// Mock data for receipts (could be passed as props)
const receipts = [
  { id: 1, date: '1403/05/01', amount: '2,500,000 ریال', description: 'قسط بیمه عمر' },
  { id: 2, date: '1403/06/01', amount: '2,500,000 ریال', description: 'قسط بیمه عمر' },
];

export default function DownloadReceiptsButton() {
  const downloadPDF = () => {
    const doc = new jsPDF();

    // IMPORTANT: jsPDF does not support Persian characters out of the box.
    // A custom font with Persian glyphs needs to be embedded for the text to render correctly.
    // Since I cannot add font files to the project, the output will likely be garbled.

    doc.text("Payment Receipts", 14, 20); // This will be in English

    const tableOptions: UserOptions = {
      startY: 30,
      head: [['ID', 'Date', 'Amount', 'Description']],
      body: receipts.map(r => [r.id, r.date, r.amount, r.description]),
      // For Persian text to render, a font that supports it must be registered and set here.
      // Example: styles: { font: 'Vazir' }
    };

    autoTable(doc, tableOptions);

    doc.save('payment-receipts.pdf');
  };

  return (
    <button
      onClick={downloadPDF}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      دانلود رسیدها (نسخه آزمایشی)
    </button>
  );
}
