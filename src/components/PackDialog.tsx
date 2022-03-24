import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import { useControls } from '../hooks/useControls'

export const PackDialog = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { addControls } = useControls()

    return (
        <>
            <Button colorScheme="red" onClick={onOpen}>
                Add controls pack
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader fontSize="lg" fontWeight="bold">
                            Add a custom controls pack
                        </ModalHeader>
                        <ModalBody>
                            <Grid autoColumns="repeat(100px)" autoRows="repeat(100px)" gap={2}>
                                {[
                                    { title: 'US money services business' },
                                    { title: 'EU/UK e-money institution' },
                                    { title: 'Russia Sanctions Risks' },
                                ].map(({ title }) => (
                                    <GridItem>
                                        <Flex
                                            height="full"
                                            direction="column"
                                            bg="gray.100"
                                            rounded="lg"
                                            p="2"
                                            onClick={() => {
                                                addControls()
                                                onClose()
                                            }}
                                            gap={4}
                                        >
                                            <Heading as="h2" fontSize="xl" color="gray.800">
                                                {title}
                                            </Heading>
                                            <Button colorScheme="orange">Add pack</Button>
                                        </Flex>
                                    </GridItem>
                                ))}
                            </Grid>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    )
}
