import React from "react";
import BookingTitle from "./BookingTitle";
import "../style/Booking.scss";

//εη
import BookingBanner from "../img/BookingBanner.jpg";

function Booking() {
  return (
    <>
      <div className="container">
        {/*δΈε*/}
        <BookingTitle />
        <div className="banner">
          <img className="pic" src={BookingBanner} alt=""></img>
        </div>
      </div>
    </>
  );
}

export default Booking;
