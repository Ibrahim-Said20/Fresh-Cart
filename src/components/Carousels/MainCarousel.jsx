import Slider from "react-slick";
import img_1 from '../../assets/images/slider-image-1.jpeg'
import img_2 from '../../assets/images/slider-image-2.jpeg'
import img_3 from '../../assets/images/slider-image-3.jpeg'
import img_4 from '../../assets/images/grocery-banner-2.jpeg'
import img_5 from '../../assets/images/grocery-banner.png'

function MainCarousel() {
  const settings = {
    dots: false,
    infinite: false,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4500,

  };
  
  return (
    <div className="grid md:grid-cols-12">
      <div className="md:col-span-8  bg-green-500">
      <Slider {...settings}>
      <img className="h-[400px] object-cover" src={img_4}/>
      <img className="h-[400px] object-cover" src={img_5}/>
      <img className="h-[400px] object-cover" src={img_1}/>


      </Slider>
      </div>
      <div className="md:col-span-4  bg-sky-400">
      <img className="h-[200px] w-full object-cover" src={img_2}/>
      <img className="h-[200px] w-full object-cover" src={img_3}/>
      </div>
    
    </div>
  );
}

export default MainCarousel;
