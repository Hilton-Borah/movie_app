import { Stack, Skeleton } from '@chakra-ui/react'
import React from 'react'

const SkeletonMoviecard = () => {
    return (
        <Stack>
            <Skeleton w={"100%"} h={"80%"} borderRadius={"10px"} />
            <Skeleton w={"100%"} h={"80%"} borderRadius={"10px"} />
            <Skeleton p={"10px"} />
            <Stack pl={"10px"} pr={"10px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Skeleton />
                <Skeleton pl={"5px"} pr={"5px"} fontSize={"12px"} />
            </Stack>
        </Stack>
    )
}

export default SkeletonMoviecard
