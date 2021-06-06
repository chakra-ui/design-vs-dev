import {
  HStack,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react"
import { RiSearchLine } from 'react-icons/ri';

import { Avatar } from 'components/avatar';

export const SearchBar = () => {
  return (
      <HStack w="full">
        <InputGroup maxW="7xl">
          <InputLeftElement
            pointerEvents="none"
            children={<RiSearchLine />}
          />
          <Input
            variant="outline"
            rounded="lg"
            placeholder="Search for sounds, tracks"
          />
        </InputGroup>
        <Spacer minW={12} />
        <Avatar />
      </HStack>
  );
}