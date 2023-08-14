import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import {Routes,Route,Link} from "react-router-dom"
import SignUp from './components/sign-up/SignUp';
import SignIn from './components/sign-in/SignIn';
import Article from './Aricle';
const App=()=>{
  return<main>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<SignUp/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="/article" element={<Article/>}/>
      </Route>
    </Routes>
    <Home/>
  </main>
}

export default App;
