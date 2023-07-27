import React from "react";
import Cal from "@calcom/embed-react";

const BookCalendar = () => {
  return (
    <div className="calendar">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=America%2FEdmonton&src=dGhlcGVyZnVtZW1lbmFnZXJpZUBnbWFpbC5jb20&src=MmUxZTRkMWM0M2YzMTk4NDYwZGM3MTAxMzFkZWMwMGU5NTlmYmJkMWFlZTcxY2Q2MDIwZmJlNGRhNTgyNWU5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=YmdubGppMjFsNWY5bDM0Nm92OHZjczE1NTM0ZmQ5bHBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23B39DDB&color=%230B8043&color=%23AD1457"
        style={{
          marginTop:"20px",
          display:"block",
          border: "solid 1px #777",
          // width: "400",
          // height: "700",
          frameborder: "0",
          scrolling: "yes",
        }}
      ></iframe>
    </div>
  );
};

export default BookCalendar;
