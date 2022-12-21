import {Col, Container, Row} from "react-bootstrap";
import {RiseLoader} from "react-spinners";
import React from "react";


const Loading = () => {
  return(
      <Container className={'bg-light d-flex align-items-center justify-content-center'}>
          <Row style={{height:'100vh'}} className={'d-flex align-items-center justify-content-center'}>
              <Col>
                  <RiseLoader color="#ffd900" />
              </Col>
          </Row>
      </Container>
  )
}


export default Loading