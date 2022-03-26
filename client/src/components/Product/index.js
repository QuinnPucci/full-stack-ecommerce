import React from "react";
import password from "../../assets/images/password.png";
import appointment from "../../assets/images/appointment.png";
import horiseon from "../../assets/images/horiseon.png";
import marvel from "../../assets/images/marvel.jpg";
import scheduler from "../../assets/images/scheduler.png";
import notetaker from "../../assets/images/notetaker.png";

function Portfolio() {
  const photos = [
    {
      name: "Grocery aisle",
      src: password,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Grocery booth",
      src: appointment,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Building exterior",
      src: horiseon,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Restaurant table",
      src: marvel,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cafe interior",
      src: scheduler,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cat green eyes",
      src: notetaker,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ];
  return (
    <section>
      <div>
        <h1 className="title">Products</h1>
      </div>
    </section>
  );
}

export default Portfolio;