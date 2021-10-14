import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container '>
                <div className='d-flex justify-content-between py-5'>
                    <div className='w-50'>
                        <img width='150' src={img} alt="" />
                    </div>

                    <div className='d-flex justify-content-between w-50 text-white'>
                        <div className='d-flex flex-column '>
                            <Link to="/" className='text-white text-decoration-none py-1' href="">About online food</Link>
                            <Link to="/" className='text-white text-decoration-none py-1' href="">Read our blog</Link>
                            <Link to="/" className='text-white text-decoration-none py-1' href="">Sign up to deliver</Link>
                            <Link to="/" className='text-white text-decoration-none py-1' href="">Add your resturent</Link>
                        </div>
                        <div className='d-flex flex-column'>
                            <Link to="/" className='text-white text-decoration-none py-1' href="">About online food</Link>
                            <Link to="/" className='text-white text-decoration-none py-1' href="">Read our blog</Link>
                            <Link to="/" className='text-white text-decoration-none py-1' href="">Sign up to deliver</Link>
                            <Link to="/" className='text-white text-decoration-none py-1' href="">Add your resturent</Link>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between py-5'>
                    <div>
                        <small className='py-5 text-light'>Copyright &copy; 2021 online food</small>
                    </div>
                    <div className='gap-5 d-flex'>
                        <Link to="/" className='text-white text-decoration-none' href="">Privacy Policy</Link>
                        <Link to="/" className='text-white text-decoration-none'>Terms of use</Link>
                        <Link to="/" className='text-white text-decoration-none' href="">Pricing</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;