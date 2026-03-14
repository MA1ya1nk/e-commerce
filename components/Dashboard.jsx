import React from 'react';

const DashboardPage = () => {
  return (
    <div className="flex bg-[#F9FAFB] min-h-screen">
      {/* LEFT SIDEBAR: width: 223px */}
      <div 
        style={{ width: '223px', height: '832px', paddingTop: '17px', gap: '321px', opacity: 1 }}
        className="bg-white border-r border-gray-200 flex flex-col items-center sticky top-0"
      >
        <div className="flex flex-col gap-6 w-full px-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <span className="font-bold text-lg">ShopRise</span>
          </div>
          
          {/* Navigation Tabs */}
          <nav className="flex flex-col gap-4 w-full">
            {['Dashboard', 'Purchasing', 'Sales', 'Favourites', 'Chat', 'Setting'].map((item) => (
              <div 
                key={item} 
                className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${item === 'Dashboard' ? 'text-[#FF8A65] bg-[#FFF5F2]' : 'text-gray-500'}`}
              >
                <div className="w-5 h-5 bg-current opacity-20" />
                <span className="text-[14px] font-medium">{item}</span>
              </div>
            ))}
          </nav>
        </div>
        
        {/* Bottom Nav: Help & Logout */}
        <div className="flex flex-col gap-4 w-full px-6 mt-auto pb-8">
           <div className="flex items-center gap-3 text-gray-500 text-[14px] cursor-pointer">
             <div className="w-5 h-5 bg-gray-400 opacity-20" /> Help
           </div>
           <div className="flex items-center gap-3 text-gray-500 text-[14px] cursor-pointer">
             <div className="w-5 h-5 bg-gray-400 opacity-20" /> Logout
           </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 relative">
        {/* Header Greeting */}
        <div className="absolute top-[60px] left-[232px] flex justify-between items-center w-[1023px]">
          <h1 className="text-[24px] font-bold">Welcome back John!</h1>
          <button className="text-[14px] text-gray-500 flex items-center gap-1">
            Go to marketplace ↗
          </button>
        </div>

        {/* TOP COMPONENT: Marketplace Insights (1023x165) */}
        <div 
          style={{ width: '1023px', height: '165px', top: '123px', left: '232px', gap: '10px' }}
          className="absolute flex flex-col"
        >
          <h2 style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', lineHeight: '100%' }} className="text-[#284297] mb-4">
            Marketplace insights
          </h2>
          <div className="flex gap-[34px]">
            {['Clicks on listings', 'Listing saves', 'Listing shares', 'Marketplace followers'].map((label) => (
              <div key={label} style={{ width: '230px', height: '70px', gap: '10px' }} className="bg-white border rounded-[8px] p-4 flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 bg-[#284297] rounded flex items-center justify-center text-white font-bold">0</div>
                <span className="text-[14px] text-gray-600 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE COMPONENT: Rate Cards (1023x174) */}
        <div 
          style={{ width: '1023px', height: '174px', top: '288px', left: '232px' }}
          className="absolute flex flex-col"
        >
          <h2 style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px', lineHeight: '100%' }} className="text-[#284297] mb-4">
            Marketplace insights
          </h2>
          <div className="flex gap-[34px]">
            {[
              { label: 'Cancellation rate', sub: 'You have canceled 0% of your orders' },
              { label: 'Missed handling rate', sub: 'You have shipped or canceled 0% of orders' },
              { label: 'Claim escalation', sub: '0% of your orders are covered by Purchase Protection' },
              { label: 'Chargeback rate', sub: '0% chargeback rate through the league payment method' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                style={{ width: '230px', height: '89px', paddingRight: '10px', paddingLeft: '10px', gap: '3px' }} 
                className="bg-white border rounded-[8px] flex flex-col justify-center shadow-sm"
              >
                <div className="text-[#284297] text-[20px] font-bold">0%</div>
                <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '100%' }}>{item.label}</div>
                <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', lineHeight: '100%' }} className="text-gray-400 mt-1">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM COMPONENT: Orders Table (1023x352) */}
        <div 
          style={{ width: '1023px', height: '352px', top: '462px', left: '229px', gap: '13px' }}
          className="absolute flex flex-col"
        >
          <div 
            style={{ width: '1023px', height: '37px', gap: '30px', paddingTop: '10px', paddingRight: '20px', paddingBottom: '10px', paddingLeft: '20px', borderRadius: '5px' }}
            className="flex items-center text-[#284297] font-bold text-[16px]"
          >
            Orders
          </div>
          
          <table className="w-full bg-white rounded-lg overflow-hidden border">
            <thead className="bg-gray-50 text-[12px] text-gray-500 text-left">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Date</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Products</th>
                <th className="p-4">Adress</th>
                <th className="p-4">Fulfillment</th>
                <th className="p-4">Total</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-[12px]">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="border-t">
                  <td className="p-4">173204</td>
                  <td className="p-4">10 March</td>
                  <td className="p-4 flex items-center gap-2">
                    <img src="/Dashboard/profile.png" className="w-6 h-6 rounded-full" />
                    Jackson Smith
                  </td>
                  <td className="p-4">Litter trolley sprayer</td>
                  <td className="p-4 italic">Adress...</td>
                  <td className="p-4"><span className="text-orange-400">Pending</span></td>
                  <td className="p-4 font-bold">$100.00</td>
                  <td className="p-4"><span className="bg-green-100 text-green-600 px-2 py-1 rounded">Delivered</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;