

import { Link } from "react-router-dom"
import Message from "../../../components/Message/Message"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import *as S from './styles'

// Redux
import { login, reset } from "../../../slices/authSlice"

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const dispatch = useDispatch()

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email,
      password
    }

    dispatch(login(user))
  }

  // Clean all auth states
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])
  return (
    <S.ContainerLogin>
      <h2>SpaceTourism</h2>
      <h2 className="subtitle">Log in to know the Space Tourism</h2>
      <form onSubmit={handleSubmit}>
        <div className="areaInput">
          <div className="userEntry">
            User E-mail:
          </div>
          <input type="text" placeholder="User E-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
          <div className="userEntry">
            User Password:
          </div>
          <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        {!loading && <input className="btnEnter" type="submit" value="Enter" />}
        {loading && <input className="btnEnter" type="submit" value="Loading..." disabled />}
        {error && <Message msg={error} type="error" />}
      </form>
      <p>Don’t have an account?<Link to="/register">Click here!</Link></p>
    </S.ContainerLogin>
  )
}

export default Login