"use client"

import Link from 'next/link'
import React, { useState } from 'react'

export default function Other() {
  const [isVal  , setIsVal] = useState(0)
  return (
    <div className='max-w-sm mx-auto border border-white/20 min-h-screen'>
      <div className="bg-[#1A1A1A] pt-4 px-4 rounded-b-xl">
        <div className='flex justify-between items-center'>
        <Link href={'/'} className="text-base font-semibold flex gap-4">&#10005; <span> Date range</span></Link>
          <span className='text-[#FFBE00] font-semibold'>Save</span>
        </div>
          <div className="mt-6 flex justify-between px-6 text-sm">
            <Link href={'/data-range'} className='pb-2' >Day</Link>
            <Link href={'/data-range/week'} className='pb-2' >Week</Link>
            <Link href={'/data-range/month'} className='pb-2' >Month</Link>
            <Link href={'/data-range/other'} className='pb-2 border-b-2 border-b-[#FFBE00]' >Other</Link>
          </div>

      </div>
      <div className='p-6'>
        <div>
          <div className='grid group border-b-[#FFFFFF26] border-b-2 py-4' onClick={() => setIsVal(0)}>
            <span className='group-hover:text-[#FFBE00] text-sm'>This year</span>
            <span className='text-[#FFFFFF99] text-xs'>Jan 1 - Apr 20</span>
          </div>
        </div>
        <div className='grid group border-b-[#FFFFFF26] border-b-2 py-4'>
          <span className='group-hover:text-[#FFBE00] text-sm'>Previous year</span>
          <span className='text-[#FFFFFF99] text-xs'>Jan 1’ 2023 - Dec 20’ 2023</span>
        </div>
        <div className='grid group py-4'>
          <span className='group-hover:text-[#FFBE00] text-sm'>Lifetime</span>
          <span className='text-[#FFFFFF99] text-xs'>Apr 5’ 2022 - Apr 20’ 2024</span>
        </div>
      </div>
      
    </div>
  )
}
