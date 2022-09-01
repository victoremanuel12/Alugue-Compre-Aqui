import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsBoxArrowDownLeft, BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import ImageScroll from '../../components/ImageScroll';

import { baseUrl, fetchApi } from '../../utils/fetchApi';

const PropertyDetails = ({
  propertyDetails: {
    price,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type, purpose,
    furnishingStatus,
    amenities,
    photos }
}) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    {photos && <ImageScroll data={photos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center" justifyContent="space-between" >
        <Flex alignItems="center">
          <Box paddingRight="3" color='green.400'> {isVerified && <GoVerified />}</Box>
          <Text fontWeight="bold" fontSize="lg">AED {millify(price)}{`/monthly`}</Text>
        </Flex>
        <Box>
          <Avatar size="lg" p="1" src={agency?.logo?.url} />
        </Box>
      </Flex>
      <Flex alignItems="center" justifyContent="space-around" w="250px" fontSize="18px" fontWeight="bold">
        {rooms}<FaBed color="#13678A" /> |  {baths}<FaBath color="#13678A" /> | {millify(area)} sqft<BsGridFill color="#13678A" />
      </Flex>
      <Box marginTop="2">
        <Text fontSize="lg" marginBottom="2" fontWeight="bold">
          {title}
        </Text>
        <Text lineHeight="2" color="gray.600">
          {description}
        </Text>
      </Box>
      <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">

        < Flex justifyContent="space-between" w="400px" boderBottom="1px" borderColor="gray.100" p="3">
          <Text>Type</Text>
          <Text fontWeight="bold">{type}</Text>
        </Flex>

        <Flex justifyContent="space-between" w="400px" boderBottom="1px" borderColor="gray.100" p="3">
          <Text>Porpuse</Text>
          <Text fontWeight="bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex justifyContent="space-between" w="400px" boderBottom="1px" borderColor="gray.100" p="3">
            <Text>furnishingStatus</Text>
            <Text fontWeight="bold">{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities.length && <Text fontSize="2xl" fontWeight="black" marginTop="5">Amenities</Text>}
        <Flex flexWrap="wrap">
          {amenities.map(item => (
            item.amenities.map(amenity => (
              <Text
                key={amenity.text}
                color="blue.400"
                fontSize="l"
                p="2"
                bg="gray.300"
                m="1"
                borderRadius="5"
              >
                {amenity.text}
              </Text>
            ))
          ))}
        </Flex>
      </Box>
    </Box>
  </Box>
)

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  return {
    props: {
      propertyDetails: data,
    },
  };
}