import { HStack, Box, VStack, Heading, Text } from '@chakra-ui/react';

const ChatFile = () => {
  return (
    <HStack w="full" px={8} spacing={3}>
      <Box w={14} h={12} rounded="lg" bg="gray.100" />
      <VStack spacing={0} alignItems="flex-start" w="full">
        <Heading fontSize={12} w="full">
          PhotoDenver.jpg
        </Heading>
        <HStack w="full" justifyContent="space-between">
          <Text fontSize={12} color="gray.400">
            10.03.2021 at 11:43
          </Text>
          <Text fontSize={12} color="gray.400">
            175 Kb
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default ChatFile;
