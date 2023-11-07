import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Text
} from "@chakra-ui/react"
import { useState } from "react"
import { AiFillStar } from 'react-icons/ai'

export default (props) => {
    let [state, setState] = useState([])
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then((datas) => datas.json())
        .then((result) => setState(result))

    return (
        <Box w={{ base: '98%', md: '95%', xl: '93%', '2xl': '90%' }} m={'80px auto'} >
            <Heading textAlign={'center'}>ОТЗЫВЫ НАШИХ ПОКУПАТЕЛЕЙ</Heading>
            <Grid templateColumns={{base:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(3,1fr)',lg:'repeat(4,1fr)',xl:'repeat(5,1fr)','2xl':'repeat(6,1fr)',}} mt={'10px'}>
                {
                    state.slice(0,6).map(item => {
                        return (
                            <GridItem key={item.id} padding={'15px'} borderRadius={'10px'}>
                              <Image src={item.url} />
                                <Flex mt={'10px'}>
                                    <AiFillStar color="#FF9649" />
                                    <AiFillStar color="#FF9649" />
                                    <AiFillStar color="#FF9649" />
                                    <AiFillStar />
                                    <AiFillStar />
                                </Flex>
                                <Text>{props.heading}</Text>
                                <Text textAlign={'center'} color={'#A8A8A8'}>
                                    {props.name}
                                </Text>
                                <Text>
                                    {props.content}
                                </Text>
                                <Text color={'#A8A8A8'} mt={'10px'}>06.03.2020 Жасмин</Text>
                            </GridItem>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}