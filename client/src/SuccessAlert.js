import React from 'react'
import Alert from 'react-bootstrap/Alert'

const SuccessAlert = () => {
    return (
        <Alert 
        variant="success">
            <Alert.heading>Selection Confirmed!</Alert.heading>
             <p>Adam has recieved a message with your selection and will get back to you soon.</p>
        </Alert>
    )
}

export default SuccessAlert
