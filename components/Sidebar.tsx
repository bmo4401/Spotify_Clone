'use client';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';
import { Song } from '@/types';
import { twMerge } from 'tailwind-merge';
import usePlayer from '@/hooks/usePlayer';
interface SidebarProps {
   children: React.ReactNode;
   songs: Song[];
}

const Sidebar: React.FC<SidebarProps> = ({ children, songs }) => {
   const player = usePlayer();
   const pathname = usePathname();
   const routes = useMemo(
      () => [
         {
            Icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
         },
         {
            Icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
         },
      ],
      [pathname],
   );
   return (
      <div className={twMerge(`flex h-screen`, player.activeId && 'h-[calc(100vh-72px)]')}>
         <div
            className="
                hidden
                md:flex
                flex-col
                gap-y-2
                bg-black
                w-[300px]
                p-2
                "
         >
            <Box>
               <div className="flex flex-col gap-y-4 px-5 py-4">
                  {routes.map((items) => {
                     return <SidebarItem key={items.label} {...items} />;
                  })}
               </div>
            </Box>
            <Box className="overflow-y-auto h-full ">
               <Library songs={songs} />
            </Box>
         </div>
         <main className="h-full flex-1  overflow-y-auto py-2">{children}</main>
      </div>
   );
};
export default Sidebar;
