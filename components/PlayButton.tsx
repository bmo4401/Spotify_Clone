import { FaPlay } from 'react-icons/fa';

const PlayButton = () => {
   return (
      <button className="transition opacity-0 rounded-full flex items-center p-3 bg-green-500 drop-shadow-sm translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110  ">
         <FaPlay className="text-black text-base" />
      </button>
   );
};
export default PlayButton;
