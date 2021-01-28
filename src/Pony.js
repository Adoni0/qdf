import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import dateIdeas from './dateIdeas.json'

const Pony = () => {
    return (
        <div>
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
                    <Button variant="info">Select</Button>
                </Carousel.Caption>
            </Carousel.Item>
            
            ))
            }
        </Carousel>
        </div>
    )
}

export default Pony
