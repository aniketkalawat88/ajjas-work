import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-sm mx-auto border border-white/20">
      <div className="">
        <div className="bg-[#1A1A1A] p-4 rounded-b-xl">
          <h1 className="text-base font-semibold">Statistics</h1>
          <div className="mt-6 flex justify-between ">
            <span className="text-xs">Mar 1 - Mar 7 (Last week) </span>
            <div className="flex gap-4">
              <span>&#8592;</span>
              <span>&#8594;</span>
          </div>
        </div>

      </div>
      <div className="px-4">
        <div className="bg-[#1A1A1A] p-4 my-6 rounded-xl">
          <Link href={'/data-range'} className="flex justify-between">
            <h1 className="font-semibold text-sm">Riding Behaviour</h1>
            &#8594;
          </Link>
          <div className="bg-[#222222] p-2 border border-[#C6C6C600] rounded-xl mt-2">
            <div className="flex items-center text-sm gap-4">
              <div className="font-semibold flex items-center gap-3 border border-[#259DFE] rounded-md"> 
                <span className="bg-[#259DFE] p-1 px-2 h-full flex items-center justify-center text-xs">91%</span>
                <span className="p-1 text-xs">Excellent</span>
              </div>
              <p className="text-[10px] col-span-2 text-center"> <span className="text-[#D24343]">24%</span> vs preceding period </p>
            </div>
          </div>
        </div>
        <div className="bg-[#1A1A1A] p-6 my-6 rounded-xl">
          <Link href={'/data-range'} className="flex justify-between">
            <h1 className="font-semibold text-[#F3F3F3] text-sm">Journey </h1>
            &#8594;
          </Link>
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-4 border-r border-r-[#FFFFFF66]">
              <div className="text-[#FFFFFF99] text-[10px] flex items-center gap-1" ><p className="h-5 w-5 rounded-full bg-[#6EDDC9]"></p> Distance Travelled</div>
              <div className="text-2xl font-semibold  mt-3 mb-1">85.19 km</div>
              <p className="text-[10px]"> <span className="text-[#D24343]">24%</span> vs preceding period </p>
            </div>
            
            <div className="mt-4 ">
              <div className="text-[#FFFFFF99] text-[10px] flex items-center gap-1"><p className="h-5 w-5 rounded-full bg-[#00A8E2]" />Time Duration</div>
              <div className="text-2xl font-semibold  mt-3 mb-1">2hr 20 min</div>
              <p className="text-[10px]"> <span className="text-[#D24343]">24%</span> vs preceding period </p>
            </div>


            </div>
        </div>
        <div className="bg-[#1A1A1A] p-6 my-6 rounded-xl">
          <Link href={'/data-range'} className="flex justify-between">
            <h1 className="font-semibold text-[#F3F3F3]">Speed </h1>
            &#8594;
          </Link>
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-4 border-r border-r-[#FFFFFF66]">
              <div className="text-[#FFFFFF99] text-[10px] flex items-center gap-1" ><p className="h-5 w-5 rounded-full bg-[#AC630D]"></p> Average Speed</div>
              <div className="text-2xl font-semibold  mt-3 mb-1">50km/hr</div>
              <p className="text-[10px]"> <span className="text-[#D24343]">24%</span> vs preceding period </p>
            </div>
            
            <div className="mt-4 ">
              <div className="text-[#FFFFFF99] text-[10px] flex items-center gap-1"><p className="h-5 w-5 rounded-full bg-[#E2B519]" />Top Speed</div>
              <div className="text-2xl font-semibold  mt-3 mb-1">120km/hr</div>
              <p className="text-[10px]"> <span className="text-[#5FA04F]">24%</span> vs preceding period </p>
            </div>


            </div>
        </div>
        <div className="bg-[#1A1A1A] p-6 my-6 rounded-xl">
          <Link href={'/data-range'} className="flex justify-between">
            <h1 className="font-semibold text-[#F3F3F3]">Fuel </h1>
            &#8594;
          </Link>
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-4 border-r border-r-[#FFFFFF66]">
              <div className="text-[#FFFFFF99] text-[10px] flex items-center gap-1" ><p className="h-5 w-5 rounded-full bg-[#AC630D]"></p> Fuel Consumed</div>
              <div className="text-2xl font-semibold  mt-3 mb-1">3.01L</div>
              <p className="text-[10px]"> <span className="text-[#D24343]">24%</span> vs preceding period </p>
            </div>
            
            <div className="mt-4 ">
              <div className="text-[#FFFFFF99] text-[10px] flex items-center gap-1"><p className="h-5 w-5 rounded-full bg-[#E2B519]" />Fuel Cost</div>
              <div className="text-2xl font-semibold  mt-3 mb-1">₹248</div>
              <p className="text-[10px]"> <span className="text-[#D24343]">24%</span> vs preceding period </p>
            </div>


            </div>
        </div>

      </div>
      </div>
     
    </main>
  );
}
