import React from 'react'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import './headeruser.css'
import { Link } from 'react-router-dom';
export default function HeaderUser({tk,ks,yt}) 
{
    let active1="functionItemTitleContent";
    let active2="functionItemTitleContent";
    let active3="functionItemTitleContent";
    if(tk===1){
        active1="functionItemTitleContent active";
    }
    if(ks===1){
        active2="functionItemTitleContent active";
    }
    if(yt===1){
        active3="functionItemTitleContent active";
    }
    return (
        <div>
            <Header />
            <div className="accountContainer">
                <div className="accountContent">
                    <div className="homeTitle">
                        <span className="titleContent">Trang chủ <FontAwesomeIcon icon={faCaretRight} className="caretRight" />Tài khoản </span>
                        <span className="titleAccount">Tài khoản</span>
                    </div>
                </div>
                <div className="function">
                    <div className="functionItem">
                        <div className="functionItemTitle">
                            <Link to="/tai-khoan"><button className={active1}>Quản lý tài khoản</button></Link>
                            <Link to="/tai-khoan/don-phong"><button className={active2}>Đơn phòng</button></Link>
                            <button className="functionItemTitleContent">Khách sạn yêu thích</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
