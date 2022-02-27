export type TAX_YEARS = '2020' | '2021'

export const TAX_YEARS: TAX_YEARS[] = ['2020', '2021']

export const TAX_YEAR_STRING_MAP = new Map<TAX_YEARS, string>([
    ['2020', '2020 - 2021'],
    ['2021', '2021 - 2022'],
])

export type TAX_RATES = 'allowance' | 'basic' | 'higher' | 'additional'

export const TAX_RATE_STRING_MAP = new Map<TAX_RATES, string>([
    ['allowance', 'Personal allowance'],
    ['basic', 'Basic rate'],
    ['higher', 'Higher rate'],
    ['additional', 'Additional rate'],
])

export type RATE = {
    from: number
    to: number
    percentage: number
}

// 2021/2022 rates
// Band	                Taxable income	    Tax rate
// Personal Allowance	Up to £12,570	    0%
// Basic rate	        £12,571 to £50,270	20%
// Higher rate	        £50,271 to £150,000	40%
// Additional rate	    over £150,000	    45%

export const TAX_YEAR_RATES = new Map<TAX_YEARS, { [key in TAX_RATES]: RATE }>([
    [
        '2021',
        {
            allowance: {
                from: 0,
                to: 12570,
                percentage: 0,
            },
            basic: {
                from: 12570,
                to: 50270,
                percentage: 20,
            },
            higher: {
                from: 50270,
                to: 150000,
                percentage: 40,
            },
            additional: {
                from: 150000,
                to: Infinity,
                percentage: 45,
            },
        },
    ],
])

export const TAX_FREE_ALLOWANCE_REDUCTION_MAP = new Map<
    TAX_YEARS,
    { salary: number; ratio: (number) => number }
>([
    // ['2020', {salary: 100000, ratio: (salary) => Math.floor((salary - 100000) / 2)}],
    ['2021', { salary: 100000, ratio: (salary) => Math.floor((salary - 100000) / 2) }],
])

export type NATIONAL_INSURANCE_RATES = 'none' | 'standard' | 'upper'

export const NATIONAL_INSURANCE_RATE_STRINGS = new Map<NATIONAL_INSURANCE_RATES, string>([
    ['none', 'None'],
    ['standard', 'Taxed at'],
    ['upper', 'Taxed at'],
])

// Your pay	Class 1 National Insurance rate
// £184 to £967 a week (£797 to £4,189 a month)	12%
// Over £967 a week (£4,189 a month)	        2%

export const NATIONAL_INSURANCE_YEAR_RATES = new Map<
    TAX_YEARS,
    { [key in NATIONAL_INSURANCE_RATES]: RATE }
>([
    [
        '2021',
        {
            none: {
                from: 0,
                to: 797 * 12,
                percentage: 0,
            },
            standard: {
                from: 797 * 12,
                to: 4189 * 12,
                percentage: 12,
            },
            upper: {
                from: 4189 * 12,
                to: Infinity,
                percentage: 2,
            },
        },
    ],
])

export type STUDENT_LOAN_RATES = '1' | '2' | '4' | 'postgrad'

export const STUDENT_LOAN_RATE_STRINGS = new Map<STUDENT_LOAN_RATES, string>([
    ['1', 'Plan 1'],
    ['2', 'Plan 2'],
    ['4', 'Plan 4'],
    ['postgrad', 'Postgraduate'],
])

// Your pay	Class 1 National Insurance rate
// £184 to £967 a week (£797 to £4,189 a month)	12%
// Over £967 a week (£4,189 a month)	        2%

export const STUDENT_LOAN_YEAR_RATES = new Map<TAX_YEARS, { [key in STUDENT_LOAN_RATES]: RATE }>([
    [
        '2021',
        {
            '1': {
                from: 19895,
                to: Infinity,
                percentage: 9,
            },
            '2': {
                from: 27295,
                to: Infinity,
                percentage: 9,
            },
            '4': {
                from: 25000,
                to: Infinity,
                percentage: 9,
            },
            postgrad: {
                from: 21000,
                to: Infinity,
                percentage: 6,
            },
        },
    ],
])

export type PENSION_TYPE = 'auto' | 'employer' | 'salary-sacrifice' | 'personal'
