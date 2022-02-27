import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, FlexProps } from '@chakra-ui/layout'

export const HeaderBar = (props: FlexProps) => {
    const bg = useColorModeValue('blue.100', 'blue.900')
    const borderBottomColor = useColorModeValue('blue.200', 'blue.800')

    return (
        <Flex
            p="2"
            direction="row"
            bg={bg}
            borderBottomWidth="1px"
            borderBottomStyle="solid"
            borderBottomColor={borderBottomColor}
            justifyContent="space-between"
            {...props}
        />
    )
}
