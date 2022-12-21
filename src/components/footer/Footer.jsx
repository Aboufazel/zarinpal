import {Col, Container, Row} from "react-bootstrap";
import './footer.style.scss'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import insta from '../../assets/pics/social/instagram.svg'
import twit from '../../assets/pics/social/twitter.svg'
import apa from '../../assets/pics/social/aparat.svg'
import linkedin from '../../assets/pics/social/linkedin.svg'
import tel from '../../assets/pics/social/telegram.svg'
import enamad from '../../assets/pics/social/enamad-logo.png'

const Footer = () => {
    return (
        <Container fluid dir={'rtl'} className={'pt-5 footer_block'}>
            <div>
                <Row className={'d-md-none d-xxl-none d-lg-none d-block'}>
                    <Col>
                        <p>
                            {'پشتیبانی  ۲۴ ساعته، ۷ روز هفته'}
                        </p>
                        <span>{'شماره تماس:'}<span
                            className="phone-number"> ۴۱۲۳۹-۰۲۱</span></span>
                    </Col>
                </Row>
                <Row className={'d-md-none d-xxl-none d-lg-none d-block'}>
                    <Col>
                        <div className={'footer_support_button'}>
                            {'درخواست پشتیبانی'}
                            <FontAwesomeIcon style={{marginRight:8}} icon={faArrowLeft}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        <Col xs={6} md={3} lg={2}>
                            <p className={"footer_menu_fontsize"}>
                                {'محصولات'}
                            </p>
                            <ul>
                                <li>
                                    {"زرین لینک"}
                                </li>
                                <li>
                                    {"درگاه پرداخت اینترنتی"}
                                </li>
                                <li>
                                    {"زرین کارت"}
                                </li>
                                <li>
                                    {"تسهیم"}
                                </li>
                            </ul>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <p className={"footer_menu_fontsize"}>
                                {'آشنایی با زرین پال'}
                            </p>
                            <ul>
                                <li>
                                    {"تعرفه ها"}
                                </li>
                                <li>
                                    {"درباره ما"}
                                </li>
                                <li>
                                    {"سوالات متداول"}
                                </li>
                                <li>
                                    {"همکاری در فروش"}
                                </li>
                            </ul>
                        </Col>
                        <Col xs={6} md={3} lg={2}>
                            <p className={"footer_menu_fontsize"}>
                                {'ارتباط بیشتر'}
                            </p>
                            <ul>
                                <li>
                                    {"تماس با ما"}
                                </li>
                                <li>
                                    {"قوانین و مقررات"}
                                </li>
                                <li>
                                    {"حریم خصوصی"}
                                </li>
                            </ul>
                        </Col>

                        <Col xs={6} md={3} lg={2}>
                            <p className={"footer_menu_fontsize"}>
                                {'منابع'}
                            </p>
                            <ul>
                                <li>
                                    {"دریافت شماره شبا"}
                                </li>
                                <li>
                                    {"زرین بین"}
                                </li>
                                <li>
                                    {"توسعه دهندگان"}
                                </li>
                                <li>
                                    {"وبلاگ"}
                                </li>
                                <li>
                                    {"سنجش رضایت مندی"}
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} md={12} lg={4} xl={4} xxl={4} className={'d-flex flex-column align-items-md-start align-items-center'}>
                            <p>
                                {'زرین پال در شبکه های اجتماعی:'}
                            </p>
                            <Row className={'d-flex flex-column'}>
                                <Col className={'d-flex flex-row gap-3'}>
                                    <div className={'social_icon'}>
                                        <img src={insta} alt={'social'}/>
                                    </div>
                                    <div className={'social_icon'}>
                                        <img src={twit} alt={'social'}/>
                                    </div>
                                    <div className={'social_icon'}>
                                        <img src={tel} alt={'social'}/>
                                    </div>
                                    <div className={'social_icon'}>
                                        <img src={linkedin} alt={'social'}/>
                                    </div>
                                    <div className={'social_icon'}>
                                        <img src={apa} alt={'social'}/>
                                    </div>
                                </Col>
                                <Col className={'d-flex justify-content-center'}>
                                    <img className={'d-none mt-2 d-lg-block d-md-none enamad'} src={enamad} alt={'enamad'}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'d-flex flex-column mt-md-2 mb-5 mt-3 align-items-center justify-content-center'}>
                            <img className={'d-md-flex d-lg-none enamad'} src={enamad} alt={'enamad'}/>
                            <span style={{fontWeight:200 , fontSize:'14px'}}>© ‌‌زرین‌پال ۱۴۰۱-۱۳۸۹</span>
                        </Col>
                    </Row>
                </Row>
            </div>
        </Container>
    )
}


export default Footer;