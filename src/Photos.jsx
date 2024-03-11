import { useEffect, useState } from "react"
import PhotoCard from "./PhotoCard"

export default function Photos(){
    const [photos, setPhotos] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res=>res.json())
        .then(data=> setPhotos(data))
    },[])
        
    return(
        photos.map(photo=><PhotoCard photo={photo}></PhotoCard>)
    )
}