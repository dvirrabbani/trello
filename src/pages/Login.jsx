import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { Button } from "../cmps/Button"
import SvgIcon from "../cmps/SvgIcon"
import { useForm } from "../customHooks/useForm"
import { useNavigate } from "react-router"
import { login, loginWithGoogle } from "../store/user.actions"
import { DEMO_USER_CREDENTIALS } from "../demo/user"
import { userService } from "../services/user.service"

export function Login() {
  const navigate = useNavigate()
  const [fields, , handleChange, resetForm] = useForm(DEMO_USER_CREDENTIALS)
  const emailRef = useRef(null)

  useEffect(() => {
    onLoginWithGoogle()
    emailRef.current.focus()
    return () => resetForm()
  }, [])

  async function onLogin(ev) {
    ev.preventDefault()
    const user = await login(fields)
    if (user._id) {
      navigate("/board")
    }
  }

  const onLoginWithGoogle = async () => {
    try {
      const googleUser = await loginWithGoogle()
      if (googleUser._id) {
        navigate("/board")
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="login">
      <section className="login-card">
        <header>
          <SvgIcon iconName={"loginLogo"} size={"full"} />
          <h3>Log in to continue</h3>
        </header>
        <form onSubmit={onLogin}>
          <input
            name="email"
            type="email"
            className="input-text"
            placeholder="Enter your email"
            ref={emailRef}
            value={fields.email}
            onChange={handleChange}
          />
          <input name="password" type="password" className="input-text" value={fields.password} onChange={handleChange} />
          <Button className={"w-100 flex justify-center"} variant="primary">
            Continue
          </Button>
          {/* Google Login */}
        </form>
        <div className="external-login-header">Or continue with:</div>
        <button className="google-button" onClick={userService.openGoogleLoginWindow}>
          <SvgIcon iconName={"google"} size={"md"} />
          <span>Google</span>
        </button>
      </section>
    </div>
  )
}
