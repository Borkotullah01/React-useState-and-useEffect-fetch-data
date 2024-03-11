import './Card.css'
export default function PhotoCard({photo}){
    console.log(photo)
    return(
        <div className='box'>
            <img className='box' src={photo.url} alt="" />
            <h2>Photo</h2>
        </div>
    )
}