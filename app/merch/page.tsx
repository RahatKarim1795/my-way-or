import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const MerchandisePage = () => {
  const merchandise = [
    { id: 1, name: 'Highway T-Shirt', price: 25.99, image: '/merch/tshirt.jpg' },
    { id: 2, name: 'Highway Hoodie', price: 49.99, image: '/merch/hoodie.jpg' },
    { id: 3, name: 'Highway Cap', price: 19.99, image: '/merch/cap.jpg' },
    { id: 4, name: 'Highway Poster', price: 15.99, image: '/merch/poster.jpg' },
    { id: 5, name: 'Highway Vinyl', price: 29.99, image: '/merch/vinyl.jpg' },
    { id: 6, name: 'Highway Mug', price: 12.99, image: '/merch/mug.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Highway Merchandise</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchandise.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
                    Add to Cart
                  </button>
                  <Link href={`/merchandise/${item.id}`} passHref>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-300">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MerchandisePage;