import React from 'react'
import HeroSlider, {Slide} from 'hero-slider'
// import img1 from "../img1.jpg"
// import img2 from "../img2.jpg"
// import img3 from "../img3.jpg"
// import img4 from "../img4.jpg"


const BasicSlider = () => {
    // let imageFirst= "https://ecomzy-frontend.vercel.app/assets/combo--34M0dXX.jpg";
    // let imageSecond= "https://ecomzy-frontend.vercel.app/assets/coat-BF7qn274.jpg";
    // let imageThird= "https://ecomzy-frontend.vercel.app/assets/open-wWKSMTL_.jpg";
    // let imageFourth= "https://ecomzy-frontend.vercel.app/assets/girl-C0TGDrHW.jpg";\
    const imageFirst= "../img1.png";
    const imageSecond= "../img2.png";
    const imageThird= "../img3.png";
    const imageFourth= "../img4.png";
  return (
    <HeroSlider 
    slidingAnimation="left_to_right" 
    orientation="horizontal"
    initialSlide={1}
    onBeforeChange={(previousSlide,nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
    onChange={nextSlide => console.log("onChange", nextSlide)}
    onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
    style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)",
    }}
    settings={{
        slidingDuration: 250,
        slidingDelay:100,
        shouldAutoplay: true,
        shouldDisplayButtons:true,
        autoplayDuration: 5000,
        height: "100vh"
    }}
    >
       <Slide
        background={{
            backgroundImage:imageFirst,
            backgroundAttachment: "fixed"
        }}
       />
       <Slide
        background={{
            backgroundImage:imageSecond,
            backgroundAttachment: "fixed"
        }}
       />
       <Slide
        background={{
            backgroundImage : imageThird ,
            backgroundAttachment: "fixed"
        }}
       />
       <Slide
        background={{
            backgroundImage:imageFourth,
            backgroundAttachment: "fixed"
        }}
       />
    </HeroSlider>
  )
}

export default BasicSlider
