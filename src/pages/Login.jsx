import {Button, Col, Container, Row} from "react-bootstrap";
import './login.style.scss'
import Logo from "../assets/pics/logo-white.svg";
import React from "react";
import Slider from "../components/Swiper/Slider";
import LoginInput from "../components/Formik/LoginInput";

const Login = () => {

    return (
        <Container dir={'rtl'} className={'d-flex align-items-center justify-content-center w-100'} style={{height:'100vh'}}>
            <div className={'m-3'} style={{width: '938px'}}>
                <Row className={'d-flex align-items-center justify-content-center'}>
                    <Col className={'login_block'} lg={11} md={6}>
                        <Row className={'ps-0'}>
                            <Col className={'p-4'} lg={5} md={12}>
                                <Row className={' mb-5'}>
                                    <a href={'#'}>
                                        <img  src={Logo} alt={"Logo"}/>
                                    </a>
                                </Row>
                                <Row>
                                    <h2>
                                        {'ورود به زرین‌پال'}
                                    </h2>
                                    <p className="title-init">برای استفاده از خدمات زرین‌پال، وارد حساب کاربری خود
                                        شوید.<span>در صورت نداشتن حساب کاربری</span><span
                                            className="link_color"> ثبت‌‌نام</span><span> کنید.</span></p>
                                </Row>
                                <Row className={'p-2'}>
                                    <LoginInput/>
                                </Row>
                                <Row className={'p-4 d-flex justify-content-end'}>
                                  <Button className={'login_button'}>
                                      {'تایید و ادامه'}
                                  </Button>
                                </Row>
                            </Col>
                            <Col lg={7} className={'ps-0 d-none d-lg-block'}>
                                <Slider/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}


export default Login;