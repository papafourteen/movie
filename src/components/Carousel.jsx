import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../util'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { noPicture } from '../util';
import { img_300 } from '../util';
import './Carousel.css'


const handleDragStart = (e) => e.preventDefault();
const responsive={
    0:{items:3},
    512:{items:5},
1024:{items:7},

}


export const Carousel = ({type,id}) => {
    console.log('carousel:',type,id)

    const urlCredits=`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`
  const {data,status}=useQuery(['credits',urlCredits],getData)
  status=='success' && console.log(data)

  status=='success' && console.log(data.cast)

  const items=status=='success' ?
    data.cast.map(obj=>(
        <div className='carousel-item'>
            <img className='carousel-img' onDragStart={handleDragStart} src={obj.profile_path ? img_300+obj.profile_path : noPicture} alt={obj?.name}/>
            <b className='carousel-txt'>{obj?.name}</b>

        </div>
    ))
  :[]

  return (
    <AliceCarousel 
    mouseTracking autoPlay infinite
    disableDotsControls
    disableButtonsControls
    responsive={responsive}

    items={items}

    
    />
  )
}
