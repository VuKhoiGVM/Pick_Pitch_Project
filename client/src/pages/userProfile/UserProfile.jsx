import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import './userProfile.css'
import Footer from '../../components/footer/Footer'
import HeaderUser from '../../components/headerUser/HeaderUser'
export default function UserProfile() {
    return (
        <div>
            <HeaderUser tk={1} ks={0} yt={0} />
            <div className="functionItemContent">
                <div className="functionItemContentItem">
                    <div className="contentItem">
                        <div className="avatarUser">
                            <img
                                src="https://laban.edu.vn/wp-content/uploads/2021/01/Profile_avatar_placeholder_large.png"
                                alt="avatar"
                                className="avatarUserr"
                            />
                        </div>
                        <div className="infoUser">
                            <input className="inputUser" type="text" placeholder="Họ tên" />
                            <input className="inputUser" type="text" placeholder="Email" />
                            <input className="inputUser" type="text" placeholder="Số điện thoại" />
                            <input className="inputUser" type="text" placeholder="Địa chỉ" />
                            <div className="Save">
                                <button className="saveUser">Lưu lại</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeContainer">
                <Footer/>
            </div>
        </div>
           
    )
}
