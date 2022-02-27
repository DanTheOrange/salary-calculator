import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from '@chakra-ui/popover'
import { IconButton } from '@chakra-ui/button'
import { Portal } from '@chakra-ui/portal'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/table'
import { Flex, Text } from '@chakra-ui/layout'
import { useSalary, useDeductions, useTakeHome } from '../hooks/useCalculator'
import { BsInfoCircle } from 'react-icons/bs'
import { formatCurrencyString } from '../helpers'
import {
    STUDENT_LOAN_RATES,
    STUDENT_LOAN_RATE_STRINGS,
    TAX_RATES,
    TAX_RATE_STRING_MAP,
} from '../constants'
import { PopoverFooter } from '@chakra-ui/react'
import React from 'react'

type ColumnOptions = {
    title: string
    modifyForColumn?: (value: number) => number
}

const COLUMNS: ColumnOptions[] = [
    {
        title: 'Year',
        modifyForColumn: (number) => number,
    },
    {
        title: 'Month',
        modifyForColumn: (number) => number / 12,
    },
    {
        title: 'Week',
        modifyForColumn: (number) => number / 52,
    },
    {
        title: 'Day',
        modifyForColumn: (number) => number / 52 / 5,
    },
]

// TODO: use react table?
// TODO: clean up the popovers and make them a reusable component
export const Breakdown = () => {
    const { salary } = useSalary()

    const {
        tax,
        taxBreakdown,
        nationalInsurance,
        nationalInsuranceBreakdown,
        studentLoan,
        studentLoanBreakdown,
        pension,
    } = useDeductions()

    const takeHome = useTakeHome()

    return (
        <Table size="sm">
            <Thead>
                <Tr>
                    <Th></Th>
                    {COLUMNS.map(({ title }) => (
                        <Th key={title}>{title}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Th width="200px">Income</Th>
                    {COLUMNS.map(({ title, modifyForColumn }) => (
                        <Td key={title}>
                            {salary === undefined || salary === 0
                                ? '-'
                                : formatCurrencyString(modifyForColumn(salary))}
                        </Td>
                    ))}
                </Tr>
                <Tr>
                    <Th width="200px">Tax</Th>
                    {COLUMNS.map(({ title, modifyForColumn }) => (
                        <Td key={title}>
                            <Flex alignItems="baseline">
                                {tax === undefined || tax === 0
                                    ? '-'
                                    : formatCurrencyString(modifyForColumn(tax))}

                                {taxBreakdown && tax !== 0 && (
                                    <Popover>
                                        <PopoverTrigger>
                                            <IconButton
                                                aria-label="Tax Breakdown"
                                                variant="ghost"
                                                ml="4"
                                                size="xs"
                                                icon={<BsInfoCircle />}
                                            />
                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent>
                                                <PopoverArrow />
                                                <PopoverHeader>Tax Breakdown</PopoverHeader>
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    {Object.entries(taxBreakdown).map(
                                                        ([key, { tax, percentage }]) =>
                                                            tax !== 0 ? (
                                                                <Flex key={key}>
                                                                    <Text flexGrow={1}>
                                                                        {`${TAX_RATE_STRING_MAP.get(
                                                                            key as TAX_RATES
                                                                        )} at ${percentage}%`}
                                                                    </Text>
                                                                    <Text>
                                                                        {formatCurrencyString(
                                                                            modifyForColumn(tax)
                                                                        )}
                                                                    </Text>
                                                                </Flex>
                                                            ) : (
                                                                <React.Fragment key={key} />
                                                            )
                                                    )}
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Portal>
                                    </Popover>
                                )}
                            </Flex>
                        </Td>
                    ))}
                </Tr>
                <Tr>
                    <Th width="200px">National Insurance</Th>
                    {COLUMNS.map(({ title, modifyForColumn }) => (
                        <Td key={title}>
                            <Flex alignItems="baseline">
                                {nationalInsurance === undefined || nationalInsurance === 0
                                    ? '-'
                                    : formatCurrencyString(modifyForColumn(nationalInsurance))}

                                {nationalInsuranceBreakdown && nationalInsurance !== 0 && (
                                    <Popover>
                                        <PopoverTrigger>
                                            <IconButton
                                                aria-label="National Insurance Breakdown"
                                                variant="ghost"
                                                ml="4"
                                                size="xs"
                                                icon={<BsInfoCircle />}
                                            />
                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent>
                                                <PopoverArrow />
                                                <PopoverHeader>Tax Breakdown</PopoverHeader>
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    {Object.entries(nationalInsuranceBreakdown).map(
                                                        ([key, { ni, percentage }]) =>
                                                            ni !== 0 ? (
                                                                <Flex key={key}>
                                                                    <Text flexGrow={1}>
                                                                        {`${TAX_RATE_STRING_MAP.get(
                                                                            key as TAX_RATES
                                                                        )} at ${percentage}%`}
                                                                    </Text>
                                                                    <Text>
                                                                        {formatCurrencyString(
                                                                            modifyForColumn(ni)
                                                                        )}
                                                                    </Text>
                                                                </Flex>
                                                            ) : (
                                                                <React.Fragment key={key} />
                                                            )
                                                    )}
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Portal>
                                    </Popover>
                                )}
                            </Flex>
                        </Td>
                    ))}
                </Tr>
                <Tr>
                    <Th width="200px">Student Loan</Th>
                    {COLUMNS.map(({ title, modifyForColumn }) => (
                        <Td key={title}>
                            <Flex alignItems="baseline">
                                {studentLoan === undefined || studentLoan === 0
                                    ? '-'
                                    : formatCurrencyString(modifyForColumn(studentLoan))}
                                {studentLoanBreakdown && studentLoan !== 0 && (
                                    <Popover>
                                        <PopoverTrigger>
                                            <IconButton
                                                aria-label="Student Loan Breakdown"
                                                variant="ghost"
                                                ml="4"
                                                size="xs"
                                                icon={<BsInfoCircle />}
                                            />
                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent>
                                                <PopoverArrow />
                                                <PopoverHeader>
                                                    Student Loan Breakdown
                                                </PopoverHeader>
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    {Object.entries(studentLoanBreakdown).map(
                                                        ([key, { sl, percentage }]) =>
                                                            sl !== 0 ? (
                                                                <Flex key={key}>
                                                                    <Text flexGrow={1}>
                                                                        {`${STUDENT_LOAN_RATE_STRINGS.get(
                                                                            key as STUDENT_LOAN_RATES
                                                                        )} at ${percentage}%`}
                                                                    </Text>
                                                                    <Text>
                                                                        {formatCurrencyString(
                                                                            modifyForColumn(sl)
                                                                        )}
                                                                    </Text>
                                                                </Flex>
                                                            ) : (
                                                                <React.Fragment key={key} />
                                                            )
                                                    )}
                                                </PopoverBody>
                                                <PopoverFooter>
                                                    Plans 1 and 2 stack, you'll pay only the gap
                                                    between where plan 1 starts and plan 2 starts
                                                    off of your plan 1 loan if you have both.
                                                </PopoverFooter>
                                            </PopoverContent>
                                        </Portal>
                                    </Popover>
                                )}
                            </Flex>
                        </Td>
                    ))}
                </Tr>
                <Tr>
                    <Th width="200px">Pension</Th>
                    {COLUMNS.map(({ title, modifyForColumn }) => (
                        <Td key={title}>
                            {pension === undefined || pension === 0
                                ? '-'
                                : formatCurrencyString(modifyForColumn(pension))}
                        </Td>
                    ))}
                </Tr>
                <Tr>
                    <Th width="200px">Take Home</Th>
                    {COLUMNS.map(({ title, modifyForColumn }) => (
                        <Td key={title}>
                            {takeHome === undefined || takeHome === 0
                                ? '-'
                                : formatCurrencyString(modifyForColumn(takeHome))}
                        </Td>
                    ))}
                </Tr>
            </Tbody>
        </Table>
    )
}
