import React from 'react';
import { Formik  } from 'formik';

const Personal__info = ({next, previous, data}) => {


  return (
    <Formik
    initialValues={data}
    onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        setTimeout(() => {
            next(values, true);
            actions.setSubmitting(false)
        }, 1500)

    }}
    >
    {({values, handleSubmit, handleChange, isSubmitting}) => (
        <form onSubmit={handleSubmit}>
            <h2 className='form-title'>Personal Details</h2>
            <div className="input-field name">
                <label  htmlFor="firstName">First Name</label>
                <input  type="text" id='firstName' name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                />
            </div>
            <div className="input-field name">
                <label htmlFor="lastName">Last Name</label>
                <input  type="text" id='lasntName' name='lastName'
                    value={values.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className="input-field email">
                <label  htmlFor="email">Email</label>
                <input  type="email" id='email' name='email'
                    value={values.email}
                    onChange={handleChange}
                />
            </div>
            <div className="input-field phone">
                <label  htmlFor="phone">Phone</label>
                <input  type="tel" id='phone' name='phone'
                    value={values.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="btns-box">
                <button className='btn' type='button' onClick={() => previous(values)}>Previous</button>
                <button className='btn' type='Submit'>{isSubmitting? "Loading..." : "Submit"}</button>
            </div>
        </form>
    )}
    </Formik>
  )
}

export default Personal__info