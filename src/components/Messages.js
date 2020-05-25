import React from 'react'
import Message from './Message'

function Messages({ messages, name }) {
    return (
        <div className="flex-grow-1 flex-shrink-0 position-relative mx-1 pt-2 pb-3 bg-paper rounded">
            {messages.map((message, index) => <Message key={index} message={message} name={name} />)}
        </div>
    )
}

export default Messages
