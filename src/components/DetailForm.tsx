import {
    Box,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    TabProps,
    Tabs,
    useColorModeValue,
} from '@chakra-ui/react'
// import { TaxYear } from './TaxYear'
import { Pension } from './Pension'
import { Salary } from './Salary'
import { StudentLoan } from './StudentLoan'

const CustonTab = (props: TabProps) => <Tab whiteSpace="nowrap" {...props} />

export const DetailForm = () => {
    const borderBottomColor = useColorModeValue('grey.200', 'whiteAlpha.300')

    return (
        <Tabs>
            <Box overflowX="auto">
                <TabList>
                    <CustonTab>Salary</CustonTab>
                    <CustonTab>Student Loans</CustonTab>
                    <CustonTab>Pension</CustonTab>
                </TabList>
            </Box>
            <TabPanels
                borderBottomColor={borderBottomColor}
                borderBottomWidth="2px"
                borderBottomStyle="solid"
            >
                <TabPanel>
                    <Salary />
                    {/* <TaxYear /> */}
                </TabPanel>
                <TabPanel>
                    <StudentLoan />
                </TabPanel>
                <TabPanel>
                    <Pension />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
