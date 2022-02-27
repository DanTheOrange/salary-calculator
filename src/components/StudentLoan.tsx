import { FormControl, FormLabel, SimpleGrid, Switch } from '@chakra-ui/react'
import { STUDENT_LOAN_RATE_STRINGS } from '../constants'
import { useStudentLoanControls } from '../hooks/useCalculator'

export const StudentLoan = () => {
    const {
        planOne,
        planTwo,
        // planFour,
        postgrad,
        togglePlanOne,
        togglePlanTwo,
        // togglePlanFour,
        togglePostgrad,
    } = useStudentLoanControls()

    return (
        <FormControl
            as={SimpleGrid}
            columns={{ base: 2 }}
            gridTemplateColumns={{ base: '5fr 1fr' }}
            width="48"
        >
            <FormLabel htmlFor="plan-one">{STUDENT_LOAN_RATE_STRINGS.get('1')}</FormLabel>
            <Switch id="plan-one" isChecked={planOne} onChange={togglePlanOne} />

            <FormLabel htmlFor="plan-two">{STUDENT_LOAN_RATE_STRINGS.get('2')}</FormLabel>
            <Switch id="plan-two" isChecked={planTwo} onChange={togglePlanTwo} />

            {/* <FormLabel htmlFor="plan-four">{STUDENT_LOAN_RATE_STRINGS.get("4")}</FormLabel>
            <Switch id="plan-four" isChecked={planFour} onChange={togglePlanFour} /> */}

            <FormLabel htmlFor="postgrad">{STUDENT_LOAN_RATE_STRINGS.get('postgrad')}</FormLabel>
            <Switch id="postgrad" isChecked={postgrad} onChange={togglePostgrad} />
        </FormControl>
    )
}
