import React from 'react'
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'

function Input({ message, setMessage, sendMessage }) {
    return (
        <Row className="align-items-end flex-grow-0 flex-shrink-1 position-relative fixed-bottom">
            <Col>
                <InputGroup className="my-3">
                    <FormControl
                        value={message}
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Type a message"
                        aria-label="message"
                        aria-describedby="message"
                        onChange={(event) => setMessage(event.target.value)}
                        onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
                    />
                    <InputGroup.Append>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={(event) => sendMessage(event)}
                        >
                            Send
                    </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default Input
