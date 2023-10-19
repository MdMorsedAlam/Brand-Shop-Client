import { Link, useLoaderData } from "react-router-dom";
import ErrorProduct from "./AddProduct/ErrorProduct";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BrandProduct = () => {
  const loaderData = useLoaderData();

  if(loaderData.length>0){
    return (
        <div>
          <div>
          <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        loaderData.map(data=><SwiperSlide key={data._id}><img src={data.photo} alt="" /></SwiperSlide>)
      }
      
      ...
    </Swiper>
          </div>
          {/* Slider */}
          {/* Products */}
          <div className="grid grid-cols-2 gap-10 my-10">
          {loaderData?.map((item) =><div key={item._id} className="card bg-base-100 shadow-xl">
  <figure><img src={item.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
    </h2>
    <p>Price : {item.price}</p>
    <p>{item.des}</p>
    <div className="card-actions justify-end">
    <Link to={`/detailsproduct/${item.brand.toLowerCase()}/${item._id}`} className="btn btn-outline btn-info">Details</Link>
<Link to={`/updateproduct/${item.brand.toLowerCase()}/${item._id}`} className="btn btn-outline btn-success">Update</Link>
    </div>
  </div>
</div>)}
          
        </div>
        </div>
      );
  }else{
    return <ErrorProduct></ErrorProduct>
  }
  
};

export default BrandProduct;
