import './App.css';
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from "./components/Home/Home";
import EasyForm from "./components/EasyForm/Easyform";



function App(){
  return(
      <div>
          <NavBar/>
          {/* <Home/> */}
          <EasyForm/>
      </div>
  )
}
export default App;