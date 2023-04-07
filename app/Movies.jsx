'use client';

import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '@/services/TMDB';

export default async function page() {
  const data = useGetMoviesQuery();
  console.Console(data);
  return <div className="flex gap-2 place-items-center text-3xl justify-center"></div>;
}
