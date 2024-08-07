import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const MerchandiseDetailPage = ({ params }: { params: { id: string } }) => {
  // In a real application, you would fetch the item details based on the ID
  const item = {
    id: parseInt(params.id),
    name: 'Highway T-Shirt',
    price: 25.99,
    image: '/merch/tshirt.jpg',
    description: 'Show your love for Highway with this comfortable and stylish t-shirt. Made from 100% cotton, it features the band\'s iconic logo on the front.',
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative h-96 w-full md:w-96">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
              <p className="text-xl text-gray-300 mb-4">${item.price.toFixed(2)}</p>
              <p className="text-gray-400 mb-6">{item.description}</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MerchandiseDetailPage;