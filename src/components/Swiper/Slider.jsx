import React from "react";
import slide1 from '../../assets/pics/instantPayout.jpg'
import slide2 from '../../assets/pics/invoice.jpg'
import {Carousel} from "react-bootstrap";

const Slider = () => {

    return (
        <>
            <Carousel  controls={false} style={{marginLeft:0 , paddingLeft:0}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        style={{borderStartEndRadius:10 , borderEndEndRadius:10}}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        style={{borderStartEndRadius:10 , borderEndEndRadius:10}}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}


export default Slider;