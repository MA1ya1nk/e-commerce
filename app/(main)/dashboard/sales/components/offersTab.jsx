'use client';
import { TrendingUp, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

const mockOffers = [
  { id: '#OFF-001', item: '2019 Toyota Corolla', from: 'James Brown', offered: '$7,900', asking: '$8,500', date: 'Mar 14, 2026', status: 'Pending' },
  { id: '#OFF-002', item: 'Studio Apartment — Downtown', from: 'Sara White', offered: '$1,050/mo', asking: '$1,200/mo', date: 'Mar 13, 2026', status: 'Accepted' },
  { id: '#OFF-003', item: 'Mountain Bike 2022', from: 'Tom Gray', offered: '$290', asking: '$340', date: 'Mar 11, 2026', status: 'Declined' },
  { id: '#OFF-004', item: 'Vintage Leather Sofa', from: 'Nina Adams', offered: '$150', asking: '$180', date: 'Mar 09, 2026', status: 'Pending' },
];

const statusStyles = {
  Accepted: { bg: 'bg-green-50',  text: 'text-green-600' },
  Pending:  { bg: 'bg-orange-50', text: 'text-orange-500' },
  Declined: { bg: 'bg-red-50',    text: 'text-red-500' },
};

export default function OffersTab() {
  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Offers', value: '4',  color: '#1F3A93', Icon: TrendingUp },
          { label: 'Pending',      value: '2',  color: '#FF8A65', Icon: MessageSquare },
          { label: 'Accepted',     value: '1',  color: '#10B981', Icon: CheckCircle },
        ].map(({ label, value, color, Icon }) => (
          <div key={label} className="bg-white rounded-[10px] border border-gray-100 px-6 py-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: color + '18' }}>
              <Icon size={18} style={{ color }} />
            </div>
            <div>
              <p className="text-[12px] text-gray-400 font-medium">{label}</p>
              <p className="text-[22px] font-bold" style={{ color }}>{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Offers table */}
      <div className="bg-white rounded-[10px] border border-gray-100 overflow-hidden">
        <table className="w-full text-[14px]">
          <thead>
            <tr className="border-b border-gray-100 text-gray-400 text-[12px] uppercase tracking-wider">
              <th className="text-left px-6 py-4 font-medium">Offer ID</th>
              <th className="text-left px-6 py-4 font-medium">Item</th>
              <th className="text-left px-6 py-4 font-medium">From</th>
              <th className="text-left px-6 py-4 font-medium">Offered</th>
              <th className="text-left px-6 py-4 font-medium">Asking</th>
              <th className="text-left px-6 py-4 font-medium">Date</th>
              <th className="text-left px-6 py-4 font-medium">Status</th>
              <th className="text-left px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockOffers.map((offer, i) => {
              const s = statusStyles[offer.status];
              return (
                <tr key={offer.id} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${i === mockOffers.length - 1 ? 'border-0' : ''}`}>
                  <td className="px-6 py-4 text-[#1F3A93] font-medium">{offer.id}</td>
                  <td className="px-6 py-4 text-gray-700">{offer.item}</td>
                  <td className="px-6 py-4 text-gray-500">{offer.from}</td>
                  <td className="px-6 py-4 text-[#FF8A65] font-medium">{offer.offered}</td>
                  <td className="px-6 py-4 text-gray-400 line-through">{offer.asking}</td>
                  <td className="px-6 py-4 text-gray-400">{offer.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium ${s.bg} ${s.text}`}>
                      {offer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {offer.status === 'Pending' && (
                      <div className="flex gap-2">
                        <button className="p-1.5 bg-green-50 text-green-600 rounded-md hover:bg-green-100 transition-colors">
                          <CheckCircle size={14} />
                        </button>
                        <button className="p-1.5 bg-red-50 text-red-500 rounded-md hover:bg-red-100 transition-colors">
                          <XCircle size={14} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}