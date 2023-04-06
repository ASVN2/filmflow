import { BsLightning, BsArrowRightShort } from 'react-icons/bs';

export default function page() {
  return (
    <h1 className="flex gap-2 place-items-center text-3xl   w-screen h-screen justify-center">
      <h2 className="bg-white p-2 flex place-items-center rounded-md px-4 text-black cursor-pointer">
        FilmFlow Starting <BsArrowRightShort className="text-4xl" />
      </h2>
    </h1>
  );
}
