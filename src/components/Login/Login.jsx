// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="whole">
            <div className='Login-Container'>
                <div className='Login-Header'>
                    <div className='Login-text'>Sign Up</div>
                    <div className='underline'></div>
                </div>
                <div className='Login-inputs'>
                    <div className='Login-input'>
                        <input type="text" placeholder='Username' />
                    </div>
                    <div className='Login-input'>
                        <input type="password" placeholder='Password' />
                    </div>
                    <select className="Login-input-dropdown">
                        <option value="Subdivision" selected>
                            Subdivision
                        </option>
                        <option value="Blocks">Blocks</option>
                        <option value="District">District</option>
                        <option value="Admin">Admin</option>
                    </select>

                </div>
                <div className="forgot-password">
                    Forgot Password? <span>Click Here!</span>
                </div>
                <div className='Login-submit'>
                    <div className="Login-submitt">Login</div>

                </div>

            </div>
        </div>
    )
}

export default Login