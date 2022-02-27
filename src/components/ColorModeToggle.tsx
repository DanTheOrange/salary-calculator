import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Switch, useColorMode } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icon'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'

export const ColorModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <FormControl display="flex" alignItems="center" width="auto">
            {/* <FormLabel htmlFor="color-mode" mb="0">
                {colorMode === 'light' ? 'Light Mode' : 'Dark Mode'}
            </FormLabel> */}
            <Switch
                id="color-mode"
                isChecked={colorMode === 'light'}
                onChange={toggleColorMode}
                sx={{
                    svg: { position: 'absolute', top: 0 },
                    '#sun': {
                        right: '8px',
                        margin: '4px',
                        fontSize: '12px',
                    },
                    '#moon': {
                        left: 0,
                        margin: '4px',
                        fontSize: '12px',
                    },
                }}
            >
                {colorMode === 'light' && <Icon as={BsSunFill} id="sun" />}
                {colorMode === 'dark' && <Icon as={BsMoonStarsFill} id="moon" color="black" />}
            </Switch>
        </FormControl>
    )
}
