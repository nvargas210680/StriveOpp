import React from "react";
import "./Coaching.css";

const Coaching = () => {
  return (
    <div className="coaching">
      <div className="container-coaching">
        <div className="coachingleft">
          <span>Events</span>

          <span>Unlock Your Potential with Our Exciting Events</span>

          <span>
            At StriveOpp, we believe in empowering individuals like you to
            achieve your dreams. That's why we not only offer an extensive
            scholarship database but also curate top-notch networking and
            upskilling events to enhance your personal and professional growth.
          </span>

          <span>
            Our events go beyond the conventional scholarship search. We bring
            together a diverse range of thought-provoking and skill-enhancing
            activities that will open new doors to success. From exclusive
            networking sessions with industry leaders to interactive workshops
            conducted by experts, our events are designed to equip you with the
            tools you need to thrive in today's competitive world.
          </span>
        </div>

        <div className="coachingright">
          <img src="https://i.imgur.com/uqshqm0.png" />
        </div>
      </div>

      <div className="container-coaching">
        <div className="coachingleft">
          <img src="https://i.imgur.com/qAOjfum.png" />
        </div>

        <div className="coachingcalendarright">
        <span style={{
        textAlign:"center",
        fontFamily:"Oswald",
        fontWeight:"bold",
        fontSize:"7rem",
        backgroundColor: "#eee"}}>
            Calendar
        </span>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=400&wkst=1&bgcolor=%23ffffff&ctz=America%2FEdmonton&src=dGhlcGVyZnVtZW1lbmFnZXJpZUBnbWFpbC5jb20&src=MmUxZTRkMWM0M2YzMTk4NDYwZGM3MTAxMzFkZWMwMGU5NTlmYmJkMWFlZTcxY2Q2MDIwZmJlNGRhNTgyNWU5YkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=YmdubGppMjFsNWY5bDM0Nm92OHZjczE1NTM0ZmQ5bHBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23B39DDB&color=%230B8043&color=%23AD1457"
            style={{
              border: "solid 1px #777",
              width: "1440",
              height: "800",
              frameborder: "0",
              scrolling: "no",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Coaching;
