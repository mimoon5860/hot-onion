import React from 'react';
import './Home.css';
import img1 from '../../img/Image/adult-blur-blurred-background-687824.png';
import img2 from '../../img/Image/chef-cook-food-33614.png';
import img3 from '../../img/Image/architecture-building-city-2047397.png';
import FoodItem from './FoodItem/FoodItem';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="body-header d-flex flex-column align-items-center justify-content-center">
                <h1>Best Food Waiting For You</h1>
                <div className='rounded-pill bg-white mt-4'>
                    <input className='py-2 px-4 border-0 search-input' placeholder='Search Food items' type="text" />
                    <button className='search-btn py-2 px-4 rounded-pill text-white'>Search</button>
                </div>
            </div >
            <div>
                <FoodItem></FoodItem>
            </div>
            <div className='container'>
                <div className='w-50'>
                    <h2>Why You choose us?</h2>
                    <p className='fw-bold'>All purchase of Products and all Orders from HungryNaki Store and Medicine shall also be subject to this User Agreement. By accepting this Agreement, you also accept all additional policy.</p>
                </div>
                <div className='row mb-4'>
                    <div className='col-4 py-3 d-flex rounded-3 card-hover flex-column align-items-center'>
                        <img className='img-fluid' src={img1} alt="" />
                        <div className='d-flex mt-3'>
                            <div className='m-3'>
                                <i className="p-3 rounded-circle bg-warning text-white fas fa-bus"></i>
                            </div>
                            <div>
                                <h4>Fast Delivery</h4>
                                <p>keep your systems in sync with automated web hook based nitifications each time link is paid and how we dream about our future.</p>
                                <Link to="/" >See more <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 py-3 d-flex rounded-3 card-hover flex-column align-items-center'>
                        <img className='img-fluid' src={img2} alt="" />
                        <div className='d-flex mt-3'>
                            <div className='m-3'>
                                <i className="p-3 rounded-circle bg-warning text-white fas fa-bus"></i>
                            </div>
                            <div>
                                <h4>Fast Delivery</h4>
                                <p>keep your systems in sync with automated web hook based nitifications each time link is paid and how we dream about our future.</p>
                                <Link to="/" >See more <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 py-3 d-flex rounded-3 card-hover flex-column align-items-center'>
                        <img className='img-fluid' src={img3} alt="" />
                        <div className='d-flex mt-3'>
                            <div className='m-3'>
                                <i className="p-3 rounded-circle bg-warning text-white fas fa-bus"></i>
                            </div>
                            <div>
                                <h4>Fast Delivery</h4>
                                <p>keep your systems in sync with automated web hook based nitifications each time link is paid and how we dream about our future.</p>
                                <Link to="/" >See more <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;