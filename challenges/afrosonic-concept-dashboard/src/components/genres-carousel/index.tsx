import NextImage from 'next/image';
import { chakra, HStack, VStack, Text, Box, LinkBox, LinkOverlay } from '@chakra-ui/react';

import { genres } from './genres-data';

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) => {
    return ['width', 'height', 'src', 'alt'].includes(prop)
  },
});

export const GenresCarousel = () => {
  return (
    <HStack w="full" spacing={12} overflowX="auto" rounded="lg">
      {genres.map(({ name, image }) => (
        <LinkBox as="article" pb={3} role="group">
          <VStack key={name} spacing={4}>
            <Box rounded="lg" overflow="hidden" width="192px" height="192px">
              <LinkOverlay href="#">
                <Image
                  transition="ease-out"
                  transitionProperty="all"
                  transitionDuration="normal"
                  _groupHover={{transform: 'scale(1.1, 1.1)'}}
                  src={image}
                  width="192px"
                  height="192px"
                  objectFit="cover"
                />
              </LinkOverlay>
            </Box>
            <Text fontWeight="medium">{name}</Text>
          </VStack>
        </LinkBox>
      ))}
    </HStack>
  );
};
