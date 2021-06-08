import { VStack } from '@chakra-ui/react';

import { Content } from 'src/components/content';
import { Player } from 'src/components/player';

const IndexPage = () => {
  return (
    <VStack
      height="100vh"
      bg="black"
      width="full"
      overflow="hidden"
      spacing={0}
    >
      <Content />
      <Player />
    </VStack>
  );
};

export default IndexPage;
