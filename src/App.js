import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequiredAuth from './components/Auth/RequiredAuth/RequiredAuth';
import Blogs from './components/Blogs/Blogs';
import Collections from './components/Collections/Collection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Stocks from './components/Stocks/Stocks';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/gallery' element={<Collections></Collections>}></Route>
        <Route path='/stocks' element={
          <RequiredAuth>
            <Stocks></Stocks>
          </RequiredAuth>
        }></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
