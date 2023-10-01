import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { getData } from '../util'
import { SingleContent } from './SingleContent'
import { ContentPagination } from './ContentPagination'


export const StarsResults = ({searchStar}) => {
  const [page,setPage]=useState(1)
  console.log(searchStar)
  const urlStar=`https://api.themoviedb.org/3/search/person?api_key=${import.meta.env.VITE_API_KEY}&query=${searchStar}&page=${page}&include_adult=false`
  console.log(urlStar)
  const {data,status} =useQuery(['searchedStar',urlStar],getData)
  status=='success' && console.log(data)
 

  return (
    <div className="content">
    {status =='success' &&  data.results.length>0 ?
     data.results.map(obj=>(
      <SingleContent 
        key={obj.id} 
        id={obj.id}
        poster={obj.profile_path}
        title={obj.name}
        vote={obj.popularity}
        type={obj.known_for_department}
        date={obj.original_name}
       

    />
    ))
    :
    <div>no Stars found...</div>
    
    }
    {status =='success' && <ContentPagination page={page} setPage={setPage} numOfPage={data.total_pages>500 ? 500 : data.total_pages}/>}
    </div>
  )
}