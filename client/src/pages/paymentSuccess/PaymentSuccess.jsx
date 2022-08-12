import "./paymentSuccess.css";
export default function PaymentSuccess () 
{
    return  (
         <div >
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto mt-5">
                <div class="payment">
                    <div class="payment_header">
                    <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
                    </div>
                    <div class="content">
                    <h1>Thanh toán thành công!</h1>
                    <p>Cảm ơn quý khách đã đặt phòng ! Chúc quý khách có 1 chuyến nghỉ dưỡng đầy ý nghĩa</p>
                    <a href="/">Quay lại trang chủ</a>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        </div>
    )

}