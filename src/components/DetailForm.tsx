import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Salary } from './Salary'
import { StudentLoan } from './StudentLoan'
// import { TaxYear } from './TaxYear'
import { Pension } from './Pension'

export const DetailForm = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Salary</Tab>
                <Tab>Student Loans</Tab>
                <Tab>Pension</Tab>
            </TabList>

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
