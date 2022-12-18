import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import ZarinButton from "../ZarinButton/ZarinButton";


const DesktopMenu = () => {
    return (
        <Row>
            <Col className={'ms-auto'} xs={12} lg={9}>
                <Navbar style={{ display:"flex" , alignItems:"center"}}>
                    <Container style={{fontFamily:'Yekan'}} className={'d-flex align-items-center justify-content-end m-0 p-0'}>
                        <Nav style={{fontSize:'16px' , fontWeight:'bold',color:'black'}}>
                            <Nav.Link href="#home">
                                {"محصولات"}
                            </Nav.Link>
                            <Nav.Link href="#features">
                                {"تعرفه ها"}
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                {"توسعه دهندگان"}
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                {"تماس با ما"}
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                {"بیشتر"}
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Col>
            <Col lg={3} className={'d-none d-lg-block'}>
                <ZarinButton/>
            </Col>
        </Row>
    )
}

export default DesktopMenu