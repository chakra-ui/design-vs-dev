import { Flex, HStack, Text, IconButton, Avatar, AvatarBadge, Heading, Box, Divider, VStack, Button, List, ListItem } from '@chakra-ui/react';
import { FaBell } from 'react-icons/fa';
import { RiDribbbleLine, RiInstagramLine, RiTwitterFill } from 'react-icons/ri';
import ChatFile from './ChatFile';
import ChatLink from './ChatLink';

const ChatFiles = () => {
  return (
    <Flex h="full" flexDirection="column" alignItems="center" w="full" pt={8}>
      <HStack justify="space-between" w="full" px={8} mb={8}>
        <Text color="gray.500">20 March 2021</Text>
        <IconButton
          rounded="full"
          icon={<FaBell />}
          color="gray.500"
          variant="ghost"
          aria-label="Notifications"
        />
      </HStack>
      <Avatar size="2xl" name="Dina Harrison">
        <AvatarBadge boxSize={8} borderWidth={4} bg="green.400" />
      </Avatar>
      <Heading size="md" mt={3}>
        Dina Harrison
      </Heading>
      <HStack px={8} justifyContent="center" spacing={3} mt={6}>
        <IconButton
          icon={<RiDribbbleLine />}
          variant="ghost"
          rounded="full"
          color="gray.500"
          h={10}
          aria-label="Dribbble Account"
        />
        <IconButton
          icon={<RiInstagramLine />}
          variant="ghost"
          rounded="full"
          color="gray.500"
          h={10}
          aria-label="Instagram Account"
        />
        <IconButton
          icon={<RiTwitterFill />}
          variant="ghost"
          rounded="full"
          color="gray.500"
          h={10}
          aria-label="Twitter Account"
        />
      </HStack>
      <Box px={8} w="full">
        <Divider mt={6} color="gray.100" />
      </Box>
      <VStack spacing={6} overflowY="auto" w="full">
        <HStack px={8} w="full" mt={6} justifyContent="space-between">
          <Heading size="md">Shared files</Heading>
          <Button fontWeight="normal" variant="text" size="xs" color="blue">
            see all
          </Button>
        </HStack>
        <List spacing={4} mt={6} w="full">
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
          <ListItem>
            <ChatFile />
          </ListItem>
        </List>
        <Box px={8} w="full">
          <Divider mt={6} color="gray.100" />
        </Box>
        <HStack px={8} w="full" mt={6} justifyContent="space-between">
          <Heading size="md">Shared links</Heading>
          <Button fontWeight="normal" variant="text" size="xs" color="blue">
            see all
          </Button>
        </HStack>
        <List pb={6} spacing={4} mt={6} w="full">
          <ListItem>
            <ChatLink />
          </ListItem>
          <ListItem>
            <ChatLink />
          </ListItem>
          <ListItem>
            <ChatLink />
          </ListItem>
        </List>
      </VStack>
    </Flex>
  )
};

export default ChatFiles;
