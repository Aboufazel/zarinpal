import {Col, Container, Offcanvas, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faBars} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/pics/logo-white.svg";
import {useState} from "react";
import "./header.stayle.scss"
import DesktopMenu from "../DesktopMenu/DesktopMenu";

const Header = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return(
      <Container fluid style={{height:'100%'}} dir={"rtl"}>
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
                              <a href={'/login'} className={'zarin_btn'}>
                                  {"زرین‌پال من"}
                                  <FontAwesomeIcon icon={faArrowLeft}/>
                              </a>
                          </Col>
                      </Row>
                  </Row>
              </Offcanvas>
          </Row>
          <Row className={'header_block'}>
              <Col className={'header_right_block text-md-start'} sm={4} xs={6}>
                  <a href={'#'}>
                      <img src={Logo} alt={"Logo"}/>
                  </a>
              </Col>
              <Col className={'header_left_block'} sm={8} xs={6}>
                  <div className={'d-sm-none'} style={{backgroundColor:'none'}} onClick={handleShow} >
                      <FontAwesomeIcon icon={faBars}/>
                  </div>
                  <div className={'d-sm-block d-none'}>
                      <DesktopMenu/>
                  </div>
              </Col>
          </Row>
      </Container>
  )
}

export default Header;