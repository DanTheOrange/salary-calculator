import { InputGroup, InputLeftElement, Input } from '@chakra-ui/input'
import { useMemo } from 'react'
import { usePension } from '../hooks/useCalculator'

export const Pension = () => {
    const { pensionContribution, setPensionContribution } = usePension()

    const onChange = useMemo(() => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!event.target.value) {
                setPensionContribution(undefined)
            } else {
                setPensionContribution(Number(event.target.value))
            }
        }
    }, [])

    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none" fontSize="1.2em" children="%" />
            <Input
                placeholder="Enter amount"
                type="number"
                step="1"
                max="100"
                value={pensionContribution}
                onChange={onChange}
            />
        </InputGroup>
    )
}
