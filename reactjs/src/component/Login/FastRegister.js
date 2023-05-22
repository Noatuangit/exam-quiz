import React from 'react'
import "./NghiaTH11Login.css"
import { urlRegister } from '../url/urlTest';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../action/actionLogin';
export default function FastRegister() {
    let register = urlRegister;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        event.preventDefault();
        let formData = Object.fromEntries(new FormData(event.target));
        axios.post(register, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => {
            dispatch(login(resp.data));
            navigate("/");
        });
    }
    return (
        <div>
            <div className='login-body'>
                <div className='login-wrap'>
                    <div className="login-html">
                        <input id="tab-2" type="radio" name="tab" className="sign-up" checked />
                        <label for="tab-2" className="tab">Đăng ký nhanh</label>
                        <div className="login-form">
                            <div className="sign-up-htm">
                                <form onSubmit={onSubmit}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div className="group" style={{ width: '45%' }}>
                                            <label htmlFor="user" className="label">Tên phụ huynh</label>
                                            <input id="user" type="text" className="input-login" name='parentName' />
                                            <p style={{ margin: "0px", color: 'red', fontSize: "15px" }} className="error-feedback"> &nbsp; validate</p>
                                        </div>
                                        <div style={{ width: '50%' }} className="group">
                                            <label htmlFor="text" className="label">Tên học sinh</label>
                                            <input type="text" className="input-login" name='childrenName' />
                                            <p style={{ margin: "0px 5px 10px 0px", color: 'red', fontSize: "15px" }} className="error-feedback"> &nbsp; validate</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div style={{ width: '40%' }} className="group">
                                            <label htmlFor="text" className="label">Số điện thoại</label>
                                            <input type="text" className="input-login" name='phone' />
                                            <p style={{ margin: "0px 5px 10px 0px", color: 'red', fontSize: "15px" }} className="error-feedback"> &nbsp; validate</p>
                                        </div>
                                        <div style={{ width: '55%' }} className="group">
                                            <label htmlFor="pass" className="label">Email</label>
                                            <input id="pass" type="text" className="input-login" name='email' />
                                            <p style={{ margin: "0px 5px 10px 0px", color: 'red', fontSize: "15px" }} className="error-feedback"> &nbsp; validate</p>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Mật khẩu</label>
                                        <input id="pass" type="password" className="input-login" data-type="password" name='password' />
                                        <p style={{ margin: "0px 5px 10px 0px", color: 'red', fontSize: "15px" }} className="error-feedback"> &nbsp; validate</p>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="pass" className="label">Nhập lại mật khẩu</label>
                                        <input id="pass" type="password" className="input-login" name='confirmPassword' />
                                        <p style={{ margin: "0px 5px 10px 0px", color: 'red', fontSize: "15px" }} className="error-feedback"> &nbsp; validate</p>
                                    </div>
                                    <div className="group">
                                        <input type="submit" className="button" value="Sign Up" />
                                    </div>
                                    <div className="hr"></div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
