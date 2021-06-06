import { HStack, VStack } from "@chakra-ui/react"

import { Sidebar } from "components/sidebar"
import { SearchBar } from "components/search-bar"
import { GenresCarousel } from "components/genres-carousel"

export const Content = () => {
  return (
    <HStack w="full" flex={1}>
      <Sidebar />
      <VStack px={12} pt={12} w="full" h="full" spacing={6} overflow="hidden">
        <SearchBar />
        <GenresCarousel />
      </VStack>
    </HStack>
  )
}
