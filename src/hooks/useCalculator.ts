import { useBoolean } from '@chakra-ui/hooks'
import constate from 'constate'
import { useState, useMemo } from 'react'
import {
    NATIONAL_INSURANCE_RATES,
    NATIONAL_INSURANCE_YEAR_RATES,
    STUDENT_LOAN_RATES,
    STUDENT_LOAN_YEAR_RATES,
    TAX_RATES,
    TAX_YEARS,
    TAX_YEAR_RATES,
    PENSION_TYPE,
} from '../constants'

type TaxBreakdown = {
    [key in TAX_RATES]: { tax: number; percentage: number }
}

type NIBreakdown = {
    [key in NATIONAL_INSURANCE_RATES]: { ni: number; percentage: number }
}

type SLBreakdown = {
    [key in STUDENT_LOAN_RATES]: { sl: number; percentage: number }
}

function useCalculator() {
    const [taxYear, setTaxYear] = useState<TAX_YEARS>('2021')
    const [salary, setSalary] = useState<number | undefined>()
    const [planOne, setPlanOne] = useBoolean(false)
    const [planTwo, setPlanTwo] = useBoolean(false)
    const [planFour, setPlanFour] = useBoolean(false)
    const [postgrad, setPostgrad] = useBoolean(false)
    const [pensionType, setPensionType] = useState<PENSION_TYPE>('auto')
    const [pensionContribution, setPensionContribution] = useState<number | undefined>()

    const taxBreakdown = useMemo<TaxBreakdown | undefined>(() => {
        if (!salary) return undefined
        const brackets = TAX_YEAR_RATES.get(taxYear)

        return Object.entries(brackets).reduce((acc, [key, { from, to, percentage }]) => {
            let tax: number
            if (salary < from) tax = 0
            else tax = ((Math.min(salary, to) - from) * percentage) / 100

            return {
                ...acc,
                [key]: { tax, percentage },
            }
        }, {} as TaxBreakdown)
    }, [salary, taxYear])

    const tax = useMemo<number | undefined>(() => {
        if (!taxBreakdown) return
        return Object.entries(taxBreakdown).reduce((acc, [_, { tax }]) => acc + tax, 0)
    }, [taxBreakdown])

    const nationalInsuranceBreakdown = useMemo<NIBreakdown | undefined>(() => {
        if (!salary) return undefined
        const brackets = NATIONAL_INSURANCE_YEAR_RATES.get(taxYear)

        return Object.entries(brackets).reduce((acc, [key, { from, to, percentage }]) => {
            let ni: number
            if (salary < from) ni = 0
            else ni = ((Math.min(salary, to) - from) * percentage) / 100

            return {
                ...acc,
                [key]: { ni, percentage },
            }
        }, {} as NIBreakdown)
    }, [salary, taxYear])

    const nationalInsurance = useMemo<number | undefined>(() => {
        if (!nationalInsuranceBreakdown) return
        return Object.entries(nationalInsuranceBreakdown).reduce((acc, [_, { ni }]) => acc + ni, 0)
    }, [nationalInsuranceBreakdown])

    const studentLoanBreakdown = useMemo<SLBreakdown | undefined>(() => {
        if (!salary) return undefined
        const brackets = STUDENT_LOAN_YEAR_RATES.get(taxYear)

        return Object.entries(brackets).reduce((acc, [key, { from, to, percentage }]) => {
            let sl: number
            if (salary < from) sl = 0
            else if (
                ((key as STUDENT_LOAN_RATES) === '1' && !planOne) ||
                ((key as STUDENT_LOAN_RATES) === '2' && !planTwo) ||
                ((key as STUDENT_LOAN_RATES) === '4' && !planFour) ||
                ((key as STUDENT_LOAN_RATES) === 'postgrad' && !postgrad)
            )
                sl = 0
            else if ((key as STUDENT_LOAN_RATES) == '1' && planOne && planTwo)
                sl = ((Math.min(salary, brackets[2].from) - from) * percentage) / 100
            else sl = ((Math.min(salary, to) - from) * percentage) / 100

            return {
                ...acc,
                [key]: { sl, percentage },
            }
        }, {} as SLBreakdown)
    }, [salary, planOne, planTwo, planFour, postgrad, taxYear])

    const studentLoan = useMemo<number | undefined>(() => {
        if (!studentLoanBreakdown) return
        return Object.entries(studentLoanBreakdown).reduce((acc, [_, { sl }]) => acc + sl, 0)
    }, [studentLoanBreakdown])

    const pension = useMemo<number | undefined>(() => {
        if (!salary) return
        return (salary / 100) * (pensionContribution || 0)
    }, [salary, pensionType, pensionContribution])

    const takeHome = useMemo(() => {
        if (!salary) return undefined
        let takeHome = salary
        if (tax) takeHome = takeHome - tax
        if (nationalInsurance) takeHome = takeHome - nationalInsurance
        if (studentLoan) takeHome = takeHome - studentLoan
        if (pension) takeHome = takeHome - pension

        return takeHome
    }, [salary, tax, nationalInsurance, studentLoan, pension])

    return {
        taxYear,
        setTaxYear,
        salary,
        setSalary,
        pensionType,
        setPensionType,
        pensionContribution,
        setPensionContribution,
        setPlanOne,
        setPlanTwo,
        setPlanFour,
        setPostgrad,
        planOne,
        planTwo,
        planFour,
        postgrad,
        tax,
        taxBreakdown,
        nationalInsurance,
        nationalInsuranceBreakdown,
        studentLoan,
        studentLoanBreakdown,
        pension,
        takeHome,
    }
}

export const [
    CalculatorProvider,
    useTaxYear,
    useSalary,
    useDeductions,
    useTakeHome,
    useStudentLoanControls,
    usePension,
] = constate(
    useCalculator,
    (value) => ({ taxYear: value.taxYear, setTaxYear: value.setTaxYear }),
    (value) => ({ salary: value.salary, setSalary: value.setSalary }),
    (value) => ({
        tax: value.tax,
        taxBreakdown: value.taxBreakdown,
        nationalInsurance: value.nationalInsurance,
        nationalInsuranceBreakdown: value.nationalInsuranceBreakdown,
        studentLoan: value.studentLoan,
        studentLoanBreakdown: value.studentLoanBreakdown,
        pension: value.pension,
    }),
    (value) => value.takeHome,
    (value) => ({
        planOne: value.planOne,
        planTwo: value.planTwo,
        planFour: value.planFour,
        postgrad: value.postgrad,
        togglePlanOne: value.setPlanOne.toggle,
        togglePlanTwo: value.setPlanTwo.toggle,
        togglePlanFour: value.setPlanFour.toggle,
        togglePostgrad: value.setPostgrad.toggle,
    }),
    (value) => ({
        pensionType: value.pensionType,
        setPensionType: value.setPensionType,
        pensionContribution: value.pensionContribution,
        setPensionContribution: value.setPensionContribution,
        pension: value.pension,
    })
)
