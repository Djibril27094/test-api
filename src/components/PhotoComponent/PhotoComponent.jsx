import { useState, useEffect } from 'react'
import axios from 'axios';

const PhotoComponent = () => {

    const [photos, setPhotos] = useState([]);
    const [errorMsg, setErrorMsg] = useState('')
    
    useEffect(() => {

      axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response =>{
       // console.log(response);
        setPhotos(response.data)
      })
      .catch( error =>{
        console.log(error)
      });
      
    },[]);
  return (
    <>
    <div className="container-fluid">
      { /* {errorMsg}*/}
      <h1 className="mt-5 mb-4">Photos</h1>
      <div className="row">{
         photos.map(photo =>(
            <div className="card col-3">
              <img className="card-img-top" src={photo.thumbnailUrl} alt={photo.title} />
              <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
                <p className="card-text">{photo.id}</p>
              </div>
            </div>
         ))
        }
      </div>
    </div> </>
  )
}

export default PhotoComponent