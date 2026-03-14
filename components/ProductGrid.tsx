import React from 'react';
import Link from 'next/link';

// 1. Define the shape of your product data
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductGrid = () => {
  // 2. Generate 36 products with actual data
  const products: Product[] = Array.from({ length: 36 }, (_, index) => ({
    id: index + 1,
    name: "Liter trolley sprayer",
    price: "9.99",
    image: "/main.png" // Make sure this file exists in your 'public' folder
  }));

  return (
    <div 
      className="grid grid-cols-6 gap-[20px] mx-auto"
      style={{ 
        width: '1281px', 
        minHeight: '1435px', 
        marginTop: '107px', 
        opacity: '1' 
      }}
    >
      {products.map((item) => (
        // Pass the individual 'item' into the 'product' prop
        <ProductCard key={item.id} product={item} />
      ))}
      
      <div className="col-span-6 flex justify-center items-center gap-4 mt-10 py-10">
         <img src="/pagination-ui.png" alt="Pagination" width="300" height="40" />
      </div>
    </div>
  );
};

// 3. Destructure 'product' from the props and define its type
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.id}`} className="block transition-transform hover:scale-[1.02]">
      <div 
        className="cursor-pointer border border-gray-100 bg-white"
        style={{ 
          width: '190px', 
          height: '207px', 
          borderRadius: '10px',
          padding: '10px'
        }}
      >
        <div className="w-full h-[110px] overflow-hidden rounded-[5px] relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute top-2 right-2 bg-white/80 rounded-full p-1">
             <img src="/heart-icon.png" width="14" height="14" alt="favorite" />
          </div>
        </div>

        <div className="mt-2 flex flex-col gap-[4px]">
          <h3 className="text-[14px] font-medium text-[#FF7F50] leading-[100%] truncate">
            {product.name}
          </h3>
          <div className="flex items-center gap-[5px] h-[15px]">
            <span className="text-[14px] font-bold text-[#284297]">
              ${product.price}
            </span>
            <span className="text-[10px] text-gray-400">
              (Used)
            </span>
          </div>
          <p className="text-[12px] text-gray-500 h-[15px]">
            Los Angeles, CA
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductGrid;