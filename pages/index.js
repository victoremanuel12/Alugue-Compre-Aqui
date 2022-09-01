import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '../utils/fetchApi'
import Property from '../components/Property'

const Banner = ({ purpose, imgUrl, titleMain, titleSecundary, descriptionMain, descriptionSecundary, linkName, buttonText }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imgUrl} width={500} height={300} alt="Banner of webSite" />
    <Box p="5">
      <Text fontSize="sm" color="gray.500" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{titleMain} <br /> {titleSecundary}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{descriptionMain}<br /> {descriptionSecundary}</Text>
      <Button fontSize="cl" bg="blue.300" color="white" >
        <Link href={linkName}>
          {buttonText}
        </Link>
      </Button>
    </Box>
  </Flex>
)

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box>
    <Banner
      purpose={'Rent a Home'}
      titleMain="Rental Homes for"
      titleSecundary="everyone"
      descriptionMain="explore apartaments, Villas, Homes"
      descriptionSecundary="and more"
      linkName='/search?purpose=for-rent'
      buttonText="Explore Renting"
      imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"

    />
    <Flex flexWrap='wrap'>
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
    <Banner
      purpose={'Buy a Home'}
      titleMain="Rental Homes for"
      titleSecundary="everyone"
      descriptionMain="explore apartaments, Villas, Homes"
      descriptionSecundary="and more"
      linkName='/search?purpose=for-rent'
      buttonText="Explore Renting"
      imgUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'

    />
    <Flex flexWrap='wrap'>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
  </Box >

)


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home

