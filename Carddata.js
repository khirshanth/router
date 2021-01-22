import React, { useState } from "react"
import { Container, Row, Col, DropdownItem } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';




function Carddata({values}){
      
      console.log(values.state.datatype)
    return(
        <div>
             {values.state.datatype.map((element,index)=>{
                 console.log(element)
                 return(
                    <Card className="card-header" key={index}>
                         
                    <CardBody className="card-body">
                        <Container>
                            <Row>
                                <Col>
                                <CardTitle tag="h5">{element.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{element.content}</CardSubtitle>
                        <CardText></CardText>
                                </Col>
                                <Col>
                                    <CardImg className="card-img" src="https://radiustheme.com/demo/wordpress/eikra/wp-content/uploads/learn-press-profile/4/172522ec1028ab781d9dfd17eaca4427.jpg" alt="Card image cap" alt="Card image cap" />
                                </Col>
                            </Row>
                        </Container>
                      
                        
          </CardBody>
        </Card>
                 )
             })}
           
        </div>
    )
}


export default Carddata