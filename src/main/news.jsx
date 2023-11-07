import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Text
} from "@chakra-ui/react";

import { useState } from "react";
import { BsHeart ,BsCartXFill } from 'react-icons/bs'

export default (props) => {

    let [state, setState] = useState([])
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((datas) => datas.json())
        .then((result) => setState(result))

    return (
        <Box w={{ base: '98%', md: '95%', xl: '93%', '2xl': '90%' }} m={'40px auto'}>
            <Flex alignItems={'center'} justifyContent={'center'}>
                <Heading color={'#333'} fontFamily={'sans-serif'} fontSize={'45px'}>{props.heading} /</Heading>
                <Text color={'red'} fontSize={'25px'} fontWeight={'normal'}>{props.heading2}</Text>
            </Flex>
            <Grid  templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(3,1fr)',xl:'repeat(4,1fr)','2xl':'repeat(4,1fr)',}} gap={'10px'} mt={'50px'}>
                {
                    state.slice(0, 4).map((item) => {
                        return (
                            <GridItem key={item.id} textAlign={'center'} padding={'15px'} border={'1px solid black'} borderRadius={'10px'}>
                                <Image mb={'10px'} src={item.url} />
                                <Text fontSize={'20px'} color={'#333'} fontFamily={'sans-serif'} lineHeight={'20px'}>
                                    {props.title}
                                </Text>
                                <Text mt={'5px'} fontSize={'20px'} color={'#A8A8A8'}>{props.brandName}</Text>
                                <Flex mt={'10px'} fontSize={'25px'}  justifyContent={'space-between'} alignItems={'center'}>
                                    <Heading>{props.price}</Heading>
                                    <BsHeart />
                                </Flex>
                                <Button _hover={{color:'black',background:'pink'}} w={'100%'} marginTop={'10px'} color="white" bg={'red'} gap={'10px'}>
                                    <BsCartXFill />
                                    Купить
                                </Button>
                            </GridItem>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}