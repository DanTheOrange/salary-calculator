import {
    Button,
    Modal,
    ModalProps,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalContent,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

interface ICustomDialogProps {
    headerText: string
    buttonText: string
    children: PropsWithChildren<{}>['children']
    buttonSize?: string
    buttons?: string[]
    modalProps?: ModalProps
}

export const CustomDialog = ({
    headerText,
    buttonText,
    children,
    buttonSize,
    buttons = [],
    modalProps,
}: ICustomDialogProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button colorScheme="red" onClick={onOpen} size={buttonSize}>
                {buttonText}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size="4xl" {...modalProps}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader fontSize="lg" fontWeight="bold">
                            {headerText}
                        </ModalHeader>

                        <ModalBody>{children}</ModalBody>

                        <ModalFooter gap={2}>
                            <Button onClick={onClose}>Cancel</Button>
                            {!!buttons.length &&
                                buttons.map((text) => (
                                    <Button key={text} colorScheme="blue">
                                        {text}
                                    </Button>
                                ))}
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </>
    )
}
