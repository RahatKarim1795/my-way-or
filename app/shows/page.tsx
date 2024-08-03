'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import 'typeface-metal-mania'

const shows = [
  { date: '2024-08-01', venue: 'Rock Arena', location: 'New York, NY' },
  { date: '2024-08-15', venue: 'Metal Hall', location: 'Los Angeles, CA' },
  { date: '2024-09-01', venue: 'Thunder Dome', location: 'Chicago, IL' },
  // Add more shows as needed
]

const sections = [
    { name: 'Shows', href: '/shows' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Photos', href: '/photos' },
    { name: 'Videos', href: '/videos' },
    { name: 'Contact', href: '/contact' },
  ]

export default function Shows() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
       {/* Navbar */}
      <nav className="bg-black bg-opacity-50 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold metal-mania-regular">
                Highway
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {sections.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden bg-gray-900">
        {!imageError && (
          <Image
            src="/shows-hero.jpeg"
            alt="Highway Live"
            layout="fill"
            objectFit="cover"
            objectPosition="center 30%"
            className="opacity-70"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black via-black/70 to-transparent">
          <h1 className="text-6xl font-bold metal-mania-regular text-red-600 tracking-wider mb-16">Upcoming Shows</h1>
        </div>
      </div>


      {/* Shows List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {shows.map((show, index) => (
            <div key={index} className="border border-gray-800 p-6 rounded-lg hover:bg-gray-900 transition duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-red-600">{new Date(show.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h2>
                  <p className="text-lg mb-1 text-gray-300">{show.venue}</p>
                  <p className="text-lg mb-4 text-gray-300">{show.location}</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-lg font-bold transition duration-300">
                  GET TICKETS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="text-center pb-16">
        <Link href="/" className="inline-block bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-md text-lg font-bold transition duration-300 border border-gray-600">
          BACK TO HOME
        </Link>
      </div>
    </div>
  )
}