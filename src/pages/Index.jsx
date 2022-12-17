import {Col, Container, Offcanvas, Row} from "react-bootstrap";
import Logo from "../assets/pics/logo-white.svg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import "./pageStayles.scss"
import {useState} from "react";

const Index = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <Container dir={"rtl"}>
            <Row className={'menu_Block'}>
                <Offcanvas placement={"top"} show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                         <Row className={'menu_Block'}>
                             <Col xs={12}>
                                 <ul>
                                     <li>{"تعرفه‌ها"}</li>
                                     <li>{"اپلیکیشن"}</li>
                                     <li className={'divider'}></li>
                                     <li>{"سوالات متداول"}</li>
                                     <li>{"محصولات"}</li>
                                     <li>{"تماس با ما"}</li>
                                 </ul>
                             </Col>
                             <Row className={'zarin_block'}>
                                 <Col xs={7}>
                                     <div className={'zarin_btn'}>
                                         {"زرین‌پال من"}
                                         <FontAwesomeIcon icon={faArrowLeft}/>
                                     </div>
                                 </Col>
                             </Row>
                         </Row>
                </Offcanvas>
            </Row>
            <Row className={'header_block'}>
                <Col className={'header_right_block'} xs={6}>
                    <a href={'#'}>
                        <img src={Logo} alt={"Logo"}/>
                    </a>
                </Col>
                <Col className={'header_left_block'} xs={6}>
                    <div style={{backgroundColor:'none'}} onClick={handleShow} >
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default Index;