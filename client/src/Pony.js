import React, { useState } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import dateIdeas from './dateIdeas.json'
import axios from 'axios'
import SuccessAlert from './SuccessAlert'

const Pony = () => {

    const [isAlertShown, setIsAlertShown] = useState(false);

    const onSelect = async (id) => {
        var selected = await dateIdeas.filter(idea => idea.id === id);
        // console.log(selected[0].date)
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
        setIsAlertShown(true);
        setTimeout(() => {
            setIsAlertShown(false)
        }, 4000)
    }

    return (
        <div>
            {isAlertShown ? <SuccessAlert /> : null}
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
