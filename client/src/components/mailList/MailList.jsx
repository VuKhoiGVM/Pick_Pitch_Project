import './mailList.css'
export default function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle">
            Tiết kiệm thời gian, tiết kiệm tiền!
        </h1>
        <span className="mailDes">Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</span>
        <div className="mailInputContainer">
            <input text="text" className="mailInput" placeholder="Nhập email của bạn" />
            <button>Đăng ký</button>
        </div>
    </div>
  )
}
