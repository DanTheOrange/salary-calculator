import React, { useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import { Flex, Box, Heading, Text, Button } from '@chakra-ui/react'
import { ControlRow, ControlRowsGroup } from './BeneStuff'

export const BenchmarkTab = () => {
    const [test, setTest] = useState<boolean>(false)

    return (
        <>
            <Flex justifyContent="space-between" mb={4}>
                <Box>
                    <Heading as="h2" fontSize="xl">
                        You are 70% in line with Cable’s financial crimes controls best practices
                    </Heading>
                    <Text>
                        We found 10 controls you may want to implement, particularly PEPs controls.
                    </Text>
                </Box>
                <Chart />
                <Flex alignItems="flex-end">
                    <Button
                        colorScheme="red"
                        onClick={() => {
                            setTest(true)
                        }}
                    >
                        Test All
                    </Button>
                </Flex>
            </Flex>
            <ControlRowsGroup>
                {[
                    {
                        area: 'CDD',
                        definition: 'All directors have provided names',
                        type: 'Requirements',
                        test: true,
                    },
                    {
                        area: 'CDD',
                        definition: 'All directors have provided names',
                        type: 'Requirements',
                        test: true,
                    },
                    {
                        area: 'CDD',
                        definition: 'All directors have provided names',
                        type: 'Requirements',
                        test: false,
                    },
                    {
                        area: 'CDD',
                        definition: 'All directors have provided names',
                        type: 'Requirements',
                        test: true,
                    },
                    {
                        area: 'CDD',
                        definition: 'All directors have provided names',
                        type: 'Requirements',
                        test: false,
                    },
                    {
                        area: 'CDD',
                        definition: 'All directors have provided names',
                        type: 'Requirements',
                        test: true,
                    },
                    {
                        area: 'CDD',
                        definition: 'All directors have provided names',
                        type: 'Requirements',
                        test: true,
                    },
                ].map((control, i) => (
                    <ControlRow key={i} {...control} showTest={test} withAdd={true} />
                ))}
            </ControlRowsGroup>
        </>
    )
}

const data = [
    {
        subject: 'EDD',
        A: 100,
        B: 0,
        fullMark: 100,
    },
    {
        subject: 'KYC',
        A: 90,
        B: 0,
        fullMark: 100,
    },
    {
        subject: 'RA',
        A: 80,
        B: 0,
        fullMark: 100,
    },
    {
        subject: 'IDV',
        A: 70,
        B: 0,
        fullMark: 100,
    },
    {
        subject: 'Sanctions',
        A: 60,
        B: 0,
        fullMark: 100,
    },
    {
        subject: 'PEPs',
        A: 20,
        B: 0,
        fullMark: 100,
    },
]

const Chart = () => (
    <RadarChart width={300} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
)
