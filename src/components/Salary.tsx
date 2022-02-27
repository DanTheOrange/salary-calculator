import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { useMemo } from 'react'
import { useSalary } from '../hooks/useCalculator'

export const Salary = () => {
    const { salary, setSalary } = useSalary()

    const onChange = useMemo(() => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            if (!event.target.value) {
                setSalary(undefined)
            } else {
                setSalary(Number(event.target.value))
            }
        }
    }, [])

    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none" fontSize="1.2em" children="£" />
            <Input
                placeholder="Enter salary"
                type="number"
                step={1000}
                value={salary}
                onChange={onChange}
            />
        </InputGroup>
    )
}
