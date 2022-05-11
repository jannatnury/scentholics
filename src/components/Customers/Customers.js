import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Customers.css';

const Customers = () => {
    return (
        <div>
            <h2 className='title font-monospace mt-5 mb-3'>Our Clients Reviews</h2>
            <div id='carousel-section' className='container-fluid mb-4 align-content-center'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://media.istockphoto.com/photos/young-woman-with-clean-and-fresh-skin-presenting-perfume-picture-id1311499475?b=1&k=20&m=1311499475&s=170667a&w=0&h=MLy8oiQv6Fxo-LSpRiEJHXe5pU3WVRe7WveS5S-WpKc="
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Ema Aurora</h3>
                            <p>Excellent service, my shipment arrived fast in perfect condition, at a great price.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://media.istockphoto.com/photos/young-woman-applying-perfume-picture-id143176596?k=20&m=143176596&s=612x612&w=0&h=uOG3tPpzYB77EZX_A9IskXl49x2ErMEp3IlMS_Bqx28="
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Anna Bella</h3>
                            <p>I tried 17 fragrance.Unbelievably good.I recommend with a closed eye.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://media.istockphoto.com/photos/beautiful-young-woman-holding-perfume-bottle-and-looking-at-mirror-in-picture-id1026612272?k=20&m=1026612272&s=612x612&w=0&h=gySiveTBboe9zdnyQr1zEybQsUBlrtfYr5soY-G7Ym8="
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Rose Mary</h3>
                            <p>Timely delivery, original and guaranteed perfumes.Loved it.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
};

export default Customers;