import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from "millify";
import DefaltImage from '../assets/images/house.jpg'

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (

   <Link href={`/property/${externalID}`} passHref>
      <Flex flexWrap="wrap" p="5" w="420px" paddingTop="0" justifyContent="flex-start" cursor="pointer">
         <Box>
            <Image src={coverPhoto ? coverPhoto.url : DefaltImage} alt="House" width={400} height={260} />
         </Box>
         <Box w="full">
            <Flex paddingTop="2" alignItems="center" justifyContent="space-between" >
               <Flex alignItems="center">
                  <Box paddingRight="3" color='green.400'> {isVerified && <GoVerified />}</Box>
                  <Text fontWeight="bold" fontSize="lg">AED {millify(price)}{`/monthly`}</Text>
               </Flex>
               <Box>
                  <Avatar size="lg" p="1"   src={agency?.logo?.url}  />
               </Box>
            </Flex>
            <Flex alignItems="center" justifyContent="space-around" w="250px"   fontSize="18px" fontWeight="bold"> 
            {rooms}<FaBed  color= "#13678A"/> |  {baths}<FaBath    color= "#13678A"/> | {millify(area)} sqft<BsGridFill   color= "#13678A"/>
            </Flex>
            <Text fontSize="lg">
               {  title.length > 30 ? `${  title.substring(0, 30)}...`.toLowerCase() : title.toLowerCase()}
            </Text>
         </Box>
      </Flex>
   </Link>

)
export default Property