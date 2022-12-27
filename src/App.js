
//We import the librarys of react router
import { BrowserRouter, BrowserRouter as  Route,Routes } from 'react-router-dom';





//components
import Main from './main';

import Header from './componentes/header';
import Contact from './componentes/contact';


function App() {
  return (
    <div className='App'> 

   
   
    <BrowserRouter>
      <Header></Header>
      <Routes>

      <Route  path='/ReactSalazarService' element={<Main/>}/>

<Route path='/ReactSalazarService/contact' element={<Contact/>}></Route>

<Route  path='/ReactSalazarService/#about' element={<Main/>}/>

<Route  path='/ReactSalazarService/#service' element={<Main/>}/>

<Route  path='/ReactSalazarService/#screenshot' element={<Main/>}/>
      </Routes>



     
    </BrowserRouter>
  
    </div>
 );
}

export default App;
