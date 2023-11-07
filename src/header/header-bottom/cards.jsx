import {
    GridItem,
    Text
} from "@chakra-ui/react"


export default (props) => {
    return (
        <GridItem w={'100%'} justifyContent={'space-between'} alignItems={'center'} display={'flex'} gap={'10px'}>
            {props.icon}
            <Text>{props.content}</Text>
        </GridItem>
    )
}