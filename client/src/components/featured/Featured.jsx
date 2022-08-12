import useFetch from "../../hook/useFetch";
import "./featured.css";
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Featured = () => {
  console.log("Featured")
  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByCity?cities=madrid,london") // take data from URL
  const location=[
    {
      id:1,
      city:"Đà Nẵng",
      img: "https://www.vietnambooking.com/wp-content/uploads/2019/10/ve-may-bay-ha-noi-di-hoi-an-15102019-2.png",
      amount: data[0]
    },
    {
      id:2,
      city:"Hà Nội",
      img: "https://bigvn.blog/dp/wp-content/uploads/2018/07/ha-noi-co-bao-nhieu-quan8-1.jpg",
      amount: data[1]
    },
    {
      id:3,
      city:"Hồ Chí Minh",
      img: "https://maisonoffice.vn/wp-content/uploads/2018/03/33-toa-nha-cao-nhat-viet-nam-1.jpg",
      amount: data[2]
    }

  ]
  console.log(data[0])
  return (
    <div className="featured">
          { loading ? ("Loading please wait...") : (
            <>
            <Swiper
                modules={[Navigation, Thumbs]}
                speed={1300}
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={3}
                
                navigation={true}

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
            {location.map(item=>{
              return(
                <SwiperSlide className="featuredItem" key={item.id}>
                    <img src={item.img} alt="" className="featuredImg"/>
                    <div className="featuredInfo">
                        <h1>{item.city}</h1>
                        <h2>{item.amount} khách sạn</h2>
                    </div>
                </SwiperSlide>
            )
          })}
          </Swiper>
          {/* <div className="featuredItem">
            <img
              src="https://www.vietnambooking.com/wp-content/uploads/2019/10/ve-may-bay-ha-noi-di-hoi-an-15102019-2.png"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Đà Nẵng</h1>  
              <h2>{data[0]}  chỗ nghỉ</h2>
            </div>
          </div>
          
          <div className="featuredItem">
            <img
              src="https://bigvn.blog/dp/wp-content/uploads/2018/07/ha-noi-co-bao-nhieu-quan8-1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hà Nội</h1>
              <h2>{data[1]} chỗ nghỉ </h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://maisonoffice.vn/wp-content/uploads/2018/03/33-toa-nha-cao-nhat-viet-nam-1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sài Gòn</h1>
              <h2>{data[2]}  chỗ nghỉ</h2>
            </div> 
          </div>*/}
          </>
          )
      }
      
    </div>
  );
};

export default Featured;
