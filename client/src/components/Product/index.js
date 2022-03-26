import React from "react";

function Product() {
  const productPhotos = [
    {
      name: "Product A",
      //src: 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Product B",
      //src: 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Product C",
      //src: 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Product D",
      //src: 
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ];
  return (
    <section>
      <div>
        <h1 className="title">Product</h1>
      </div>
      <div className="port-image">
        {photos.map((image, i) => (
          <div className="port-image-inner">
            <div className="port-image-div">
              <h3>{image.name}</h3>
            </div>
            <div>
              <img src={image.src} alt={image.name} key={image.name}></img>
            </div>
            <div>
              <p>lorem ipsum</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;