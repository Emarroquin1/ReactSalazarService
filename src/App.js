
//We import the librarys of react router
import { BrowserRouter,Route,Routes } from 'react-router-dom';





//components
import Main from './main';



import Header from './componentes/header';





function App() {
  return (
    <div className='App'> 


   
    <BrowserRouter>

   <Header></Header>
      <Routes>

      <Route  path='/ReactSalazarService' element={<Main/>}/>



      </Routes>

    </BrowserRouter>
  
    </div>
 );
}

export default App;
