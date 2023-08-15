import *as S from './styles'

// Components
import { Link } from "react-router-dom"
import Message from "../../../components/Message/Message"

// Hooks
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

//Redux
import { register, reset } from '../../../slices/authSlice'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const dispatch = useDispatch()

  const { loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name,
      email,
      password,
      confirmPassword
    }


    dispatch(register(user))
  }

  // Clean all auth states
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <S.ContainerRegister>
      <h1>Space Tourism</h1>
      <h2 className="subitlte">Register to use the site</h2>
      <form onSubmit={handleSubmit}>
        <div className="areaInput">
          <div className="userEntry">
            User-Name:
          </div>
          <input type="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name || ""} />
          <div className="userEntry">
            User E-mail:
          </div>
          <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
          <div className="userEntry">
            User Password:
          </div>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password || ""} />
          <div className="userEntry">
            User Confirm-password:
          </div>
          <input type="password" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword || ""} />
        </div>
        {!loading && <input className='btnEnter' type="submit" value="Register" />}
        {loading && <input className='btnEnter' type="submit" value="Loading..." disabled />}
        {error && <Message msg={error} type="error" />}
      </form>
      <p>
        Already have an account? <Link to="/login">Click here</Link>
      </p>
    </S.ContainerRegister>
  )
}

export default Register