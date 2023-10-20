/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Brands brands={brands}></Brands>
      {/* About Section */}
      <div className="">
        <h1 className="text-4xl text-center font-bold mb-10">
          About Our Organaigation
        </h1>
        <div className="flex items-center gap-10">
          <div className="flex-1">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/N2bzWBK/download.png"
              alt=""
            />
          </div>
          <div className="flex-1">
            <p className="text-md text-[#312e2e] italic">
              Welcome to our brand shop, where sophistication meets style in
              every corner. Nestled in the heart of the city, our store is a
              haven for discerning shoppers seeking quality, innovation, and
              timeless elegance. As you step through our doors, you'll be
              greeted by a warm and inviting atmosphere that beckons you to
              explore. Our brand shop is meticulously designed, with sleek,
              modern aesthetics that create the perfect backdrop for our curated
              collection. The clean lines, soft lighting, and well-placed
              displays ensure that every item stands out, inviting you to
              discover the world of premium products we offer. Our shop is a
              treasure trove of meticulously selected merchandise, each piece
              representing the epitome of craftsmanship and artistry. From
              luxurious fashion apparel to exquisite accessories, homeware, and
              fragrance lines, we've carefully curated a selection that caters
              to a variety of tastes, ensuring there's something for everyone.
              Our knowledgeable and friendly staff is always on hand to assist
              you, whether you're seeking expert styling advice or have
              questions about our products. We take pride in delivering a
              personalized shopping experience, making your visit not just a
              transaction but a memorable journey into the world of our brand.
              In our brand shop, quality is not a compromise, but a commitment.
              We invite you to indulge your senses, explore our unique
              offerings, and elevate your lifestyle with the finest items that
              define our brand's legacy. Come and experience a world where
              luxury, elegance, and exclusivity converge, all under one roof. !
            </p>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="">
      
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <h1 className="text-4xl text-center font-bold mb-10">
          Contact US
        </h1>
      <p className="text-lg font-bold">We value your feedback and inquiries. Whether you have questions about our products, need assistance with an order, or want to collaborate with us, getting in touch is easy. Our dedicated customer support team is here to assist you. You can reach out to us via email, phone, or social media, and we'll respond promptly. Visit our website for more details or simply drop by our physical store to have a face-to-face conversation. We look forward to hearing from you and building a lasting connection. Your satisfaction and input are integral to our brand's growth and success. Contact us today and let's engage in a dialogue.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
          <span className="label-text font-bold text-lg">Full Name</span>
          </label>
          <input type="text" placeholder="Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
          <span className="label-text font-bold text-lg">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
          <span className="label-text font-bold text-lg">Message</span>
          </label>
          
          <textarea className="input input-bordered" placeholder="Message" name="area" cols="30" rows="10" required></textarea>
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Home;
