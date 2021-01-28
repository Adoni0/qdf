import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Pony from './Pony'

const Home = () => {
    return (
        <>
            <Jumbotron style={{ paddingBottom: 20 }}>
                <h1>Quarantine Date Choices</h1>
                <p>Choose One!</p>
            </Jumbotron>
            <Pony />
        </>
    )
}

export default Home
