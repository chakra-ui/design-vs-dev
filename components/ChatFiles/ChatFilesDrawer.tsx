import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import ChatFiles from '.';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ChatFilesDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent pt={8}>
          <DrawerCloseButton />
          <ChatFiles />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default ChatFilesDrawer;
