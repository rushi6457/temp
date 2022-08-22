import { GridItem, Img, SimpleGrid,Box,Stack,Container,Text,Button } from "@chakra-ui/react";
import axios from "axios";
import {useState,useEffect} from "react"
import Pagination from "../Components/Pagination"


function Dashboard ({

    page = 1,
    limit = 10
}){

    const [data,setData] = useState([]);


    useEffect(()=>{

        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?_page=${page}&limit=${limit}`)
        // .then((res) =>res.json())
        .then((res)=>{
            setData(res.data.data)
            console.log(res.data.data)
        })
    //  getData()
    //  .then((res)=>{
    //     setData(res.data)
    //     console.log(res.data)
    //  })

    } ,[page])
   
    return (

      

        <>
          {/* <Pagination/> */}
            <SimpleGrid column={[1,2,3,4]} spacing = {15}>
            {data&&
                data.map((el)=>{
                     return (
                      
                        <Box>
                            
                            <Stack key = {el.id}>

                                <Img boxSize = "10rem" src = {el.image}/>
                                <Text>{el.title}</Text>
                                <Text>{el.price}</Text>
                                <Text>{el.brand}</Text>
                            </Stack>
                        </Box>
                    )

                })
            }
            </SimpleGrid>
        </>
    )
}

export default Dashboard;