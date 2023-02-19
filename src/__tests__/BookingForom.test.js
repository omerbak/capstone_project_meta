import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import BookingForm from '../components/BookingForm';



test('Renders the BookingForm form-box', () => {
    const availableTimes = [
        "17:00", "18:00"
    ]
    render(<BookingForm availableTimes={availableTimes}/>)

    const headingElement = screen.getByText("Reserve Now");
    expect(headingElement).toBeInTheDocument();
})