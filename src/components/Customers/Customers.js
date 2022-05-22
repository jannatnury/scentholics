import React from 'react';
import './Customers.css';
import img1 from '../../assets/image/lady01.png';
import img2 from '../../assets/image/lady02.png';
import img3 from '../../assets/image/lady03.png';

const Customers = () => {
    return (
        <div>
            <h2 className='title font-monospace mt-5 mb-3'>Our Clients Reviews</h2>
            <div id='carousel-section' className='container-fluid mb-4 align-content-center'>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="carousel-img" />
                            <div className="carousel-caption d-none d-md-block">
                            <h3>Ema Aurora</h3>
                            <p>Excellent service, my shipment arrived fast in perfect condition, at a great price.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="carousel-img" />
                            <div className="carousel-caption d-none d-md-block">
                            <h3>Anna Bella</h3>
                            <p>I tried 17 fragrance.Unbelievably good.I recommend with a closed eye.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="carousel-img" />
                            <div className="carousel-caption d-none d-md-block">
                            <h3>Rose Mary</h3>
                            <p>Timely delivery, original and guaranteed perfumes.Loved it.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Customers;