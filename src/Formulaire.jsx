import { useState  } from 'react'

// import './Formulaire.css'

function Formulaire() {
  const [info, setinfo] = useState({prenom:"", nom:""});
  const [submitinfo, setsubmitinfo] = useState({prenom:"", nom:""});
  
  const handleChange = (e)=> {
     setinfo({...info, 
      [e.target.name]:e.target.value
    })
  }

  const handelSubmit = e => {
    e.preventDefault()
    setsubmitinfo(info)
  }


  return (
    <form onSubmit={handelSubmit} className='vh-100 d-flex flex-column justify-content-center align-items-center'>
      <div className='mb-5 col-8 '>
        <label htmlFor="#" className='form-label'>Prenom: {" "} {submitinfo.prenom && submitinfo.prenom}</label>
        <input type="text" className='form-control' name='prenom' onChange={handleChange} />
      </div>
      <div className='mb-5 col-8'>
        <label htmlFor="#" className='form-label'>Nom: {" "} {submitinfo.nom && submitinfo.nom}</label>
        <input type="text" className='form-control' name='nom' onChange={handleChange} />
      </div>
      <input type="submit" value={"Soumettre"}  className='btn btn-primary'/>
    </form>
  )
}

export default Formulaire
