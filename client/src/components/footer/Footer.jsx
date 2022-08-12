import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className="footer">
        <span className="logo">Book4Fun.com</span>
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Các quốc gia</li>
                <li className="fListItem">Khu vực thành phố</li>
                <li className="fListItem">Quận</li>
                <li className="fListItem">Sân bay</li>
                <li className="fListItem">Khách sạn</li>
                <li className="fListItem">Địa điểm được quan tâm</li>
                <div className="imgCheck">
                <li className="fListItem"><img src="https://staticproxy.mytourcdn.com/0x0,q90/themes/images/logo-dathongbao-bocongthuong-w165.png"/></li>
                <li className="fListItem"><img src="https://staticproxy.mytourcdn.com/0x0,q90/themes/images/logo-congthuong-w165.png"/></li>
                </div>
            </ul>
            <ul className="fList">
                <li className="fListItem">Những chỗ nghỉ độc đáo</li>
                <li className="fListItem">Tất cả các điểm đến</li>
                <li className="fListItem">Khám phá</li>
                <li className="fListItem">Đánh giá của khách</li>
                <li className="fListItem">Các bài viết</li>
                <li className="fListItem">Ưu đãi theo mùa và dịp lễ</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Các câu hỏi thường gặp về virus corona (COVID-19)</li>
                <li className="fListItem">Về Book4Fun.com</li>
                <li className="fListItem">Dịch vụ khách hàng</li>
                <li className="fListItem">Trợ giúp đối tác</li>
                <li className="fListItem">Điều khoản và điều kiện</li>
                <li className="fListItem">Tranh chấp đối tác</li>
                <li className="fListItem">Chúng tôi hoạt động như thế nào</li>
                <li className="fListItem">Liên hệ công ty</li>

            </ul>
        </div>
        <div className="fCopyright">Copyright © 2020 Book4Fun.com. All rights reserved.</div>
    </div>
  )
}
