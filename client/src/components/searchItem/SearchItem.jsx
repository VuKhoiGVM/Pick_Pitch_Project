import { Link } from "react-router-dom";
import "./searchItem.css";

// truyền tham số item 
function SearchItem({ item }) {
  return (
    <div className="searchItem">
      <img src={item.photo[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} m cách trung tâm Thành Phố </span>
        <span className="siTaxiOp">Miễn phí taxi sân bay</span>
        <span className="siSubtitle">
          Khách sạn đầy đủ tiện nghỉ & an ninh 24/7
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Hủy phòng miễn phí  </span>
        <span className="siCancelOpSubtitle">
          Bạn có thể hủy sau,hãy chốt giá ưu đãi này ngay hôm nay!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">{item.cheapestPrice} VNĐ</span>
          <span className="siTaxOp">Đã bao gồm cả giá và thuế</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Chi tiết </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default  SearchItem;