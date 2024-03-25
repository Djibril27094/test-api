import PhotoComponent from './components/PhotoComponent/PhotoComponent';
import TodoComponent from './components/TodoComponent/TodoComponent';
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
   <Routes>
       <Route path ="/" element ={<TodoComponent />} />
       <Route path ="/photo" element ={ <PhotoComponent />}/>
   </Routes>
  )
}

export default App
