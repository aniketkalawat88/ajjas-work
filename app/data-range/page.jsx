import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='max-w-sm mx-auto border border-white/20 min-h-screen'>
      <div className="bg-[#1A1A1A] pt-4 px-4 rounded-b-xl">
        <div className='flex justify-between items-center'>
        <Link href={'/'} className="text-base font-semibold flex gap-4">&#10005; <span> Date range</span></Link>
          <span className='text-[#FFBE00] font-semibold'>Save</span>
        </div>
          <div className="mt-6 flex justify-between px-6 text-sm">
            <Link href={'/data-range'} className='border-b-2 border-b-[#FFBE00] pb-2' >Day</Link>
            <Link href={'/data-range/week'} className='pb-2' >Week</Link>
            <Link href={'/data-range/month'} className='pb-2' >Month</Link>
            <Link href={'/data-range/other'} className='pb-2' >Other</Link>

          </div>

      </div>
      <div className='p-6'>
        <div className='grid group border-b-[#FFFFFF26] border-b-2 py-4'>
          <span className='group-hover:text-[#FFBE00] text-sm'>Today</span>
          <span className='text-xs text-[#FFFFFF99]'>Friday, April 5</span>
        </div>
        <div className='grid group border-b-[#FFFFFF26] border-b-2 py-4'>
          <span className='group-hover:text-[#FFBE00] text-sm'>Yesterday</span>
          <span className='text-xs text-[#FFFFFF99]'>Thursday, April 4</span>
        </div>
        <div className='grid group py-4'>
          <span className='group-hover:text-[#FFBE00] text-sm'>Day before yesterday</span>
          <span className='text-xs text-[#FFFFFF99]'>Wednesday, April 3</span>
        </div>
      </div>
      
    </div>
  )
}
