import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Pony from './Pony'

const Home = () => {
    return (
        <>
            <Jumbotron style={{ marginBottom: 60, paddingBottom: 20, backgroundColor: '#f39f86', backgroundImage: 'linear-gradient(315deg, #f39f86 0%, #f9d976 74%)' }}>
                <h1>Quarantine Date Choices</h1>
                <p>Choose One!</p>
            </Jumbotron>
            <Pony />
        </>
    )
}

export default Home
