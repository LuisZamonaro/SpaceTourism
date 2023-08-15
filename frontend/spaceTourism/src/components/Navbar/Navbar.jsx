
import { NavLink} from "react-router-dom"

// Hooks
import { useAuth } from "../../hooks/useAuth"
import { useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

// Redux
import { logout, reset } from "../../slices/authSlice"

import logoPage from '../../starter-code/assets/shared/logo.svg'

// Styles 
import *as S from './styles'
import hamburg from '../../starter-code/assets/shared/icon-hamburger.svg'
import closeMenu from '../../starter-code/assets/shared/icon-close.svg'



const Navbar = () => {
  const { auth } = useAuth()
  // const { user } = useSelector((state) => state.auth)
  const [openMenu, setOpenMenu] = useState(0)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())

    navigate("/login")
  }

  return (

    <S.ContainerNavbar display={openMenu}>
      <nav id="nav">
        {auth ? (
          <>
            <div className="logoPage">
              <NavLink to="/"><img src={logoPage} /></NavLink>
            </div>
            <div className="lineNavbar">
            </div>
            <div className="containerAnotherLinks">
              <div className="anotherLinks">
                <NavLink to="/"><span id="linkNavbar"><span className="numberNavbar">00 </span>Home</span></NavLink>
                <NavLink to="/destination"><span id="linkNavbar"><span className="numberNavbar">01 </span>Destination</span></NavLink>
                <NavLink to="/crew"><span id="linkNavbar"><span className="numberNavbar">02 </span>Crew</span></NavLink>
                <NavLink to="/technology"><span id="linkNavbar"><span className="numberNavbar">03 </span>Technology</span></NavLink>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
            <div className="hamburg" onClick={() => setOpenMenu(1)}>
              <img src={hamburg} />
            </div>
          </>
        ) :
          (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Registrar</NavLink>
            </>)}
      </nav>
      <nav>
        <S.MenuMobile display={openMenu}>
          <div className="closeMenu" onClick={() => setOpenMenu(0)}>
            <img src={closeMenu} />
          </div>
          <div className="optionsHomeM">
            <NavLink to="/"><span className="numberNavbar">00</span> <span className="optionMobile">HOME</span></NavLink>
          </div>
          <div className="optionsHomeM">
            <NavLink to="/destination"><span className="numberNavbar">01</span><span className="optionMobile">DESTINATION</span></NavLink>
          </div>
          <div className="optionsHomeM">
            <NavLink to="/crew"><span className="numberNavbar">02</span><span className="optionMobile">CREW</span></NavLink>
          </div>
          <div className="optionsHomeM">
            <NavLink to="/technology"><span className="numberNavbar">03</span><span className="optionMobile">TECHNOLOGY</span></NavLink>
          </div>
        </S.MenuMobile>
      </nav>
    </S.ContainerNavbar>
  )
}

export default Navbar