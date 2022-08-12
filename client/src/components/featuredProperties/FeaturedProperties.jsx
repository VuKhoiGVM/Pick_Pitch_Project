import "./featuredProperties.css";
import useFetch from "../../hook/useFetch";
const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("http://localhost:8800/api/hotels?featured=true&limit=4");
  return (
    <div className="fp">
      {loading?"Loading":<>
      {data.map(item=>(
      <div className="fpItem" key={item._id}>
       
        <img
          // src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/88905224.jpg?k=c8267f8981ea21b656ac1589b6fc78b0711261c14d237c4d326a404446111254&o=&hp=1"
          src={item.photo[1]}
          alt=""
          className="fpImg"
          />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">{item.cheapPrice}</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>}
      </div>
       ))
       }
      </>}
    </div>
  );
};

export default FeaturedProperties;
