import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from 'next/image'
import { Flex, Select, Box, Text, Input, Icon, Spinner, Button } from '@chakra-ui/react'
import { MdCancel } from 'react-icons/md'
import { filterData, getFilterValues } from '../utils/filterData'
const SearchFilters = () => {


   const [filters, setFilter] = useState(filterData)
   const router = useRouter();

   const searchPropeties = (filterValues) => {
      const path = router.pathname
      const values = getFilterValues(filterValues)
      const { query } = router

      values.forEach(item => {
         if (item.value && filterValues?.[item.name]) {
            query[item.name] = item.value
         }
      })
      router.push({ pathname: path, query })
   }


   return (
      <Flex bg="gray.200" justifyContent="center" flexWrap="wrap">
         {filters.map(filter => (
            <Box key={filter.queryName}>
               <Select
                  onChange={(e) => searchPropeties({ [filter.queryName]: e.target.value })}
                  placeholder={filter.placeholder}
                  w="fit-content"
                  p="2"
               >
                  {filter?.items?.map(item => (
                     <option value={item.value} key={item.value}>
                        {item.name}
                     </option>
                  ))}

               </Select>
            </Box>
         ))}
      </Flex>
   )
}
export default SearchFilters