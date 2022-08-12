import React from 'react'
import HeaderUser from '../../components/headerUser/HeaderUser'
import Footer from '../../components/footer/Footer'
import './receipt.css'
export default function Receipt() {
  const datas=[
    {
      id:1,
      code: "820394",
      name:"Khách sạn 1",
      img: "https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FXNWZRCKCS1_%2Ftmp%2Fplaytemp4900799243041517404%2FmultipartBody7810429729908973293asTemporaryFile?generation=1658530130929797&alt=media",
      room: "Phòng 1",
      price: "1.000.000",
      nhan:"Ngày 24 tháng 07",
      tra:"Ngày 25 tháng 07",
      amout: "2",
    }

  ]
  return (
    <div>
      <HeaderUser tk={0} ks={1} yt={0} />
      <div className="Content">
        {datas.map((data)=>{
          return(
            <div className="ContentItem">
              <div className="code">
              <span>Mã đơn hàng: {data.code}</span>
              </div>
              <div className="donHang">
                <div className="imgDon">
                  <img src={data.img} alt="avatar" className="imgg" />
                </div>
                <div className="infoAll">
                  <div className="infoDon">
                    <div className="titleDon">
                      <span>{data.name}</span>
                    </div>
                    <div className="namePhong">
                      <span>{data.room}</span>
                    </div>
                    <div className="soNguoi">
                      <span>{data.amout} người</span>
                    </div>

                  </div>
                  <div className="ngayNhan">
                    <span>Nhận phòng</span> <br/>
                    <span>{data.nhan}</span>
                  </div>
                  <div className="ngayTra">
                    <span>Trả phòng</span> <br/>
                    <span>{data.tra}</span>
                  </div>
                  <div className="giaPhong">
                    <span>Tổng tiền</span> <br/>
                    <span>{data.price}</span>
                    <div className="xacNhan">
                      <button>Chờ xác Nhận</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )}
      </div>
      <div className="homeContainer">
        <Footer />
      </div>
    </div>
  )
}
