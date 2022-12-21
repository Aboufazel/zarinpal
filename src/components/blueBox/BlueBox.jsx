import {Button, Col, Container, Row} from "react-bootstrap";
import "./blueBox.style.scss"
import Home from '../../assets/pics/home.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import arrowDown from '../../assets/pics/arrow-down.svg'

const BlueBox = () => {

    return (
        <Container fluid className={'m-0 p-0 '} dir={'rtl'}>

            <Row className={"m-0 p-0 blue_box_block"}>
                <Row className={'m-0 p-0 cover'}>
                    <Col
                        className={'custom_padding d-xxl-flex justify-content-xxl-center d-sm-flex text-sm-center justify-content-lg-start text-lg-start flex-column justify-content-center'}
                        xs={12}
                        lg={6}>
                        <div>
                   <span>
                    {"بیش از ۱۲ سال"}
                    </span>
                        </div>
                        <div>
                <span>
                    {"انتخاب مطمئنِ کسب و کارهای آنلاین"}
                </span>
                        </div>
                        <div className={'mt-1 text-center text-lg-start'}>
                            <p>
                                {"زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند."}
                            </p>
                        </div>
                        <Row>
                            <Col xs={12}
                                 className={'d-flex flex-row mt-1 justify-content-lg-start justify-content-center gap-2'}>
                                <Button href={'/login'} className={'register_btn'}>
                                    {"ثبت نام"}
                                </Button>
                                <Button href={'/login'} className={'login_btn'}>
                                    {"ورود"}
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className={'custom_padding d-none d-lg-flex flex-column justify-content-center'}>
                        <img src={Home} alt={'home'}/>
                    </Col>
                </Row>
            </Row>
            <Row>
                <a href={'#first_block'}>
                    <Col xs={12} className={'arrow_block'}>
                        <img style={{width:'18px' , height:'18px' , marginTop:20}} src={arrowDown} alt={'arrow'}/>
                    </Col>
                </a>
            </Row>

        </Container>)
}

export default BlueBox;