import Home from "./components/home/Home";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Preview from "./pages/Preview";
import Recording from "./pages/Recording";
import VideoList from "./pages/VideoList";

function App() {

  //   "background":{
  //   "service_worker":"background.js"
  // },
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/recording' element={<Recording />} />
        <Route path='/videos' element={<VideoList />} />
      </Routes>
    </div>
  );
}

export default App;
