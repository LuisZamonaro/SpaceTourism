
// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Hooks
import { useAuth } from "./hooks/useAuth"

// Components
import Navbar from "./components/Navbar/Navbar"
// import Footer from "./components/Footer/Footer"

// Pages
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login/Login"
import Register from "./pages/Auth/Register/Register"
import Destination from "./pages/Destination/Destination"
import Crew from "./pages/Crew/Crew"


// Styles
import *as S from './styles/stylesApp/stylesApp'
import './styles/globals/global.css'
import { GlobalStyle } from "./styles/globals/global"
import { OpenProvider } from "./context/openComponentContext"
import Technology from "./pages/Technology/Technology"

function App() {
  const { auth, loading } = useAuth()

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
      <OpenProvider>
        <GlobalStyle />
        <S.ContainerGeral /*imgUrl="./starter-code/assets/home/background-home-desktop.jpg"*/>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
              <Route path="/destination" element={auth ? <Destination/> : <Navigate to="/login" />} />
              <Route path="/crew" element={auth ? <Crew /> : <Navigate to="/login" />} />
              <Route path="/technology" element={auth ? <Technology /> : <Navigate to="/login" />} />
              <Route path="/login" element={!auth ? <Login /> : <Navigate to="/" />} />
              <Route path="/register" element={!auth ? <Register /> : <Navigate to="/" />} />
            </Routes>
            {/* <Footer /> */}
          </BrowserRouter>
        </S.ContainerGeral>
      </OpenProvider>
  )
}

export default App
