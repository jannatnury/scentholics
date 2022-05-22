import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequiredAuth from './components/Auth/RequiredAuth/RequiredAuth';
import Blogs from './components/Blogs/Blogs';
import Collections from './components/Collections/Collection';
import Items from './components/Collections/Items/Items';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import PerfumeDetails from './components/PerfumeDetails/PerfumeDetails';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/gellary' element={<Collections></Collections>}></Route>
        <Route path='/inventory' element={
          <RequiredAuth>
            <Inventory></Inventory>
          </RequiredAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequiredAuth>
            <PerfumeDetails></PerfumeDetails>
          </RequiredAuth>
        }></Route>
        <Route path='items' element={
          <RequiredAuth>
            <Items></Items>
          </RequiredAuth>
        }></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
