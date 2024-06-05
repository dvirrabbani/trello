import { useEffect, useRef } from "react"
import { Button } from "../cmps/Button"
import SvgIcon from "../cmps/SvgIcon"
import { userService } from "../services/user.service"
import { useForm } from "../customHooks/useForm"
import { useNavigate } from "react-router"

export function Login() {
  const navigate = useNavigate()
  const [fields, , handleChange, resetForm] = useForm({
    email: "taltarablus@gmail.com",
    password: "Tal Tarablus",
  })
  const emailRef = useRef(null)

  useEffect(() => {
    emailRef.current.focus()
    return () => resetForm()
  }, [])

  async function onLogin(ev) {
    ev.preventDefault()
    const user = await userService.login(fields)
    if (user._id) {
      navigate("/board")
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
        </form>
      </section>
    </div>
  )
}
