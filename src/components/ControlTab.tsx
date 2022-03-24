import {
    Button,
    Flex,
    List,
    ListItem,
    Stack,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Select,
} from '@chakra-ui/react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import { areas, metrics } from '../hooks/types'
import { useControls } from '../hooks/useControls'
import { ControlRowsGroup, ControlRow } from './BeneStuff'
import { CustomDialog } from './CustomDialog'
import { PackDialog } from './PackDialog'

export const ControlTab = () => {
    const { controls, addControls } = useControls()

    return (
        <Stack direction="column" spacing={4}>
            <Flex justifyContent="space-around">
                <Chart />

                <Stack direction="row" spacing={4}>
                    <CustomDialog buttonText="Upload CSV" headerText="Select a CSV file to upload">
                        <Flex
                            border="5px dashed grey"
                            minHeight="100px"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Button onClick={() => addControls()} colorScheme="teal">
                                Upload
                            </Button>
                        </Flex>
                    </CustomDialog>
                    <PackDialog />
                    <CustomDialog
                        buttonText="Define new control"
                        headerText="Define a new control"
                        buttons={['Add']}
                    >
                        <Stack direction="column">
                            <FormControl>
                                <FormLabel htmlFor="title">Title</FormLabel>
                                <Input id="title" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="area">Area</FormLabel>
                                <Select id="area">
                                    {areas.map(({ name }) => (
                                        <option value={name}>{name}</option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="area">Definition</FormLabel>
                                <Stack direction="row" spacing={2}>
                                    <Select>
                                        {[
                                            'All directors have provided names',
                                            'All directors have provided addresses',
                                            'All directors have provided phone numbers',
                                            'All directors have provided email addresses',
                                            'All directors have provided dates of birth',
                                        ].map((name) => (
                                            <option value={name}>{name}</option>
                                        ))}
                                    </Select>
                                    <Select>
                                        <option value="and">AND</option>
                                        <option value="and">OR</option>
                                    </Select>
                                    <Select>
                                        {[
                                            'All directors have provided names',
                                            'All directors have provided addresses',
                                            'All directors have provided phone numbers',
                                            'All directors have provided email addresses',
                                            'All directors have provided dates of birth',
                                        ].map((name) => (
                                            <option value={name}>{name}</option>
                                        ))}
                                    </Select>
                                </Stack>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="owner">Owner</FormLabel>
                                <Select id="owner">
                                    {[
                                        'Ioanna',
                                        'Bene',
                                        'Dan',
                                        'Jonathan',
                                        'Jose',
                                        'Stefan',
                                        'Serban',
                                    ].map((name) => (
                                        <option value={name}>{name}</option>
                                    ))}
                                </Select>{' '}
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="law">Law/Regulation/Guidance source</FormLabel>
                                <Input id="law" type="text" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="law">Policy and/or procedure source</FormLabel>
                                <Input id="law" type="text" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="law">Identified risk</FormLabel>
                                <Input id="law" type="text" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="email">Last reviewed date</FormLabel>
                                <Input id="email" type="date" />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="email">Last training on</FormLabel>
                                <Input id="email" type="date" />
                            </FormControl>
                        </Stack>
                    </CustomDialog>
                </Stack>
            </Flex>
            <Stack direction="column" spacing={4}>
                <Input placeholder="Filter" width="full" />
                <Stack direction="row" spacing={4}>
                    <Select placeholder="Type">
                        <option value="option1">Requirements</option>
                        <option value="option2">Controls</option>
                    </Select>
                    <Select placeholder="Area">
                        {areas.map(({ name }) => (
                            <option value={name}>{name}</option>
                        ))}
                    </Select>
                    <Select placeholder="Review Due">
                        <option value="option1">Today</option>
                        <option value="option2">This week</option>
                        <option value="option2">This month</option>
                    </Select>
                </Stack>
            </Stack>
            <List>
                {!!controls.length && (
                    <Stack direction="column" gap={2}>
                        <ControlRowsGroup>
                            {[
                                {
                                    area: 'CDD',
                                    definition: 'All directors have provided names',
                                    type: 'Requirements',
                                },
                                {
                                    area: 'CDD',
                                    definition: 'All directors have provided names',
                                    type: 'Requirements',
                                },
                                {
                                    area: 'CDD',
                                    definition: 'All directors have provided names',
                                    type: 'Requirements',
                                },
                                {
                                    area: 'CDD',
                                    definition: 'All directors have provided names',
                                    type: 'Requirements',
                                },
                                {
                                    area: 'CDD',
                                    definition: 'All directors have provided names',
                                    type: 'Requirements',
                                },
                                {
                                    area: 'CDD',
                                    definition: 'All directors have provided names',
                                    type: 'Requirements',
                                },
                                {
                                    area: 'CDD',
                                    definition: 'All directors have provided names',
                                    type: 'Requirements',
                                },
                            ].map((control) => (
                                <ControlRow {...control} />
                            ))}
                        </ControlRowsGroup>
                        <Stack direction="row" gap={2}>
                            <Button colorScheme="red">Download Controls Register</Button>
                            <Button colorScheme="red">Download Summary Report</Button>
                        </Stack>
                    </Stack>
                )}
                {!controls.length && (
                    <Flex
                        bg="gray.100"
                        height="150px"
                        alignItems="center"
                        justifyContent="center"
                        rounded="lg"
                    >
                        No controls yet, boo...
                    </Flex>
                )}
            </List>
        </Stack>
    )
}

const data = [
    {
        name: 'EDD',
        requirements: 5,
        controls: 6,
        amt: 0,
    },
    {
        name: 'KYC',
        requirements: 6,
        controls: 7,
        amt: 0,
    },
    {
        name: 'RA',
        requirements: 8,
        controls: 3,
        amt: 0,
    },
    {
        name: 'IDV',
        requirements: 9,
        controls: 6,
        amt: 0,
    },
    {
        name: 'Sanctions',
        requirements: 10,
        controls: 10,
        amt: 0,
    },
    {
        name: 'PEPs',
        requirements: 2,
        controls: 6,
        amt: 0,
    },
]
const Chart = () => (
    <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="controls" stackId="a" fill="#8884d8" />
        <Bar dataKey="requirements" stackId="a" fill="#82ca9d" />
    </BarChart>
)
