'use client';
import Link from 'next/link';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const demoCat = [
  { label: 'Action1', value: 'action' },
  { label: 'Comedy1', value: 'comedy' },
  { label: 'Horror1', value: 'horror' },
  { label: 'Animations1', value: 'animations' },
  { label: 'Faster1', value: 'faster' },
  { label: 'Cooldown1', value: 'cooldown' },
  { label: 'Action2', value: 'action' },
  { label: 'Comedy2', value: 'comedy' },
  { label: 'Horror2', value: 'horror' },
  { label: 'Animations2', value: 'animations' },
  { label: 'Faster2', value: 'faster' },
  { label: 'Cooldown2', value: 'cooldown' },
  { label: 'Action3', value: 'action' },
  { label: 'Comedy3', value: 'comedy' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animations', value: 'animations' },
  { label: 'Faster', value: 'faster' },
  { label: 'Cooldown', value: 'cooldown' },
  { label: 'Action', value: 'action' },
  { label: 'Comedy', value: 'comedy' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animations', value: 'animations' },
  { label: 'Faster', value: 'faster' },
  { label: 'Cooldown', value: 'cooldown' },
  { label: 'Action', value: 'action' },
  { label: 'Comedy', value: 'comedy' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animations', value: 'animations' },
  { label: 'Faster', value: 'faster' },
  { label: 'Cooldown', value: 'cooldown' },
  { label: 'Action', value: 'action' },
  { label: 'Comedy', value: 'comedy' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animations', value: 'animations' },
  { label: 'Faster', value: 'faster' },
  { label: 'Cooldown', value: 'cooldown' },
];

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const cat = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top_Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const Categories = () => {
  return (
    <div className="px-8 mt-16 cat-slider relative">
      <div className="cat-holder flex gap-4 overflow-auto  ">
        <div className=" flex">
          {cat.map((cat) => {
            return (
              <Link href={'/'} className="bg-white flex justify-center place-items-center break-word text-black px-4 p-2 rounded-md ml-2 w-fit max-w-[150px] " key={cat.value}>
                {cat.label}
              </Link>
            );
          })}
        </div>

        <div className="flex">
          {demoCat.map((cat) => {
            return (
              <Link href={'/'} className="bg-red-app  px-4 inline-block  p-2 rounded-md ml-2 max-w-[150px] " key={cat.value}>
                {cat.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
