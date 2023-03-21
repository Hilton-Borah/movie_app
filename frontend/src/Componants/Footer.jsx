import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Box w={"80%"} m={"auto"} color={"white"}>
            <Link to={"/"}><Box>
                <Image w={"10%"} mb={"30px"} src='https://user-images.githubusercontent.com/103739534/226175925-29f44128-59d8-4660-8a73-b5069cd5bb18.png' />
            </Box></Link>
            <Box display={"grid"} gridTemplateColumns={"60% 40%"} gap={"50px"}>
                <Text w={"70%"}>UR TV is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies.</Text>
                <Text border={"0.5px solid"} borderRadius={"10px"} p={"10px"}>UR TV One does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</Text>
            </Box>
            <Box textAlign={"center"} mt={"30px"}>
                <Text textAlign={"center"}>Designed and build by UR TV team, 2023 All rights reserved.</Text>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={'center'} w={"15%"} m={'auto'}>
                    <Text borderBottom={"1px solid"} cursor={"pointer"}>Contact us</Text>
                    <Text borderBottom={"1px solid"} cursor={"pointer"}>Admin Panel</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
