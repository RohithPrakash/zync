import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import queryString from 'query-string'
import io from 'socket.io-client'
import getServerURL from '../utils/server'
import InfoBar from './InfoBar'
import Input from './Input'
import Messages from './Messages'

let socket

function Chat() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const { name, room } = queryString.parse(window.location.search)
        socket = io(getServerURL)
        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error)
            }
        })
    }, [])

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message])
        })

        socket.on("roomData", ({ users }) => {
            setUsers(users)
        })
    }, [])

    const sendMessage = (event) => {
        event.preventDefault()
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    return (
        <Container className="d-flex flex-column vh-100 m-0" fluid>
            <InfoBar room={room} users={users} />
            <Messages messages={messages} name={name} />
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </Container>
    )
}

export default Chat
