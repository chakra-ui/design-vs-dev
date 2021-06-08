import { HStack, Box, Text } from '@chakra-ui/react';

export const PlayerProgress = () => {
  return (
    <HStack spacing={3} flex={1}>
      <Text fontSize={12} color="gray.light">01:45</Text>
      <Box
        flex={1}
        width="full"
        height={1}
        bg="gray.light"
        position="relative"
        rounded="full"
        overflow="hidden"
      >
        <Box
          width="75%"
          height={1}
          left={0}
          insetY={0}
          bg="brand.red"
          rounded="full"
        />
      </Box>
      <Text fontSize={12} color="gray.light">04:30</Text>
    </HStack>
  )
};
