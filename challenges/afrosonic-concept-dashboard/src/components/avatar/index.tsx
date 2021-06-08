import { HStack, Text, Avatar as ChakraAvatar } from '@chakra-ui/react';

export const Avatar = () => {
  return (
    <HStack flexShrink={0}>
      <Text mr={3}>Kunle Ajayi</Text>
      <ChakraAvatar name="Kunle Ajayi" src="/images/dog-2.jpg" />
    </HStack>
  )
};
