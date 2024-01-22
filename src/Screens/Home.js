import React from "react";
import img from "../assets/doyouspeakenglish.jpg";

const Home = () => {
  return (
    <section
      className="text-gray-600 body-font m-20 "
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "1000px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#000000", 
        padding: "40px", 
        borderRadius: "10px", 
        margin: "20px 0", 
      }}
    >
      <div>
        <h1 className="text-7xl font-bold mb-4 ">
          Ready to take your language journey to the next level?
        </h1>
        <p className="text-lg text-black font-bold fs-4">
          There has never been a better time than right now.
        </p>
      </div>
    </section>
  );
};

export default Home;

