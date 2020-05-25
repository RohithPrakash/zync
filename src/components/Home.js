import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <Container fluid>
            <Row className="justify-content-center vh-100">
                <Col className="my-auto" xs={10} sm={8} md={6} lg={4} xl={3}>
                    <h1 className="display-3 my-4 zync">Zync</h1>
                    <InputGroup className="my-3">
                        <FormControl
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            aria-label="name"
                            aria-describedby="name"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </InputGroup>
                    <InputGroup className="my-3">
                        <FormControl
                            type="text"
                            name="room"
                            id="room"
                            placeholder="Room"
                            aria-label="room"
                            aria-describedby="room"
                            onChange={(event) => setRoom(event.target.value)}
                        />
                    </InputGroup>
                    <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <Button variant="outline-dark" type="submit">Submit</Button>
                    </Link>
                </Col>
            </Row>
        </Container>

    )
}

export default Home