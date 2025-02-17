import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product';
import Footer from '../Components/Footer';
// import BasicSlider from '../Components/BasicSlider.js';
import ImageSlider from '../Components/ImageSlider.js';
const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    async function fetchProductData() {
        setLoading(true);

        try {
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);

        }
        catch (error) {
            console.log("err hogaya");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div>
            {
                loading ? (<Spinner />) :
                    posts.length > 0 ?
                        (<div>

                            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-light font-serif mt-8'>Featured Products</h1>

                            <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl pr-4 pb-2 pt-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                                {
                                    posts.map((post) => {
                                        return (
                                            <Product key={post.id} post={post} />
                                        )
                                    })
                                }
                            </div>
                        </div>)
                        :
                        <div className='flex justify-center items-center '>
                            <p>No Data Found</p>
                        </div>
            }
            <div className='w-full mt-6 mb-6 '>
                <ImageSlider />
            </div>

            <Footer />
        </div>
    );
};

export default Home

