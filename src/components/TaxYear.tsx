import { Select } from '@chakra-ui/react'
import { useMemo } from 'react'
import { TAX_YEARS, TAX_YEAR_STRING_MAP } from '../constants'
import { useTaxYear } from '../hooks/useCalculator'

export const TaxYear = () => {
    const { taxYear, setTaxYear } = useTaxYear()

    const onChange = useMemo(
        () => (event: React.ChangeEvent<HTMLSelectElement>) => {
            setTaxYear(event.target.value as TAX_YEARS)
        },
        []
    )

    return (
        <Select placeholder="Select option" value={taxYear} onChange={onChange}>
            {TAX_YEARS.map((year) => (
                <option key={year} value={year}>
                    {TAX_YEAR_STRING_MAP.get(year)}
                </option>
            ))}
        </Select>
    )
}
