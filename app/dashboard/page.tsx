import React from 'react';

const DashboardPage = () => {
  return (
    <div className="flex bg-white min-h-screen overflow-x-hidden">
      {/* LEFT SIDEBAR: Fixed width 223px */}
      <div 
        style={{ width: '223px', height: '832px', paddingTop: '17px', opacity: 1 }}
        className="flex flex-col border-r border-gray-100 sticky top-0"
      >
        <div className="flex flex-col w-full px-6">
          {/* ShopRise Logo - Reduced margin to icons */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <span className="font-bold text-lg text-[#1F3A93]">ShopRise</span>
          </div>
          
          {/* Navigation Tabs - Tightened gap */}
          <nav className="flex flex-col gap-1 w-full">
            {[
              { name: 'Dashboard', active: true },
              { name: 'Purchasing', active: false },
              { name: 'Sales', active: false },
              { name: 'Favourites', active: false },
              { name: 'Chat', active: false },
              { name: 'Setting', active: false }
            ].map((item) => (
              <div 
                key={item.name} 
                className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
                  item.active ? 'text-[#FF8A65] bg-[#FFF5F2]' : 'text-gray-400'
                }`}
              >
                {/* Icon Placeholder */}
                <div className={`w-5 h-5 rounded ${item.active ? 'bg-[#FF8A65]' : 'bg-gray-200'}`} />
                <span className="text-[14px] font-medium">{item.name}</span>
              </div>
            ))}
          </nav>
        </div>
        
        {/* Bottom Nav: Help & Logout */}
        <div className="flex flex-col gap-2 w-full px-6 mt-auto pb-10">
           <div className="flex items-center gap-3 text-gray-400 text-[14px] cursor-pointer">
             <div className="w-5 h-5 bg-gray-200 rounded" /> Help
           </div>
           <div className="flex items-center gap-3 text-gray-400 text-[14px] cursor-pointer">
             <div className="w-5 h-5 bg-gray-200 rounded" /> Logout
           </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA: Removed absolute positioning to stop scrollbars */}
      <div className="flex-1 p-10 flex flex-col gap-8">
        {/* Header Greeting */}
        <div className="flex justify-between items-center w-full max-w-[1023px]">
          <h1 className="text-[24px] font-bold">Welcome back John!</h1>
          <button className="text-[14px] text-gray-400 flex items-center gap-1">
            Go to marketplace ↗
          </button>
        </div>

        {/* TOP COMPONENT: Marketplace Insights */}
        <div className="flex flex-col gap-4 max-w-[1023px]">
          <h2 style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px' }} className="text-[#284297]">
            Marketplace insights
          </h2>
          <div className="flex justify-between gap-4">
            {['Clicks on listings', 'Listing saves', 'Listing shares', 'Marketplace followers'].map((label) => (
              <div key={label} style={{ width: '230px', height: '70px' }} className="bg-white flex items-center gap-3 px-4">
                <div className="w-10 h-10 bg-[#284297] rounded flex items-center justify-center text-white font-bold">0</div>
                <span className="text-[12px] text-gray-600 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE COMPONENT: Analytics Cards */}
        <div className="flex flex-col gap-4 max-w-[1023px]">
          <h2 style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '18px' }} className="text-[#284297]">
            Marketplace insights
          </h2>
          <div className="flex justify-between gap-4">
            {[
              { label: 'Cancellation rate', sub: 'You have canceled 0% of your orders' },
              { label: 'Missed handling rate', sub: 'You have shipped or canceled 0% of orders' },
              { label: 'Claim escalation', sub: '0% of your orders are covered by Purchase Protection' },
              { label: 'Chargeback rate', sub: '0% chargeback rate through the league payment method' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                style={{ width: '230px', height: '89px', paddingRight: '10px', paddingLeft: '10px' }} 
                className="bg-white flex flex-col justify-center"
              >
                <div className="text-[#284297] text-[20px] font-bold">0%</div>
                <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px' }}>{item.label}</div>
                <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px' }} className="text-gray-400">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM COMPONENT: Orders Table */}
        <div className="flex flex-col gap-3 max-w-[1023px]">
          <div 
            style={{ width: '79px', height: '32px', paddingTop: '5px', paddingRight: '10px', paddingBottom: '5px', paddingLeft: '10px' }}
            className="text-[#284297] font-bold text-[16px] flex items-center"
          >
            Orders
          </div>
          
          <div className="overflow-hidden rounded-lg">
            <table className="w-full text-left">
              {/* Table Header with specific light bg #D3D3D380 */}
              <thead style={{ backgroundColor: '#D3D3D380' }} className="text-[12px] text-gray-600">
                <tr>
                  <th className="p-4 font-semibold">ID</th>
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Customer</th>
                  <th className="p-4 font-semibold">Products</th>
                  <th className="p-4 font-semibold">Adress</th>
                  <th className="p-4 font-semibold">Fulfillment</th>
                  <th className="p-4 font-semibold">Total</th>
                  <th className="p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="text-[12px] bg-white">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td className="p-4">173204</td>
                    <td className="p-4">10 March</td>
                    <td className="p-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-200" />
                      Jackson Smith
                    </td>
                    <td className="p-4 text-gray-500">Litter trolley sprayer</td>
                    <td className="p-4 text-gray-500">Los Angeles, CA</td>
                    <td className="p-4 text-orange-400">Pending</td>
                    <td className="p-4 font-bold">$100.00</td>
                    <td className="p-4">
                       <span className="bg-green-50 text-green-600 px-2 py-1 rounded">Delivered</span>
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
};

export default DashboardPage;