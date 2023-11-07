import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Heading,
    useDisclosure,
    Box,
    Text,
} from '@chakra-ui/react'
import { RxHamburgerMenu } from 'react-icons/rx'

export default () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button display={{ base: 'flex', xl: 'none' }} variant={'unstyled'} onClick={onOpen}>
                <RxHamburgerMenu fontSize={'25px'} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                size={'sm'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader><Heading fontWeight={'normal'}>Декоративная косметика</Heading></DrawerHeader>
                    <DrawerBody>
                        <Box w={'100%'} bg={'red'} h={'3px'}></Box>
                        <Heading mt={'10px'} fontWeight={'black'} size={'md'}>
                            Уход за волосами
                        </Heading>
                        <Text color={'#505759'} fontFamily={'Fira Sans'} fontSize={'16px'} mt={'12px'}>Шампуни</Text>
                        <Text color={'#505759'} fontFamily={'Fira Sans'} fontSize={'16px'} mt={'12px'}>Ополаскиватель для <br /> волос</Text>
                        <Text color={'red'} fontFamily={'Fira Sans'} fontSize={'16px'} mt={'12px'}>Бальзамы для волос</Text>
                        <Text color={'#505759'} fontFamily={'Fira Sans'} fontSize={'16px'} mt={'12px'}>Кондиционер</Text>
                        <Text color={'#505759'} fontFamily={'Fira Sans'} fontSize={'16px'} mt={'12px'}>Масло для волос</Text>
                        <Text color={'#505759'} fontFamily={'Fira Sans'} fontSize={'16px'} mt={'12px'}>Скраб и пилинг для <br /> кожи головы</Text>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}