import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './Component/register.js';
import Login from './Component/login.js';

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;