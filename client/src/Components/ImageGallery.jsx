import React from "react";
import d1 from "../images/1-mananBanner.png";
import d2 from "../images/2-EarthDay.png";
import d3 from "../images/3-MothersDay.png";
import d4 from "../images/4-Wanda.png";
import d5 from "../images/5-TonyStark.png";
import d6 from "../images/6-WorkDesk.png";
import d7 from "../images/7-Wall1.png";
import d8 from "../images/8-Wall2.png";
import d9 from "../images/9-Wall3.png";
import d10 from "../images/10-masks.png";

function ImageGallery(){
return(
    <section id = "design-section">
    <div className = "container-fluid carousel-class">
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={d5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={d2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src= {d1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src= {d3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={d4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={d6} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={d7} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={d8} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={d9} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={d10} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</section>
)}

export default ImageGallery;