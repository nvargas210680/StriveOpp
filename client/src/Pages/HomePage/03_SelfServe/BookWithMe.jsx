import React from 'react'
import "./BookWithMe.css"
import BookCalendar from './BookWithMeCalendar';

const BookWithMe = () => {
  return (
    <div className="cardbookwithme">
        <img className="selfserve" src="https://i.imgur.com/OKEoCwV.png" />
        <h3 className="selfserve">Book With Me</h3>
        <p className="cardbookwithmeinfo">
            <BookCalendar />
        </p>
        
    </div>
  )
}

export default BookWithMe;