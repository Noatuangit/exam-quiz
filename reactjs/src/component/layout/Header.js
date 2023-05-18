import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../action/actionLogin';
export default function Header() {
    const dataUser = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="header-total">
                <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 logo-header">
                    <Link as={Link} className="navbar-brand" to='/'>
                        <img className="logo-header" src="../logo-no-background.png" />
                    </Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link as={Link} className="nav-item nav-link active" to='/'>Trang chủ</Link>

                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Lớp
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                    </svg>
                                </a>
                                <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                                    <li> <Link as={Link} className="dropdown-item" to='/class/1' style={{ textDecoration: 'none' }}>Lớp 1</Link></li>
                                    <li> <Link as={Link} className="dropdown-item" to='/class/2' style={{ textDecoration: 'none' }}>Lớp 2</Link></li>
                                    <li> <Link as={Link} className="dropdown-item" to='/class/3' style={{ textDecoration: 'none' }}>Lớp 3</Link></li>
                                    <li> <Link as={Link} className="dropdown-item" to='/class/4' style={{ textDecoration: 'none' }}>Lớp 4</Link></li>
                                    <li> <Link as={Link} className="dropdown-item" to='/class/5' style={{ textDecoration: 'none' }}>Lớp 5</Link></li>
                                </div>
                            </div>
                            <a href="about.html" className="nav-item nav-link">Quản lý câu hỏi</a>
                            <a href="classes.html" className="nav-item nav-link">Thống kê</a>

                        </div>
                        {dataUser?.username === undefined &&
                            <React.Fragment>
                                <Link
                                    role="button"
                                    to='/login'
                                    as={Link}
                                    className="btn btn-danger rounded-pill d-lg-block login-home">
                                    Đăng nhập
                                </Link>
                                <Link
                                    role="button"
                                    to='/register'
                                    as={Link}
                                    className="btn btn-primary rounded-pill d-lg-block signin-home">
                                    Đăng Ký
                                </Link>
                            </React.Fragment>
                        }
                        {dataUser?.username !== undefined && <React.Fragment>
                            Chào mừng  {dataUser?.username ?? "Guest"}
                            <Link
                                className="btn btn-danger rounded-pill d-lg-block signin-home "
                                role="button"
                                to='/login'
                                onClick={() => dispatch(logout())}
                            >
                                Đăng xuất
                            </Link>
                        </React.Fragment>}
                    </div>
                </nav>
            </div>
        </div>
    )
}
