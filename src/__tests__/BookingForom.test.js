import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import BookingForm from '../components/BookingForm';



test('Renders the BookingForm form-box', () => {
    const availableTimes = [
        {id:"0", time:"17:00", isAvailable: true},
        {id:"1", time:"18:00", isAvailable: true},
        {id:"2", time:"19:00", isAvailable: true},
        {id:"3", time:"20:00", isAvailable: true},
        {id:"4", time:"21:00", isAvailable: true},
        {id:"5", time:"22:00", isAvailable: true},
        {id:"6", time:"23:00", isAvailable: true}
    ]
    render(<BookingForm availableTimes={availableTimes}/>)

    const headingElement = screen.getByText("Reserve Now");
    expect(headingElement).toBeInTheDocument();
})