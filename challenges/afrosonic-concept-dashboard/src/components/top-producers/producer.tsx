import { VStack, Text, Box } from '@chakra-ui/react';

import { Image } from 'components/image';
import { Producer as ProducerType } from 'types/producer';

type Props = ProducerType & {
  badge?: boolean;
}

export const Producer = ({ name, image, badge }: Props) => {
  return (
    <VStack>
      <Box position="relative">
        <Image
          src={image}
          width="80px"
          height="80px"
          rounded="lg"
          objectFit="cover"
        />
        {badge && (
          <Box
            bg="brand.red"
            position="absolute"
            top={-3}
            right={-3}
            rounded="full"
            w={6}
            h={6}
            borderWidth={4}
            borderColor="black"
          />
        )}
      </Box>
      <Text fontSize="sm" fontWeight="medium">{name}</Text>
    </VStack>
  );
}