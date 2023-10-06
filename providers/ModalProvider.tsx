'use client';

import AuthModal from '@/components/AuthModal';
import Modal from '@/components/Modal';
import UploadModal from '@/components/UploadModal';
import SubscribeModal from '@/components/SubscribeModal';
import { useEffect, useState } from 'react';
import { ProductWithPrice } from '@/types';
interface ModalProviderProps {
   products: ProductWithPrice[];
}
const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
   const [isMounted, setIsMounted] = useState(false);
   useEffect(() => {
      setIsMounted(true);
   }, []);
   if (!isMounted) {
      return null;
   }

   return (
      <div>
         {/*          <Modal title="Test Modal" description="Test Desc" isOpen onChange={() => {}}>
            TestChildren
         </Modal> */}
         <AuthModal />
         <UploadModal />
         <SubscribeModal products={products} />
      </div>
   );
};
export default ModalProvider;
