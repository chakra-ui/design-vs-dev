import { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { Box, Flex } from '@chakra-ui/react';

import { Image } from 'components/image';

const MotionBox = motion<ComponentProps<typeof Box>>(Box);

export const Disc = () => {
  return (
    <MotionBox
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        type: 'tween',
        ease: 'linear',
      }}
      rounded="full"
      overflow="hidden"
      position="relative"
      maxW={20}
      maxH={20}
      width="full"
      height="full"
    >
      <Image
        width="80px"
        height="80px"
        src="/images/gradient-mesh.png"
        objectFit="cover"
      />
      <Flex
        position="absolute"
        inset={0}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width={6}
          height={6}
          bg="gray.dark"
          rounded="full"
        />
      </Flex>
    </MotionBox>
  )
};
