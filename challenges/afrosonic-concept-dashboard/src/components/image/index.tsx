import NextImage from 'next/image';
import { chakra } from '@chakra-ui/react';

export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) => {
    return ['width', 'height', 'src', 'alt', 'quality'].includes(prop)
  },
});