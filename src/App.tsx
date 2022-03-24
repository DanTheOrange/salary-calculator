import {
    Box,
    ChakraProvider,
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Heading,
} from '@chakra-ui/react'
import React from 'react'
import { BenchmarkTab } from './components/BenchmarkTab'
import { ControlTab } from './components/ControlTab'
import { ControlProvider } from './hooks/useControls'
import theme from './theme'

// TODO: maybe use a grid for the layout, not a fan of chakra grid stuff
export const App = () => (
    <ChakraProvider theme={theme}>
        <ControlProvider>
            <Flex direction="column" height="100vh">
                <Box as="header" p={4}>
                    <Heading as="h1">Control Freaks</Heading>
                </Box>

                <Tabs as="main" flexGrow={1} p={4} variant="enclosed">
                    <TabList>
                        <Tab>Controls</Tab>
                        <Tab>Benchmark</Tab>
                    </TabList>
                    <TabPanels as="main">
                        <TabPanel>
                            <ControlTab />
                        </TabPanel>
                        <TabPanel>
                            <BenchmarkTab />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

                <Box as="footer" p={4}>
                    <Text>{`Made with <3 by Control Freaks`}</Text>
                </Box>
            </Flex>
        </ControlProvider>
    </ChakraProvider>
)
