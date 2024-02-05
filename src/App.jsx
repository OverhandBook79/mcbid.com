import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return <>
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/auth' element={<AuthPage />} />
    <Route path='/profile' element={<ProfilePage />} />
    <Route path='/uploadcreation' element={<UploadPage/>} />
  </Routes>
  </>;
}

export default App
