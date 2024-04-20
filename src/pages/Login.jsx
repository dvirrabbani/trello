import { useEffect, useRef } from "react"
import { Button } from "../cmps/Button"
import SvgIcon from "../cmps/SvgIcon"

export function Login() {
  const emailRef = useRef(null)

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  return (
    <div className="login">
      <section className="login-card">
        <header>
          <SvgIcon iconName={"loginLogo"} size={"full"} />
          <h3>Log in to continue</h3>
        </header>
        <form>
          <input
            ref={emailRef}
            type="email"
            className="input-text"
            placeholder="Enter your email"
          />
          <Button className={"w-100 flex justify-center"} variant="primary">
            Continue
          </Button>
        </form>
      </section>
    </div>
  )
}
