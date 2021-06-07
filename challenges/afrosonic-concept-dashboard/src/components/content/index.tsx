import { Heading, HStack, VStack } from "@chakra-ui/react"

import { Sidebar } from "components/sidebar"
import { SearchBar } from "components/search-bar"
import { GenresCarousel } from "components/genres-carousel"
import { TopPicks } from "components/top-picks"
import { TopProducers } from "components/top-producers"

export const Content = () => {
  return (
    <HStack w="full" flex={1} overflow="hidden">
      <Sidebar />
      <VStack px={12} pt={12} w="full" h="full" spacing={12} overflow="hidden">
        <SearchBar />
        <GenresCarousel />
        <HStack w="full" alignItems="flex-start" overflow="hidden" flex={1}>
          <TopPicks flex={1} />
          <TopProducers flexShrink={0} />
        </HStack>
      </VStack>
    </HStack>
  )
}
