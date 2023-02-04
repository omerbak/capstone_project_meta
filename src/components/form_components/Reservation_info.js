import React from 'react'
import { useFormik } from 'formik'

const Reservation_info = ({next , data}) => {
    const formik = useFormik({
        initialValues: data,
        onSubmit: (values) => {
            next(values);
        }
    })
  return (
    <form onSubmit={formik.handleSubmit}>
        <h2 className='form-title'>Reservation Details</h2>
        <div className="input-field date">
            <label htmlFor="date">Date</label>
            <input type="date" id='date' name='date'
                value={formik.values.date}
                onChange={formik.handleChange}
            />
        </div>
        <div className="input-field time">
            <label htmlFor="time">Time</label>
            <input type="time" id='time' name='time' 
                value={formik.values.time}
                onChange={formik.handleChange}
            />
        </div>
        <div className="input-field guests">
            <label htmlFor="nb_guests">Number Of Guests</label>
            <input type="number" id='nb_guests' name='nb_guests' min="1" max="10" 
                value={formik.values.nb_guests}
                onChange={formik.handleChange}
            />
        </div>
        <div className="input-field occaison">
            <label htmlFor="occasion">Occaison</label>
            <select name="occasion" id="occasion" 
            value={formik.values.occasion}
            onChange={formik.handleChange}
            >
                <option value="">-- Select Occaison --</option>
                <option value="anniversary">Anniversary</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="input-field">
            <label htmlFor="comment">Comment</label>
            <textarea type="comment" id='comment' name='comment' placeholder='Add additional note or comment'
                value={formik.values.comment}
                onChange={formik.handleChange}
            />
        </div>
        <div className="btns-box">
            <button className='btn' type='button' disabled={true}>Previous</button>
            <button className='btn' type='Submit'>Next</button>
        </div>
    </form>
  )
}

export default Reservation_info