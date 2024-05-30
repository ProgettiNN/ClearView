
import React from "react";
import data from "../public/data.json"; // Importa il file JSON
import Navbar from "./Navbar";

import { Social } from "./Social";
import Faq from "./Faq";

const App = () => {
  const {
    bgcolor,
    textcolor,
    detailscolor,
    buttoncolor,
    font,
    images,
    header,
    about,
    service,
    review,
    faq,
    cta,
    footer,
    btn1,
    btn2,
    social,
  } = data;

  return (
    <section style={{ background: `${bgcolor}` }} className="">
      <div
        style={{
          background: `${bgcolor}`,
          color: `${textcolor}`,
        }}
        className={` mx-auto  relative`}
      >
        <Navbar
          buttoncolor={buttoncolor}
          image={images.navbar}
          btn={btn1}
          social={social}
          textcolor={textcolor}
        />
        <Header
          editedText={header}
          image={images.header}
          detailscolor={detailscolor}
        />
        <div className="h-20" />
        <About
          image={images.about}
          editedText={about}
          detailscolor={detailscolor}
        />
        <div className="h-40" />
        <Service
          editedText={service}
        />
        <div className="h-40" />
        <Review
          editedText={review}
        />
        <div className="h-40" />
        <Faq
          editedText={faq}
          detailscolor={detailscolor}
        />
        <div className="h-20" />
        <Cta
          editedText={cta}
          btn={btn2}
          buttoncolor={buttoncolor}
        />
        <Footer
          editedText={footer}
          social={social}
          textcolor={textcolor}
        />
      </div>
    </section>
  );
};

const Header = ({ editedText, detailscolor, image }:any) => {
  return (
    <section
      id="header"
      className="max-w-screen-2xl p-4 mx-auto min-h-screen justify-center flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left "
    >
      <div className="w-full flex flex-col justify-center">
        <h2>
          <p className="">{editedText.titolo}</p>
        </h2>
        <h1 className="text-4xl">
          <p className="text-pretty">{editedText.slogan}</p>
        </h1>
        <p className="">{editedText.descrizione}</p>
        <div></div>
      </div>
      <div className="w-full flex md:p-12 xl:p-16 relative">
        <img
          className="rounded-xl aspect-square object-cover mx-auto w-2/3 sm:w-full"
          alt="main"
          src={image}
          key={image}
        />
        <div className="rounded-xl hidden md:block text-slate-200 h-28 w-28 -ml-12 -mt-12">
          <svg
            width="100"
            className="hidden md:block"
            height="100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill={detailscolor}>
              <circle cx="12.5" cy="12.5" r="4" />
              <circle cx="37.5" cy="12.5" r="4" />
              <circle cx="62.5" cy="12.5" r="4" />
              <circle cx="87.5" cy="12.5" r="4" />
              <circle cx="12.5" cy="37.5" r="4" />
              <circle cx="37.5" cy="37.5" r="4" />
              <circle cx="62.5" cy="37.5" r="4" />
              <circle cx="87.5" cy="37.5" r="4" />
              <circle cx="12.5" cy="62.5" r="4" />
              <circle cx="37.5" cy="62.5" r="4" />
              <circle cx="62.5" cy="62.5" r="4" />
              <circle cx="87.5" cy="62.5" r="4" />
              <circle cx="12.5" cy="87.5" r="4" />
              <circle cx="37.5" cy="87.5" r="4" />
              <circle cx="62.5" cy="87.5" r="4" />
              <circle cx="87.5" cy="87.5" r="4" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};


const Service = ({ editedText }:any) => {
  return (
    <section
      id="servizi"
      className="max-w-screen-2xl p-4 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
    >
      {editedText.map((service:any, index:any) => {
        return (
          <div key={index} className="flex flex-col  w-full gap-2 p-4 ">
            <h3 className="font-bold">
              {service.icon}
              {service.nome}
            </h3>
            <p>{service.testo}</p>
          </div>
        );
      })}
    </section>
  );
};

const About = ({ editedText, detailscolor, image }:any) => {
  return (
    <section
      id="aboutus"
      className="max-w-screen-2xl p-4 mx-auto flex flex-col sm:flex-row items-center justify-center gap-8"
    >
      <div className="w-full flex pr-4 py-4 md:pr-16 md:py-16 relative order-2 sm:order-1">
        <img
          className="rounded-xl aspect-square object-cover w-3/4 sm:w-full "
          alt="main"
          src={image}
          key={image}
        />

        <div className="rounded-xl h-28 w-28 bottom-2 right-4 absolute rotate-90">
          <svg
            width="100"
            className="hidden md:block"
            height="100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill={detailscolor}>
              <circle cx="12.5" cy="37.5" r="4" />
              <circle cx="37.5" cy="37.5" r="4" />
              <circle cx="62.5" cy="37.5" r="4" />
              <circle cx="87.5" cy="37.5" r="4" />
              <circle cx="12.5" cy="62.5" r="4" />
              <circle cx="37.5" cy="62.5" r="4" />
              <circle cx="62.5" cy="62.5" r="4" />
              <circle cx="87.5" cy="62.5" r="4" />
            </g>
          </svg>
        </div>
      </div>
      <div className="sm:w-full flex flex-col justify-center p-4 gap-2 order-1 sm:order-2 mr-auto w-3/4 ">
        <h1 className="text-4xl">
          <p className="p-1">{editedText.title}</p>
        </h1>
        <p className="text-lg">
          {editedText.text}
        </p>
      </div>
    </section>
  );
};


const Review = ({ editedText }:any) => {
  return (
    <section
      id="review"
      className="max-w-screen-2xl p-4 mx-auto w-full my-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 "
    >
      {editedText.map((review:any, index:any) => (
        <div
          className={`w-full flex flex-col justify-between border p-4 rounded-xl gap-4 ${
            index === 2 ? "md:col-auto sm:col-span-full" : ""
          }`}
          key={index}
        >
          <p>{review.text}</p>
          <div className="ml-auto justify-end flex items-center gap-4">
            <p>{review.nome}</p>
            <img
              className="h-8 w-8 rounded-full"
              src={`./photo/review${index+1}.webp`}
              alt={`review ${index}`}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

const Cta = ({ editedText, buttoncolor, btn }:any) => {
  return (
    <section
      id="cta"
      className="my-20 p-4 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col ">
        <h1 className="max-w-screen-md text-center p-4 text-xl">{editedText}</h1>

        <a href={btn.link} className="min-w-min mx-auto">
          <button
            style={{ background: `${buttoncolor}` }}
            className={` text-white rounded-lg px-2 py-1 mx-auto `}
          >
            {btn.testo}
          </button>
        </a>
      </div>
    </section>
  );
};

const Footer = ({ editedText,social,textcolor }:any) => {
  return (
    <section className="p-8 flex flex-col justify-center border-t border-gray-200 w-full gap-4" id="footer">
      <Social social={social} textcolor={textcolor}/>
      <div className="flex flex-row justify-center gap-4">
      <a href="#header"><p>{editedText.home}</p></a>
      <a href="#aboutus"><p>{editedText.about}</p></a>
      <a href="#servizi"><p>{editedText.servizi}</p></a>
      </div>
      <div className="flex relative bottom-0 h-14 items-center justify-center gap-2">
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M10 9C10 8.44754 10.4476 8 10.9997 8H13C13.5071 8 13.7898 8.16249 13.9378 8.28087C14.0486 8.36952 14.1077 8.45538 14.119 8.4731C14.3737 8.94812 14.962 9.13706 15.4472 8.89443C15.9309 8.65259 16.1361 8.03372 15.8934 7.55064C15.8387 7.44229 15.7712 7.34071 15.6984 7.24375C15.5859 7.09376 15.4194 6.90487 15.1872 6.71913C14.7102 6.33751 13.9929 6 13 6H10.9997C9.34271 6 8 7.34332 8 9V14.9999C8 16.6566 9.34275 17.9999 10.9998 17.9999L13 17.9999C13.9929 18 14.7101 17.6625 15.1872 17.2809C15.4194 17.0951 15.5859 16.9062 15.6984 16.7563C15.7714 16.659 15.8389 16.5568 15.8939 16.4483C16.138 15.9605 15.9354 15.3497 15.4472 15.1056C14.962 14.8629 14.3737 15.0519 14.119 15.5269C14.1077 15.5446 14.0486 15.6305 13.9378 15.7191C13.7899 15.8375 13.5071 16 13 15.9999L10.9998 15.9999C10.4476 15.9999 10 15.5524 10 14.9999V9Z"
              style={{ fill: textcolor }}
            ></path>{" "}
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
              style={{ fill: textcolor }}
            ></path>{" "}
          </g>
        </svg>
        <p>{editedText.azienda}</p>
      </div>
    </section>
  );
};



export default App;
