import { Tabs, TabList, TabPanels, Tab, TabProps, TabPanel, Box } from '@chakra-ui/react'
import { Salary } from './Salary'
import { StudentLoan } from './StudentLoan'
// import { TaxYear } from './TaxYear'
import { Pension } from './Pension'

const CustonTab = (props: TabProps) => <Tab whiteSpace="nowrap" {...props} />

export const DetailForm = () => {
    return (
        <Tabs>
            <Box overflowX="auto">
                <TabList>
                    <CustonTab>Salary</CustonTab>
                    <CustonTab>Student Loans</CustonTab>
                    <CustonTab>Pension</CustonTab>
                </TabList>
            </Box>
            <TabPanels>
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
