import {Button, Col, Container, Row} from "react-bootstrap";
import "./blueBox.style.scss"
import Home from '../../assets/pics/home.svg'

const BlueBox = () => {

    return (
        <Container dir={'rtl'}>
            <Row className={"blue_box_block"}>
                <Col className={'d-sm-flex text-sm-center justify-content-lg-start text-lg-start flex-column justify-content-center'} xs={12}
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
                        <Col xs={12} className={'d-flex flex-row mt-1 justify-content-lg-start justify-content-center gap-2'}>
                            <Button className={'register_btn'}>
                                {"ثبت نام"}
                            </Button>
                            <Button className={'login_btn'}>
                                {"ورود"}
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} className={'d-none d-lg-flex flex-column justify-content-center'}>
                    <img src={Home} alt={'home'}/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className={'arrow_block'}>
                   >
                </Col>
            </Row>

        </Container>)
}

export default BlueBox;