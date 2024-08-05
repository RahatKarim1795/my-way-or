import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const sections = ['Shows', 'Blogs', 'Photos', 'Videos', 'Merch', 'Contact'];

  return (
    <nav className="bg-black bg-opacity-50 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold metal-mania-regular text-white">
              Highway
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {sections.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;