import React from 'react'
import "./BookWithMe.css"
import BookCalendar from './BookWithMeCalendar';

const BookWithMe = () => {
  return (
    <div className="cardbookwithme">
        <img className="selfserve" src="https://i.imgur.com/OKEoCwV.png" />
        <h3 className="selfserve">Events</h3>
        <p className="cardbookwithmeinfo">
        At StriveOpp, we believe in empowering individuals like you to 
        achieve your dreams. That's why we not only offer an 
        extensive scholarship database but also curate top-notch 
        networking and upskilling events to enhance your personal and 
        professional growth.
            {/* <BookCalendar /> */}
        </p>
        
    </div>
  )
}

export default BookWithMe;