import { Link, useLoaderData } from "react-router-dom";
import ErrorProduct from "./AddProduct/ErrorProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  EffectFade,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
// import { useState } from "react";

const BrandProduct = () => {
  const loaderData = useLoaderData();




  // Catch Rating value

  



  if (loaderData.length > 0) {
    return (
      <div>
        <div>
          <Swiper
            effect={"fade"}
            navigation={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[EffectFade, Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {loaderData.slice(0, 4).map((data) => (
              <SwiperSlide key={data._id}>
                <div className="h-[450px]">
                  <img className="h-full w-full" src={data.photo} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Slider */}
        {/* Products */}
        <div className="grid grid-cols-2 gap-10 my-10">
          {loaderData?.map((item) => (
            <div key={item._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full h-[350px]"
                  src={item.photo}
                  alt={item.photo}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name : {item.name}</h2>
                <p className="text-lg font-semibold">Price : {item.price}</p>
                <p className="text-lg font-semibold flex items-center">Rating : <Rating
      style={{ maxWidth: 100,}}
      value={item.rating}
      readOnly
    /><span> ({item.rating} views)</span></p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/detailsproduct/${item.brand.toLowerCase()}/${
                      item._id
                    }`}
                    className="btn btn-outline btn-info"
                  >
                    Details
                  </Link>
                  <Link
                    to={`/updateproduct/${item.brand.toLowerCase()}/${
                      item._id
                    }`}
                    className="btn btn-outline btn-success"
                  >
                    Update
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <ErrorProduct></ErrorProduct>;
  }
};

export default BrandProduct;
