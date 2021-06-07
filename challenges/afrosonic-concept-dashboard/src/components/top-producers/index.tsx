import { VStack, Heading, SimpleGrid } from '@chakra-ui/react';
import { ComponentProps } from 'react';

import { topProducers } from './producers-data';
import { Producer } from './producer';

export const TopProducers = (props: ComponentProps<typeof VStack>) => {
  return (
    <VStack {...props} align="flex-start" spacing={8}>
      <Heading size="md">Top Producers</Heading>
      <SimpleGrid columns={3} gap={8}>
        {topProducers.map((producer, index) => (
          <Producer key={producer.name} {...producer} badge={index === 0} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
