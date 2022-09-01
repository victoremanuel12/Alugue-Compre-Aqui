import { Box, Flex, Text, Icon } from "@chakra-ui/react";

const Footer = () => (
   <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.400">
      <Flex flexDirection="column" fontWeight="bold">
         <Text color="blue.400">2022 Realtor, Inc.</Text>
         <Text> Made By Programmer Victor Emanuel</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" >
            Icones de contato
         </Flex>
   </Box>
)
export default Footer