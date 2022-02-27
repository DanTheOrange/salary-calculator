import { ChakraProvider } from '@chakra-ui/react'
import { Stack, Text, Flex } from '@chakra-ui/layout'
import React from 'react'
import { Breakdown } from './components/Breakdown'
import { DetailForm } from './components/DetailForm'
import { HeaderBar } from './components/HeaderBar'
import { Footer } from './components/Footer'
import { CalculatorProvider } from './hooks/useCalculator'
import theme from './theme'
import { ColorModeToggle } from './components/ColorModeToggle'

// TODO: maybe use a grid for the layout, not a fan of chakra grid stuff
export const App = () => (
    <ChakraProvider theme={theme}>
        <CalculatorProvider>
            <Flex direction="column" minH="100vh">
                <HeaderBar>
                    <Text as="h1" display="flex" fontSize="2xl" fontWeight="bold" flexGrow={1}>
                        Salary Calculator
                    </Text>
                    <ColorModeToggle />
                </HeaderBar>
                <Stack direction="column" gap="4" m="4" flexGrow={1}>
                    <DetailForm />
                    <Breakdown />
                </Stack>
                <Footer />
            </Flex>
        </CalculatorProvider>
    </ChakraProvider>
)
