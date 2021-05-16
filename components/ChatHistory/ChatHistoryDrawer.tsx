import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import ChatHistorySidebar from './ChatHistorySidebar';

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const ChatHistoryDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent pt={8}>
          <DrawerCloseButton />
          <ChatHistorySidebar />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default ChatHistoryDrawer;
