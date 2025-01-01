import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./component/Body"
import Login from "./component/Login"
import Profile from "./component/Profile"
import Feed from "./component/Feed"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<Feed/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Route>
      </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
