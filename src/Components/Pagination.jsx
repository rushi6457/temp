import { Button } from "@chakra-ui/react"
import { useState } from "react"
function Pagination ({totalPages,currentPage,OnChange}){

    const [page,setPage]   = useState(1)

    const prev = <button onClick = {()=>setPage(currentPage-1)}>Prev</button>
     const current = <button onClick = {()=>setPage(currentPage)}>{currentPage}</button>
      const next = <button onClick = {()=>setPage(currentPage+1)}>Next</button>


      return (

        {prev},
        {current},
         {next}
      )
} 

export default Pagination;