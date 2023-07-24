import React from "react";
import Cal from "@calcom/embed-react";

const BookCalendar = () => (
    <Cal
    calLink="pro"
    config={{
      name: "John Doe",
      email: "johndoe@gmail.com",
      notes: "Test Meeting",
      guests: ["janedoe@gmail.com"],
      theme: "dark",
    }}
  />
);

export default BookCalendar;