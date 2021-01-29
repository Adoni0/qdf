import React, { useState } from 'react'
import { Carousel, Button, Alert } from 'react-bootstrap'
import dateIdeas from './dateIdeas.json'
import axios from 'axios'

const Pony = () => {

    const [show, setShow] = useState(false);

    const onSelect = async (id) => {
        var selected = await dateIdeas.filter(idea => idea.id === id);
        // axios.post('/date', { date: selected[0].date })
        axios({
            method: 'post',
            url: '/date',
            data: {
                date: selected[0].date
            },
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => showAlert())
            .catch(err => console.log(err))
    }

    const showAlert = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false)
        }, 5000)
    }

    return (
        <div>
            {
            show ? <Alert
                variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Selection Confirmed!</Alert.Heading>
                <p>Adam has recieved a message with your selection and will get back to you soon.</p>
            </Alert> : null
            }
            <Carousel style={{ height: '400px', borderTop: 'inset', marginLeft: '50px', marginRight: '50px' }}>
                {
                    dateIdeas.map(idea => (

                        <Carousel.Item key={idea.id} style={{ height: '400px' }}>
                            <img
                                className="d-block w-100"
                                src={idea.img}
                                alt=""
                                style={{ height: '400px' }}
                            />
                            <Carousel.Caption style={{ marginBottom: 50 }}>
                                <h3>{idea.date}</h3>
                                <Button
                                    onClick={() => onSelect(idea.id)}
                                    variant="info"
                                >Select</Button>
                            </Carousel.Caption>
                        </Carousel.Item>

                    ))
                }
            </Carousel>
        </div>
    )
}

export default Pony
