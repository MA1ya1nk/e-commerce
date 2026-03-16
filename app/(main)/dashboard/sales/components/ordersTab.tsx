'use client';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';

const mockOrders = [
  { id: '#ORD-001', item: 'Mountain Bike 2022', buyer: 'Alice Martin', date: 'Mar 12, 2026', amount: '$340', status: 'Completed' },
  { id: '#ORD-002', item: '2019 Toyota Corolla', buyer: 'Bob Smith', date: 'Mar 10, 2026', amount: '$8,500', status: 'Pending' },
  { id: '#ORD-003', item: 'Studio Apartment — Downtown', buyer: 'Clara Jones', date: 'Mar 08, 2026', amount: '$1,200/mo', status: 'Completed' },
  { id: '#ORD-004', item: 'iPhone 14 Pro', buyer: 'David Lee', date: 'Mar 05, 2026', amount: '$720', status: 'Cancelled' },
  { id: '#ORD-005', item: 'Vintage Leather Sofa', buyer: 'Emma Wilson', date: 'Mar 02, 2026', amount: '$180', status: 'Pending' },
];

const statusStyles = {
  Completed: { bg: 'bg-green-50', text: 'text-green-600', icon: CheckCircle },
  Pending:   { bg: 'bg-orange-50', text: 'text-orange-500', icon: Clock },
  Cancelled: { bg: 'bg-red-50',   text: 'text-red-500',    icon: XCircle },
};

export default function OrdersTab() {
  return (
    <div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Orders', value: '12', color: '#1F3A93' },
          { label: 'Pending',      value: '3',  color: '#FF8A65' },
          { label: 'Completed',    value: '8',  color: '#10B981' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white rounded-[10px] border border-gray-100 px-6 py-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: color + '18' }}>
              <Package size={18} style={{ color }} />
            </div>
            <div>
              <p className="text-[12px] text-gray-400 font-medium">{label}</p>
              <p className="text-[22px] font-bold" style={{ color }}>{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Orders table */}
      <div className="bg-white rounded-[10px] border border-gray-100 overflow-hidden">
        <table className="w-full text-[14px]">
          <thead>
            <tr className="border-b border-gray-100 text-gray-400 text-[12px] uppercase tracking-wider">
              <th className="text-left px-6 py-4 font-medium">Order ID</th>
              <th className="text-left px-6 py-4 font-medium">Item</th>
              <th className="text-left px-6 py-4 font-medium">Buyer</th>
              <th className="text-left px-6 py-4 font-medium">Date</th>
              <th className="text-left px-6 py-4 font-medium">Amount</th>
              <th className="text-left px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order, i) => {
              const s = statusStyles[order.status];
              const StatusIcon = s.icon;
              return (
                <tr key={order.id} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${i === mockOrders.length - 1 ? 'border-0' : ''}`}>
                  <td className="px-6 py-4 text-[#1F3A93] font-medium">{order.id}</td>
                  <td className="px-6 py-4 text-gray-700">{order.item}</td>
                  <td className="px-6 py-4 text-gray-500">{order.buyer}</td>
                  <td className="px-6 py-4 text-gray-400">{order.date}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium ${s.bg} ${s.text}`}>
                      <StatusIcon size={12} />
                      {order.status}
                    </span>
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