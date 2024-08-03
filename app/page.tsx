"use client"

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import 'typeface-metal-mania'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, User, X, Mail, Lock, Eye, EyeOff } from 'lucide-react'

const sections = [
  { name: 'Shows', href: '/shows' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Photos', href: '/photos' },
  { name: 'Videos', href: '/videos' },
  { name: 'Merch', href: '/merch' },
  { name: 'Contact', href: '/contact' },
]

const photos = ['pic1', 'pic2', 'pic3']

export default function Home() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 5000) // Change photo every 5 seconds (slower)

    return () => clearInterval(timer)
  }, [])

  const changePhoto = (direction: 'next' | 'prev') => {
    setCurrentPhotoIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % photos.length
      } else {
        return (prevIndex - 1 + photos.length) % photos.length
      }
    })
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your login logic here
    console.log('Login attempt with:', { email, password })
    // Close the modal after login attempt
    setIsLoginModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-black bg-opacity-50 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold metal-mania-regular">
                Highway
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <div className="flex items-baseline space-x-4">
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
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="ml-4 flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                <User className="w-4 h-4 mr-1" />
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div 
        className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-500 ease-in-out ${
          isLoginModalOpen 
            ? 'bg-black bg-opacity-70 backdrop-blur-sm' 
            : 'bg-transparent bg-opacity-0 backdrop-blur-none pointer-events-none'
        }`}
        onClick={() => setIsLoginModalOpen(false)}
      >
        <div 
          className={`bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full transition-all duration-500 ${
            isLoginModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Login</h2>
            <button onClick={() => setIsLoginModalOpen(false)} className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-700 block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="bg-gray-700 block w-full pl-10 pr-10 py-2 border border-gray-600 rounded-md leading-5 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Hero Section with Curved Band Name and Image */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black">
          <Image
            src="/band-image.jpeg"
            alt="Highway Band"
            layout="fill"
            objectFit="contain"
            className="filter blur-sm"
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div id="band-name" className="w-full max-w-3xl">
            <svg viewBox="0 0 500 100" className="w-full h-auto">
              <defs>
                <path
                  id="curve"
                  d="M0,50 Q250,80 500,50"
                  fill="none"
                  stroke="none"
                />
              </defs>
              <text className="fill-current font-bold text-7xl metal-mania-regular">
                <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                  Highway
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Preview Sections */}
      {sections.map((section, index) => (
        <div
          key={section.name}
          className={`py-16 ${
            index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {section.name === 'Photos' ? (
              <div className="h-96 bg-gray-700 rounded-lg overflow-hidden relative">
                <h2 className="text-2xl font-semibold mb-4 absolute top-4 left-1/2 transform -translate-x-1/2 z-10 text-white bg-black bg-opacity-50 px-4 py-2 rounded">{section.name}</h2>
                {photos.map((photo, photoIndex) => (
                  <div
                    key={photo}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      photoIndex === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={`/${photo}.jpeg`}
                      alt={`Band photo ${photoIndex + 1}`}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black pointer-events-none"></div>
                  </div>
                ))}
                <button
                  onClick={() => changePhoto('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all duration-200 z-20"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={() => changePhoto('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all duration-200 z-20"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
                <Link
                  href={section.href}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 bg-opacity-50 hover:bg-opacity-70 px-6 py-2 rounded-md text-sm font-medium transition duration-300 z-20"
                >
                  View All {section.name}
                </Link>
              </div>
            ) : section.name === 'Merch' ? (
              <div className="h-64 bg-gray-700 rounded-lg flex flex-col items-center justify-center">
                <h2 className="text-3xl font-semibold mb-4">{section.name}</h2>
                <p className="text-xl mb-4">Check out our latest merchandise!</p>
                <Link
                  href={section.href}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium transition duration-300"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="h-64 bg-gray-700 rounded-lg flex flex-col items-center justify-center">
                <h2 className="text-3xl font-semibold mb-4">{section.name}</h2>
                <p className="text-xl mb-4">Preview content for {section.name}</p>
                <Link
                  href={section.href}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium transition duration-300"
                >
                  View All {section.name}
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}