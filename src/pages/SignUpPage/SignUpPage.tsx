import { Link } from 'react-router-dom'
import Button from '../../components/common/Button/Button'
import InputField from '../../components/common/InputField/InputField'
import '../LoginPage/LoginPage.scss'


const SignUpPage = () => {
    return (
        <div className="login-page">
            <div className="login-items-container">
                <div className="login-heading-container">
                    <h3 className="login-heading">Sign Up</h3>
                </div>
                <div className="mb-2">
                    <div className="mb-1">
                        <label className="label">Username</label>
                    </div>
                    <InputField fullWidth placeholder="Username" type="text" name="username" />
                </div>
                <div className="mb-2">
                    <div className="mb-1">
                        <label className="label">Password</label>
                    </div>
                    <InputField fullWidth placeholder="Password" type="text" name="password" />
                </div>
                <div className="mb-2">
                    <Button fullWidth >Sign In</Button>
                </div>
                <div className="mb-2">
                    <div className="sign-up-text">Already Registered <Link to="/" className="sign-up">Login</Link></div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage