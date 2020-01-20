import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="App-content">
        <div className="container cards">
          <TouristInfoCard
            name="Glasgow"
            url="peoplemakeglasgow.com"
            img="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg?w968h681"
          />

          <TouristInfoCard
            name="Manchester"
            url="visitmanchester.com"
            img="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          />

          <TouristInfoCard
            name="London"
            url="visitlondon.com"
            img="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
          />
        </div>
      </div>
      <Bookings />
      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
