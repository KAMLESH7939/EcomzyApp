import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'


const slideImages = [
    {
        url: 'https://ecomzy-frontend.vercel.app/assets/open-wWKSMTL_.jpg',
        caption: 'First Slide'
    },
    {
        url: 'https://ecomzy-frontend.vercel.app/assets/combo--34M0dXX.jpg',
        caption: 'Second Slide'
    },
    {
        url: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Third Slide'
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1700824490100-f82146b2441f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Fourth Slide'
    },
    {
        url: 'https://ecomzy-frontend.vercel.app/assets/coat-BF7qn274.jpg',
        caption: 'Fifth Slide'
    },
    {
        url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Sixth Slide'
    },
    {
        url: 'https://images.unsplash.com/photo-1493146146946-e907f69cdf23?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Seventh Slide'
    }
];
const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "680px",
    backgroundSize: "cover",
}


const ImageSlider = () => {


    return (
        <div className='slide-container w-full'>
            <Fade>
                {
                    slideImages.map((image, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}>
                            </div>
                        </div>
                    ))


                }
            </Fade>
        </div>
    )
}

export default ImageSlider
