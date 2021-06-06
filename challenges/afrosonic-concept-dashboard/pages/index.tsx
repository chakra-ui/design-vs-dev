import { VStack } from '@chakra-ui/react';

import { Content } from 'src/components/content';
import { Player } from 'src/components/player';

const IndexPage = () => {
  return (
    <VStack
      h="100vh"
      bg="black"
      w="full"
      overflow="hidden"
      spacing={0}
    >
      <Content />
      <Player />
    </VStack>
  );
};

export default IndexPage;
