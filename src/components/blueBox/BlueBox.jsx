import {Container, Row} from "react-bootstrap";
import "./blueBox.style.scss"

const BlueBox = () => {

    return(
        <Container dir={'rtl'}>
            <Row className={"blue_box_block"}>
                <span>
                    {"بیش از ۱۲ سال"}
                </span>
                <span>
                    {"انتخاب مطمئنِ کسب و کارهای آنلاین"}
                </span>
            </Row>
        </Container>
    )
}

export default BlueBox;