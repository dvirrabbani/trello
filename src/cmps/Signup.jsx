import { useEffect } from "react"
import { Button } from "../cmps/Button"
import SvgIcon from "../cmps/SvgIcon"
import { useForm } from "../customHooks/useForm"
import { useNavigate } from "react-router"
import { signup } from "../store/user.actions"

export function Signup() {
  const navigate = useNavigate()
  const [fields, , handleChange, resetForm] = useForm({
    email: "",
    username: "",
    fullName: "",
    imgUrl: "",
    password: "",
  })

  useEffect(() => {
    return () => resetForm()
  }, [])

  async function onSignup(ev) {
    ev.preventDefault()
    const user = await signup(fields)
    if (user._id) {
      navigate("/board")
    }
  }
  return (
    <div className="signup">
      <section className="signup-card">
        <header>
          <SvgIcon iconName={"loginLogo"} size={"full"} />
          <h3>Sign up to continue</h3>
        </header>
        <form onSubmit={onSignup}>
          <input
            name="email"
            type="email"
            className="input-text"
            placeholder="Email"
            required={true}
            value={fields.email}
            onChange={handleChange}
          />
          <input
            name="username"
            type="text"
            className="input-text"
            placeholder="User name"
            required={true}
            value={fields.username}
            onChange={handleChange}
          />
          <input
            name="fullName"
            type="text"
            className="input-text"
            placeholder="Full name"
            required={true}
            value={fields.fullName}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            className="input-text"
            placeholder="Password"
            required={true}
            value={fields.password}
            onChange={handleChange}
          />
          <Button className={"w-100 flex justify-center"} variant="primary">
            Sign up
          </Button>
        </form>
      </section>
    </div>
  )
}
