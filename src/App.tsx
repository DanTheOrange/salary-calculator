import { ChakraProvider, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Breakdown } from './components/Breakdown'
import { ColorModeToggle } from './components/ColorModeToggle'
import { DetailForm } from './components/DetailForm'
import { Footer } from './components/Footer'
import { HeaderBar } from './components/HeaderBar'
import { CalculatorProvider } from './hooks/useCalculator'
import theme from './theme'

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
