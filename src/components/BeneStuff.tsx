import {
    Box,
    Flex,
    Grid,
    GridItem,
    Stack,
    StackProps,
    Circle,
    Text,
    FormControl,
    FormLabel,
    Input,
    Select,
} from '@chakra-ui/react'
import { CustomDialog } from './CustomDialog'

export interface ControlRowProp {
    area: string
    definition: string
    type: string
    test?: boolean
    withAdd?: boolean
    showTest?: boolean
}

export const ControlRow = ({
    area,
    definition,
    type,
    test,
    withAdd = false,
    showTest = false,
    ...props
}: ControlRowProp) => {
    return (
        <Box as="li" listStyleType="none">
            <Grid overflow="hidden">
                <Flex bg="gray.100" px={4} py={1} pb={4} mb={-3} fontSize="sm" borderRadius="sm">
                    {withAdd && (
                        <GridItem w="10%" as="div" fontWeight="semibold">
                            +
                        </GridItem>
                    )}
                    <GridItem w="100%" as="div" fontWeight="semibold">
                        {area}
                    </GridItem>
                    <GridItem w="100%" as="div" fontWeight="bold">
                        {definition}
                    </GridItem>
                    <GridItem w="100%" as="div" fontWeight="bold">
                        {type}
                    </GridItem>
                    {showTest && (
                        <GridItem w="10%" as="div" fontWeight="bold">
                            <Circle bg={test ? 'green.500' : 'red.500'} size="20px" />
                        </GridItem>
                    )}
                    <GridItem w="25%" as="div" fontWeight="bold">
                        <CustomDialog
                            buttonText="View control"
                            headerText={definition}
                            buttonSize="xs"
                        >
                            <Stack direction="column">
                                <FormControl>
                                    <FormLabel htmlFor="title">Title</FormLabel>
                                    <Text>All directors have provided names</Text>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="area">Area</FormLabel>
                                    {area}
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="area">Definition</FormLabel>
                                    {definition}
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="owner">Owner</FormLabel>
                                    <Text>Ioanna</Text>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="law">
                                        Law/Regulation/Guidance source
                                    </FormLabel>
                                    <Text>31 CFR 1022.210</Text>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="law">
                                        Policy and/or procedure source
                                    </FormLabel>
                                    <Text>Anti money laundering</Text>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="law">Identified risk</FormLabel>
                                    <Text>Knowing who your directors are</Text>
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="email">Last reviewed date</FormLabel>
                                    10/26/2011
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="email">Last training on</FormLabel>
                                    10/26/2012
                                </FormControl>
                            </Stack>
                        </CustomDialog>
                    </GridItem>
                </Flex>
            </Grid>
        </Box>
    )
}

export const ControlRowsGroup = ({ children, ...props }: StackProps) => {
    return (
        <Stack spacing={5} {...props}>
            <Stack as="ul" spacing={3}>
                {children}
            </Stack>
        </Stack>
    )
}
