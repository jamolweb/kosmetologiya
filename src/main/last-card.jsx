import {
    Box,
    Heading,
    Text
} from "@chakra-ui/react"


export default () => {
    return (
        <Box padding={'50px 50px 50px 0px'} bg={'#F3F2F2'} w={'100%'}>
            <Box w={{ base: '98%', md: '95%', xl: '93%', '2xl': '90%' }} m={'40px auto'}>
                <Heading>
                    Бьюти-соrставляющие: чем богата  корейская косметика
                </Heading>
                <Text mt={'30px'}>
                    Все более востребованной на украинском рынке становится косметика из Кореи. И привлекает она к себе внимание покупателей вовсе не красочной упаковкой или доступной стоимостью. Дело в том, что все уходовые и декоративные косметические средства на 98% изготовлены из натуральных ингредиентов и не испытываются на животных. Очень важно, что вся косметика из Южной Кореи направлена не только на то, чтобы визуально устранить возрастные проявления, но еще и на поддержание здоровья и молодости дермы независимо от возраста. Очень важно, что вся косметика из Южной Кореи направлена не только на то, чтобы визуально устранить возрастные проявления, но еще и на поддержание здоровья и молодости дермы независимо от возраста.
                </Text>
            </Box>
        </Box>
    )
}