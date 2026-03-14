import React from 'react';

const FavouritesPage = () => {
  // Array to simulate the grid items
  const products = Array(15).fill(null);

  return (
    <div className="flex bg-white min-h-screen overflow-x-hidden">
      {/* SIDEBAR (Keep identical to Dashboard for consistency) */}
      <div 
        style={{ width: '223px', height: '832px', paddingTop: '17px' }}
        className="flex flex-col border-r border-gray-100 sticky top-0"
      >
        <div className="flex flex-col w-full px-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <span className="font-bold text-lg text-[#1F3A93]">ShopRise</span>
          </div>
          <nav className="flex flex-col gap-1 w-full">
            {[
              { name: 'Dashboard', active: false },
              { name: 'Purchasing', active: false },
              { name: 'Sales', active: false },
              { name: 'Favourites', active: true },
              { name: 'Chat', active: false },
              { name: 'Setting', active: false }
            ].map((item) => (
              <div 
                key={item.name} 
                className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
                  item.active ? 'text-[#FF8A65] bg-[#FFF5F2]' : 'text-gray-400'
                }`}
              >
                <div className={`w-5 h-5 rounded ${item.active ? 'bg-[#FF8A65]' : 'bg-gray-200'}`} />
                <span className="text-[14px] font-medium">{item.name}</span>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 relative p-[20px]">
        
        {/* Favourites Title */}
        <h1 
          style={{ 
            width: '111px', height: '27px', top: '80px', left: '32px',
            fontFamily: 'Inter', fontWeight: 500, fontSize: '22px', 
            lineHeight: '100%', color: '#1F3A93', position: 'absolute'
          }}
        >
          Favourites
        </h1>

        {/* Product Grid Container */}
        <div 
          style={{ 
            width: '1023px', height: '675px', top: '138px', left: '32px',
            position: 'absolute', display: 'grid', 
            gridTemplateColumns: 'repeat(5, 190px)', 
            gap: '13px' // Adjusted gap to fit 5 cards in 1023px width
          }}
        >
          {products.map((_, index) => (
            <div 
              key={index}
              style={{ 
                width: '190px', height: '207px', borderRadius: '10px', 
                border: '1px solid #E5E7EB', padding: '10px',
                display: 'flex', flexDirection: 'column', gap: '10px'
              }}
              className="bg-white shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Product Image Placeholder */}
              <div className="w-full h-[100px] bg-gray-100 rounded-[8px] overflow-hidden relative">
                <img src="/main.png" alt="sprayer" className="w-full h-full object-cover" />
                {/* Heart Icon Overlay */}
                <div className="absolute top-2 right-2 text-[#FF8A65]">
                   <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1">
                <h3 
                  style={{ 
                    width: '170px', height: '17px', fontFamily: 'Inter', 
                    fontWeight: 500, fontSize: '14px', lineHeight: '100%' 
                  }}
                  className="truncate"
                >
                  Litter trolley sprayer
                </h3>
                
                <div className="flex justify-between items-center mt-1">
                   <span 
                    style={{ 
                      width: '34px', height: '15px', fontFamily: 'Inter', 
                      fontWeight: 500, fontSize: '12px', lineHeight: '100%',
                      color: '#1F3A93'
                    }}
                   >
                     $9.99
                   </span>
                   <span className="text-gray-400 text-[10px]">(Used)</span>
                </div>

                <span 
                  style={{ 
                    width: '90px', height: '15px', fontFamily: 'Inter', 
                    fontWeight: 400, fontSize: '12px', lineHeight: '100%' 
                  }}
                  className="text-gray-500 mt-1"
                >
                  Los Angeles.CA
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;