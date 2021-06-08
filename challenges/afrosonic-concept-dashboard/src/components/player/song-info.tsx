import { HStack, VStack, Heading, Text } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { PlayerControl } from './player-control';

export const SongInfo = () => {
  return (
    <HStack spacing={8}>
      <VStack spacing={2} alignItems="flex-start">
        <Heading size="sm">As broad as daylight</Heading>
        <Text fontSize={14} color="gray.light">Moonlight Walker</Text>
      </VStack>
      <PlayerControl
        label="Add to favorites"
        icon={<FaHeart />}
        color="brand.red"
      />
    </HStack>
  )
};
