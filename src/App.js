
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import { Route,Routes,Redirect, useNavigate} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to /page/1 when this component mounts
    navigate(`/page/1`);
  }, []);
  return (
    <div className=" w-[98vw] flex justify-center items-center flex-col m-auto">
  
     <Navbar/>
     <Routes>
        {/* <Route path="/" element='h1' /> */}
        <Route path="/page/:page" element={<HomePage/>} />
    </Routes>
    
    </div>
  );
}

export default App;
