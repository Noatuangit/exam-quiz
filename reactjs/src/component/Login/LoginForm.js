import React, { useState } from 'react'
import { urlLogin } from '../url/urlTest'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../action/actionLogin';
import "./NghiaTH11Login.css"

export default function LoginForm() {
    const loginUrl = urlLogin;
    const [valid, setValid] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        event.preventDefault();
        let formData = Object.fromEntries(new FormData(event.target));
        axios.post(loginUrl, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            dispatch(login(resp.data));
            navigate("/");

        }).catch(error => {
            setValid("wrong login. try again")
        })

    }

    return (
        <div className="sign-in-htm">
            <form onSubmit={onSubmit}>
                <h2>Chào mừng trở lại !</h2><br />
                <div className="group">
                    <label for="user" className="label">Email</label>
                    <input id="user" type="text" className="input-login" name='username' />
                    <p style={{ margin: "0px 5px 10px 0px", color: 'red', fontSize: "15px" }} className="error-feedback"> &nbsp; validate</p>
                </div>
                <div className="group">
                    <label for="pass" className="label">Password</label>
                    <input id="pass" type="password" className="input-login" data-type="password" name='password' />
                </div>
                <p className='valid-login'>{valid}</p>
                <div className="group">
                    <input type="submit" className="button" value="Đăng Nhập" />
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                    <a href="#">Quên mật khẩu ?</a>
                </div>
            </form>
        </div>
    )
}
