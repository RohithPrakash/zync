import React from 'react'
import { Row, Col, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

function InfoBar({ room, users }) {
    return (
        <div className="py-3 flex-grow-0 flex-shrink-1 position-relative align-items-start fixed-top">
            <Row className="bg-primary mx-1 pt-2 pl-4 rounded">
                <Col className="d-inline-flex">
                    <h3 className="text-white text-break">{room ? room : 'New Room'}</h3>
                    <OverlayTrigger
                        key='bottom'
                        placement='bottom'
                        overlay={
                            <Tooltip>
                                <strong className="m-0">Users in room</strong>
                                {
                                    users ?
                                        users.map((user, key) => <p key={key} className="m-0">{user.name}</p>)
                                        : 'None'
                                }
                            </Tooltip>
                        }
                    >
                        <Button variant="light" className="ml-3 mb-2">+</Button>
                    </OverlayTrigger>
                </Col>
                <Col>
                    <h3><a href="/" className="btn btn-danger mb-2 float-right">X</a></h3>
                </Col>
            </Row>
        </div>
    )
}

export default InfoBar
