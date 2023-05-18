import React from 'react'
import "./NghiaTH11Login.css"
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Login() {


    return (
        <div className='login-body'>
            <div className='login-wrap'>
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
                    <label for="tab-1" className="tab">Đăng nhập</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label for="tab-2" className="tab">Đăng ký</label>
                    <div className="login-form">
                        <LoginForm />
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

