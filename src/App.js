import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";
import Card from "./components/itemcards/card";
import Footer from "./components/footer/footer";
import MediaQuery from "react-responsive";

function App() {


  
  return (
    <div className="App">
      <Navbar />
      <Carousel />

      <div>
        <div2
        class="flex-container"
          //class="grid_testimonial"
          style={{
            marginLeft: "3rem",
            marginTop: "3rem",
            marginBottom: "3rem",
            marginRight: "3rem",
          }}
          >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div2>
        <div2
          class="flex-container"
          //class="grid_testimonial"
          style={{
            marginLeft: "3rem",
            marginTop: "3rem",
            marginBottom: "3rem",
            marginRight: "3rem",
          }}
          >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div2>
      </div>
      {/* <MediaQuery maxWidth={1224}>
      <div>
      <div2 class="flex-container" style={{ marginLeft: '10rem', marginTop: '3rem', marginBottom: '3rem', marginRight: '10rem' }}>
      <Card/><Card/>
      </div2>
      <div2 class="flex-container" style={{ marginLeft: '10rem', marginTop: '3rem', marginBottom: '3rem', marginRight: '10rem' }}>
      <Card/><Card/>
      </div2></div></MediaQuery> */}
      <Footer />
    </div>
  );
}

export default App;
