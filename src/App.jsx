import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import WorldsPage from "./pages/WorldPage/WorldsPage";
import AddonsPage from "./pages/AddonPage/AddonsPage";
import ServersPage from "./pages/ServerPage/ServersPage";
import SkinsPage from "./pages/SkinPage/SkinsPage";
import PostPage from "./pages/PostPage/PostPage";

function App() {
  return <>
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/addons' element={<AddonsPage/>} />
    <Route path='/worlds' element={<WorldsPage/>} />
    <Route path='/skins' element={<SkinsPage/>} />
    <Route path='/servers' element={<ServersPage/>} />
    <Route path='/auth' element={<AuthPage />} />
    <Route path='/profile' element={<ProfilePage />} />
    <Route path='/uploadcreation' element={<UploadPage/>} />
    <Route path='/post' element={<PostPage/>} />
  </Routes>
  </>;
}

export default App
