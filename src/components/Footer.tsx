import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, FlexProps, Text } from '@chakra-ui/layout'

export const Footer = (props: FlexProps) => {
    const bg = useColorModeValue('blue.100', 'blue.900')
    const borderTopColor = useColorModeValue('blue.200', 'blue.800')

    return (
        <Flex
            p="2"
            direction="row"
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
        </Flex>
    )
}
