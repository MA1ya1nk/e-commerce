import React from 'react';

const ProductGrid = () => {
  // Mock data for the 36 items shown in your image (6 columns x 6 rows)
  const products = Array(36).fill(null);

  return (
    <div 
      className="grid grid-cols-6 gap-[20px] mx-auto"
      style={{ 
        width: '1281px', 
        minHeight: '1435px', 
        marginTop: '107px', // Space between header/filters and grid
        opacity: '1' 
      }}
    >
      {products.map((_, index) => (
        <ProductCard key={index} />
      ))}
      
      {/* Pagination Placeholder */}
      <div className="col-span-6 flex justify-center items-center gap-4 mt-10 py-10">
         <img src="/pagination-ui.png" alt="Pagination" width="300" height="40" />
      </div>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div 
      className="border border-[#E5E7EB] rounded-[10px] p-[10px] flex flex-col gap-[10px]"
      style={{ width: '190px', height: '207px' }}
    >
      {/* Product Image Placeholder */}
      <div className="relative">
        <img 
          src="/sprayer-placeholder.png" 
          alt="Liter trolley sprayer" 
          className="w-full h-[110px] object-cover rounded-[5px]"
        />
        {/* Heart Icon Placeholder */}
        <img 
          src="/heart-icon.png" 
          alt="Like" 
          className="absolute top-2 right-2 w-4 h-4"
        />
      </div>

      <div className="flex flex-col gap-[4px]">
        <h3 className="text-[#FF7F50] text-[14px] font-medium leading-[100%]">
          Liter trolley sprayer
        </h3>
        
        <div className="flex items-center gap-[5px] h-[15px] w-[75px]">
          <span className="text-[14px] font-bold text-[#284297]">$9.99</span>
          <span className="text-[10px] text-gray-400">(Used)</span>
        </div>

        <div className="flex items-center gap-[5px] h-[15px] w-[90px]">
          <span className="text-[12px] text-gray-500">Los Angeles, CA</span>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;