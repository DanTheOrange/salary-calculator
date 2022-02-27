import { Stack, StackProps, Text, useColorModeValue } from '@chakra-ui/react'

export const Footer = (props: StackProps) => {
    const bg = useColorModeValue('blue.100', 'blue.900')
    const borderTopColor = useColorModeValue('blue.200', 'blue.800')

    return (
        <Stack
            p="2"
            gap="1"
            direction={{ base: 'column', md: 'row' }}
            bg={bg}
            borderTopWidth="1px"
            borderTopStyle="solid"
            borderTopColor={borderTopColor}
            justifyContent="space-between"
            alignItems="baseline"
            {...props}
        >
            <Text>
                Made with ❤️ by{' '}
                <Text as="a" href="https://github.com/DanTheOrange">
                    Dan
                </Text>
            </Text>
            <Text fontSize="xs">
                This is just a rough guide, it isn't accurate and it isn't really meant to be
            </Text>
        </Stack>
    )
}
