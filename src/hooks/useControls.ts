import constate from 'constate'
import { useCallback, useState } from 'react'
import { Control, controls as defaultControls } from './types'

function useControl() {
    const [controls, setControls] = useState<Control[]>([])

    const addControls = useCallback(() => {
        setControls(defaultControls)
    }, [setControls])

    return {
        controls,
        addControls,
    }
}

export const [ControlProvider, useControls] = constate(useControl, (value) => ({
    controls: value.controls,
    addControls: value.addControls,
}))
