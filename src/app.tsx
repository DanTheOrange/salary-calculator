import { Box, ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export const App = () => (
    <ChakraProvider>
        <Box as="h1">Hello world</Box>
    </ChakraProvider>
)
