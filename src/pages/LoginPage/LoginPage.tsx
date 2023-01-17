import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../../components/common/Button/Button"
import InputField from "../../components/common/InputField/InputField"
import './LoginPage.scss'

interface ILoginCredentials {
  username: string;
  password: string;
}

interface ILoginErrors {
  username: string;
  password: string;
}

const LoginPage = () => {
  const initailLoginCredentials: ILoginCredentials = {
    username: '',
    password: '',
  }

  const [loginCredentials, setLoginCredentials] = useState<ILoginCredentials>(initailLoginCredentials);
  const [loginErrors, setLoginErrors] = useState<ILoginErrors>({
    username: '',
    password: '',
  });

  // Handlers
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials((previousCredentials: ILoginCredentials) => {
      return {
        ...previousCredentials,
        [e?.target?.name]: e?.target?.value
      }
    }
    )
  }

  const signInHandler = () => {

  }

  // Validators
  const usernameValidator = () => {
    if (loginCredentials.username.length < 5) {
      setLoginErrors((previousErrors: ILoginErrors) => ({ ...previousErrors, username: "Username must be of 5 Letters !" }))
    } else {
      setLoginErrors((previousErrors: ILoginErrors) => ({ ...previousErrors, username: '' }))
    }
  }

  const passwordValidator = () => {
    if (loginCredentials.password.length < 8) {
      setLoginErrors((prevErrors: ILoginErrors) => ({ ...prevErrors, password: "Password must be of 8 characters" }))
    } else {
      setLoginErrors((prevErrors: ILoginErrors) => ({ ...prevErrors, password: "" }))
    }
    // const lowercaseRegExp = /(?=.*?[a-z])/;
    // const uppercaseRegExp = /(?=.*?[A-Z])/;
    // const digitsRegExp = /(?=.*?[0-9])/;
    // const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    // const minLengthRegExp = /.{8,}/;
    // if (password.length === 0) {
    //   setLoginErrors((prevErrors) => ({ ...prevErrors, password: 'Password must not be empty' }))
    // } else if (!lowercaseRegExp.test(password)) {
    //   setLoginErrors((prevErrors) => ({ ...prevErrors, password: 'Password must have one Lowercase character' }))
    // } else if (!uppercaseRegExp.test(password)) {
    //   setLoginErrors((prevErrors) => ({ ...prevErrors, password: 'Password must have one Uppercase character' }))
    // } else if (!digitsRegExp.test(password)) {
    //   setLoginErrors((prevErrors) => ({ ...prevErrors, password: 'Password must have one Number' }))
    // } else if (!specialCharRegExp.test(password)) {
    //   setLoginErrors((prevErrors) => ({ ...prevErrors, password: 'Password must have one Special character' }))
    // } else if (!minLengthRegExp.test(password)) {
    //   setLoginErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be of minimum 8 characters' }))
    // } else {
    //   setLoginErrors((prevErrors) => ({ ...prevErrors, password: '' }))
    // }
  }

  return (
    <div className="login-page">
      <div className="login-items-container">
        <div className="login-heading-container">
          <h3 className="login-heading">Login</h3>
        </div>
        <div className="mb-2">
          <div className="mb-1">
            <label className="label">Username</label>
          </div>
          <InputField fullWidth placeholder="Username" type="text" value={loginCredentials.username} name="username" onChange={onChangeHandler} onBlur={usernameValidator} error={loginErrors.username} />
        </div>
        <div className="mb-2">
          <div className="mb-1">
            <label className="label">Password</label>
          </div>
          <InputField fullWidth placeholder="Password" type="text" value={loginCredentials.password} name="password" onChange={onChangeHandler} onBlur={passwordValidator} error={loginErrors.password} />
        </div>
        <div className="mb-2">
          <Button fullWidth disabled={loginCredentials.username.length < 5 || loginCredentials.password.length < 8} variant="success" onClick={signInHandler}>Sign In</Button>
        </div>
        <div className="mb-2">
          <div className="sign-up-text">Don't have an account? <Link to="signup" className="sign-up">Sign Up</Link></div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage