import React from 'react'
import { Col } from 'react-bootstrap'
import ReactEmoji from 'react-emoji'

function Message({ message, name }) {
    const messageBy = message.user
    const currentUser = name.trim().toLowerCase()
    return (
        messageBy === currentUser ?
            (
                <Col className="float-right mr-2 py-1" xs={10} sm={10} md={7} lg={7} xl={7}>
                    <p className="bg-white rounded text-break p-2 m-0">{ReactEmoji.emojify(message.text)}</p>
                </Col>
            ) : (
                <Col className="float-left mr-2 py-1" xs={10} sm={10} md={7} lg={7} xl={7}>
                    <small className="m-0">{messageBy}</small>
                    <p className="bg-primary text-white rounded text-break p-2 m-0">{ReactEmoji.emojify(message.text)}</p>
                </Col>
            )
    )
}

export default Message