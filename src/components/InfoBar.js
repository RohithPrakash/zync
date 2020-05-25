import React from 'react'
import { Row, Col } from 'react-bootstrap'

function InfoBar({ room }) {
    return (
        <div className="py-3 flex-grow-0 flex-shrink-1 position-relative align-items-start fixed-top">
            <Row className="bg-primary mx-1 pt-2 pl-4 rounded">
                <Col>
                    <h3 className="text-white text-break">{room ? room : 'New Room'} </h3>
                </Col>
                <Col>
                    <h3><a href="/" className="btn btn-danger mb-2 float-right">X</a></h3>
                </Col>
            </Row>
        </div>
    )
}

export default InfoBar
