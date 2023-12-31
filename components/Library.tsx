'use client';
import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';
import { Song } from '@/types';
import MediaItem from './MediaItem';
import usePlayer from '@/hooks/usePlayer';
import useOnPlay from '@/hooks/useOnPlay';
import useSubscribeModal from '@/hooks/useSubscribeModal';
interface LibraryProps {
   songs: Song[];
}
const Library: React.FC<LibraryProps> = ({ songs }) => {
   const player = usePlayer();
   const subscribeModal = useSubscribeModal();
   const onPlay = useOnPlay(songs);
   const authModal = useAuthModal();
   const uploadModal = useUploadModal();
   const { user, subscription } = useUser();
   const onClick = () => {
      if (!user) {
         return authModal.onOpen();
      }
      /* Check for subscription */
      if (!subscription) {
         return subscribeModal.onOpen();
      }
      return uploadModal.onOpen();
   };
   return (
      <div className="flex flex-col">
         <div className="flex items-center justify-between px-5 pt-4">
            <div className="inline-flex items-center gap-x-2">
               <TbPlaylist size={26} className="text-neutral-400" />
               <p className="text-neutral-400 font-medium text-md">Your Library</p>
            </div>
            <AiOutlinePlus
               onClick={onClick}
               size={20}
               className="text-neutral-400 cursor-pointer hover:text-white transition"
            />
         </div>
         <div className="flex flex-col gap-y-2 mt-4">
            {songs.map((item) => (
               <MediaItem onClick={(id: string) => onPlay(id)} data={item} key={item.id}>
                  {item.title}
               </MediaItem>
            ))}
         </div>
      </div>
   );
};
export default Library;
