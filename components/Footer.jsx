import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import {FaInstagramSquare,FaGithubSquare,FaLinkedin}  from 'react-icons/fa'
const Footer = () => (
   <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.400" >
      <Flex flexDirection="column" fontWeight="bold">
         <Text color="blue.400">2022 Realtor, Inc.</Text>
         <Text> Made By Programmer Victor Emanuel</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
         <Flex alignItems="center" justifyContent="space-between" w="200px" p="2" >
            <Link target="_blanck" href="https://github.com/victoremanuel12"><FaGithubSquare size={30}/></Link>
            <Link target="_blanck" href="https://www.instagram.com/victoremannuel11/"><FaInstagramSquare size={30}/></Link>
            <Link target="_blanck" href="https://www.linkedin.com/in/victor-emanuel-004636228/"><FaLinkedin size={30}/></Link>
         </Flex>
      </Flex>
   </Box>
)
export default Footer