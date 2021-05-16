import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';

const ChatLink = () => {
  return (
    <HStack w="full" px={8} spacing={3}>
      <Box w={14} h={12} rounded="lg" bg="gray.100" />
      <VStack spacing={0} alignItems="flex-start" w="full">
        <HStack w="full" justifyContent="space-between">
          <Heading fontSize={12} size="sm">
            Dribbble.com
          </Heading>
          <Text fontSize={12} color="gray.400">
            11:43
          </Text>
        </HStack>
        <Text fontSize={12} color="gray.400">
          10.03.2021
        </Text>
      </VStack>
    </HStack>
  );
};

export default ChatLink;
