import {Container, Row} from "react-bootstrap";
import Header from "../components/header/Header";
import BlueBox from "../components/blueBox/BlueBox";
import SecondaryBlock from "../components/SecondaryBlock/SecondaryBlock";

const Index = () => {

    return (
        <Container fluid>
            <Header/>
            <BlueBox/>
            <SecondaryBlock/>
        </Container>
    )
}


export default Index;