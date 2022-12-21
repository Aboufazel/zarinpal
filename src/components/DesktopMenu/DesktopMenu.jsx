import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import ZarinButton from "../ZarinButton/ZarinButton";
import {useState} from "react";
import '../header/header.stayle.scss'
import arrowDown from '../../assets/pics/arrow-down.svg'

const DesktopMenu = () => {
    const [display, setDisplay] = useState(false)
    const [proDisplay, setProDisplay] = useState(false)
    return (
        <Row>
            <Col className={'d-flex align-items-md-center justify-content-lg-end justify-content-md-center ms-auto'} xs={12} lg={9}>
                <Navbar style={{ display:"flex" ,position:'relative' ,alignItems:"center"}}>
                    <Container style={{fontFamily:'Yekan'}} className={'d-flex align-items-center justify-content-end m-0 p-0'}>
                        <Nav style={{fontSize:'14px'}}>
                            <Nav.Link  onMouseEnter={()=>setProDisplay(true)} onMouseLeave={()=>setProDisplay(false)} href="" style={{marginLeft:8 ,color:"#303030"}}>
                                <div>
                                    <span>{"محصولات"}</span>
                                    <span style={{marginRight:5}}>
                                        <img style={{width:'8px'}} src={arrowDown} alt={'icon'}/>
                                    </span>
                                    <div className={proDisplay ? 'd-flex' : 'd-none'}>
                                        <div className={'ps-4 product_subMenu'}>
                                            <Row>
                                                <Col>
                                                    <ul>
                                                        <li>
                                                            <p className={'mt-2 mb-4 d-flex flex-column'}>
                                                                {"درگاه پرداخت"}
                                                                <span>{'مهندسی شده برای فروش بیشتر'}</span>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className={'mt-2 mb-4 d-flex flex-column'}>
                                                                {"زرین لینک"}
                                                                <span>{"لینک پرداخت در شبکه اجتماعی"}</span>
                                                            </p>

                                                        </li>
                                                        <li>
                                                            <p className={'mt-2 mb-4 d-flex flex-column'}>
                                                                {"زرین پلاس"}
                                                                <span>{"ابزار هوشمند سوددهی"}</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </Col>
                                                <Col>
                                                    <ul>
                                                        <li>
                                                            <p className={'mt-2 mb-4 d-flex flex-column'}>
                                                                {"زرین کارت"}
                                                                <span>{"طلایی ترین کارت بانکی"}</span>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p className={'mt-2 mb-2 d-flex flex-column'}>
                                                                {"تسهیم"}
                                                                <span>{"درگاه پرداخت اشتراکی"}</span>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="" style={{marginLeft:8 ,color:"#303030"}}>
                                {"تعرفه ها"}
                            </Nav.Link>
                            <Nav.Link href="" style={{marginLeft:8 ,color:"#303030"}}>
                                {"توسعه دهندگان"}
                            </Nav.Link>
                            <Nav.Link href="" style={{marginLeft:8 ,color:"#303030"}}>
                                {"تماس با ما"}
                            </Nav.Link>
                            <Nav.Link onMouseEnter={()=>setDisplay(true)} onMouseLeave={()=>setDisplay(false)} href="" style={{marginLeft:8 ,color:"#303030"}}>
                                <div>
                                    <span>{"بیشتر"}</span>
                                    <span style={{marginRight:5}}>
                                        <img style={{width:'8px'}} src={arrowDown} alt={'icon'}/>
                                    </span>
                                    <div className={display ? 'd-flex' : 'd-none'}>
                                        <div className={'ps-4 more_subMenu'}>
                                            <ul>
                                                <li>
                                                    {"وبلاگ"}
                                                </li>
                                                <li>
                                                    {"دریافت شماره شبا"}
                                                </li>
                                                <li>
                                                    {"سوالات متداول"}
                                                </li>
                                                <li>
                                                    {"اپلیکیشن"}
                                                </li>
                                                <li>
                                                    {"زرین بین"}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Col>
            <Col lg={3} className={'d-none d-lg-flex align-items-lg-center justify-content-lg-center'}>
                <ZarinButton/>
            </Col>
        </Row>

    )
}

export default DesktopMenu