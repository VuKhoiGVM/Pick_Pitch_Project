import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import {faUser,faCaretDown} from '@fortawesome/free-solid-svg-icons';
import './profile.css';
export default function Profile({user}) {
    const logout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }
    const [open, setOpen] = useState(false);
    let name='menu';
    if(open){
        name='menu active';
    }
  return (
    <div className="action">
      <div className="profile" onClick={()=>setOpen(!open)}>
        <img src="https://laban.edu.vn/wp-content/uploads/2021/01/Profile_avatar_placeholder_large.png"/>
      </div>
        <div onClick={()=>setOpen(!open)} className="nameUser">
          <span >{user}</span>
          <FontAwesomeIcon icon={faCaretDown} className="caretdownIcon"/>
        </div>
      <div className={name}>
        <ul>
          <li><a href="/tai-khoan">Tài khoản</a></li>
          <li><a href="/tai-khoan/khach-san-yeu-thich">Yêu thích</a></li>
          <li><a href="/tai-khoan/don-phong">Đơn phòng</a></li>
          <li><a href="#" onClick={logout}>Đăng xuất</a></li>
        </ul>
      </div>
    </div>
  )
}

