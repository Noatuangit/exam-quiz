import React from 'react'
import '../User/EditProfileStyle.css'
import rightBg from '../../images/v978-background-02.jpg'

const EditProfile = () => {
    return (
        <div className="container DatHD7">
            <br />
            <br />
            <div className="row DatHD7" id="main" style={{
                backgroundColor: '#94D6C2', width: "28rem",
                height: "42rem",
            }}>
                <div className="col-md-4 well DatHD7" id="leftPanel DatHD7" style={{ display: 'contents' }}>
                    <div className="row DatHD7">
                        <div className="col-md-12 DatHD7">
                            <div style={{
                                padding: "3rem",
                                paddingTop: "10rem",
                            }}>
                                <img
                                    src="https://www.clipartmax.com/png/middle/107-1070836_healthful-price-black-nike-kyrie-2-numerous-package-avatar-kids-girl.png"
                                    alt="Texto Alternativo"
                                    className="img-circle img-thumbnail DatHD7"
                                    style={{ borderRadius: '50%' }}
                                />
                                <h2>Ảnh đại diện</h2>
                                <div className="btn-group DatHD7" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <label htmlFor="profile-picture">Chọn ảnh </label>
                                    <input type="file" id="profile-picture" className="btn btn-warning DatHD7" style={{ width: "20rem" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-8 well DatHD7" id="rightPanel DatHD7" style={{ backgroundImage: `url(${rightBg})`, marginLeft: '1rem', backgroundSize: '100%' }}>
                <div className="row DatHD7">
                    <div className="col-md-12 DatHD7" style={{
                        marginTop: "7rem",
                        padding: "3rem",
                    }}>
                        <form role="form">
                            <h2>
                                Thay đổi thông tin cá nhân.<small>thật là dễ</small>
                            </h2>
                            <hr className="colorgraph DatHD7" />
                            <div className="row DatHD7">
                                <div className="col-xs-12 col-sm-6 col-md-6 DatHD7">
                                    <label htmlFor="name_of_parent">Tên bố mẹ</label>
                                    <div className="form-group DatHD7">
                                        <input
                                            type="text"
                                            name="name_of_parent"
                                            id="name_of_parent"
                                            className="form-control input-lg DatHD7"
                                            placeholder="Tên bố mẹ"
                                            tabIndex="1"
                                        />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 DatHD7">
                                    <label htmlFor="name_of_student">Tên của bé</label>
                                    <div className="form-group DatHD7">
                                        <input
                                            type="text"
                                            name="name_of_student"
                                            id="name_of_student"
                                            className="form-control input-lg DatHD7"
                                            placeholder="Tên của bé"
                                            tabIndex="2"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email">Địa chỉ email</label>
                                <div className="form-group DatHD7">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control input-lg DatHD7"
                                        placeholder="Địa chỉ email"
                                        tabIndex="4"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone">Số điện thoại</label>
                                <div className="form-group DatHD7">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        className="form-control input-lg DatHD7"
                                        placeholder="Số điện thoại"
                                        tabIndex="4"
                                    />
                                </div>
                            </div>
                            <hr className="colorgraph DatHD7" />
                            <div className="row DatHD7">
                                <div className="col-xs-12 col-md-6 DatHD7"></div>
                                <div className="col-xs-12 col-md-6 DatHD7">
                                    <a href="#" className="btn btn-success btn-block btn-lg DatHD7">
                                        Lưu
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
