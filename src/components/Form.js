import React from 'react'
import Steps from './form_components/Steps';
import Personal__info from './form_components/Personal__info';
import Reservation_info from './form_components/Reservation_info';
import ThankMessage from './form_components/ThankMessage';
import { useState } from 'react';


const Form = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        nb_guests: "",
        occasion: "",
        comment: "",
    })

    function handleNext(newData, final = false){
        if(final){
            console.log("submitted", formData);
        }
        setFormData(prev => ({...prev, ...newData}))
        setStep(prev => prev+1);
    }
    function handlePrevious(newData){
        setFormData(prev => ({...prev, ...newData}))
        setStep(prev => prev-1);
    }

    const formStep =
    [
        <Reservation_info next={handleNext} data={formData}/>,
        <Personal__info next={handleNext} previous={handlePrevious} data={formData}/>,
        <ThankMessage />
    ]

    return (
        <div className='form-section'>
            <div className="container">
                <div className="form-box">
                    <Steps step={step}/>
                    {formStep[step-1]}
                </div>
            </div>
        </div>
    )
}

export default Form


 {/* {step === 1 || step === 2?
                        <form onSubmit={handleSubmit}>
                            <Reservation_info step={step}/>
                            <Personal__info step={step}/>
                            <Form_buttons step={step} setstep={setStep}/>
                        </form>
                        :
                        <div className="thank-message">
                            <p>Thank you For Your Reservation</p>
                        </div>
                } */}