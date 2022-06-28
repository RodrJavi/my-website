import Head from "next/head";
import Intro from "/components/Intro";
import Card from "/components/Card";
import AboutMePicture from "../components/AboutMePicture";
import ContactBubble from "../components/ContactBubble";
import ContactForm from "../components/ContactForm";
import { useState } from "react";

export default function Home() {
  const repoList = [
    {
      pic: "/pictures/advice_generator.png",
      title: "Random Advice Generator",
      body: "This project was my introductory attempt at using fetch API. Each time the randomize buton is clicked, a new random piece of advice will appear.",
      source: "https://github.com/RodrJavi/advice-generator-app-main",
      site: "https://rodrjavi.github.io/advice-generator-app-main/",
    },
    {
      pic: "/pictures/interactive_rating.jpg",
      title: "Interactive rating component",
      body: "This project was my first attempt at using Javascript in a practical manner, a rating is selected, then upon submission a thank you screen appears with the same value chosen.",
      source: "https://github.com/RodrJavi/interactive-rating-component",
      site: "https://rodrjavi.github.io/interactive-rating-component/",
    },
    {
      pic: "/pictures/task_tracker.jpg",
      title: "React Task Tracker",
      body: "This project was my introduction to React, with this application you can set a date and name for a task to be added in a list. Double-clicking will set a reminder",
      source: "https://github.com/RodrJavi/react-task-tracker",
      site: "https://react-task-tracker-inky.vercel.app/",
    },
    {
      pic: "/pictures/nft_card.png",
      title: "NFT Card Preview",
      body: "This project was my first ever attempt at HTML and CSS. This taught me how to use flexbox and hover effects. It's a simple card that displays an image of an NFT, the price, and the creator",
      source: "https://github.com/RodrJavi/nft-preview-card-component-solution",
      site: "https://rodrjavi.github.io/nft-preview-card-component-solution/",
    },
  ];

  return (
    <div>
      <div className="container h-full">
        <Head>
          <title>Javier&apos;s site</title>
          <meta
            name="description"
            content="Javier Rodriguez's web development portfolio"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <nav className="header-left">
          <span className="corner-name">Javier Rodriguez</span>
          <div className="header-right">
            <h3>
              <a href="#projects">Projects</a>
            </h3>
            <h3>
              <a href="#about">About</a>
            </h3>
            <h3>
              <a href="#contact">Contact</a>
            </h3>
          </div>
        </nav>

        <Intro />
      </div>

      <section id="projects" className="project-section">
        <div className="container">
          <h2>Projects</h2>
          <div className="card-section">
            {repoList.map((repo) => (
              <Card {...repo} key={repo.title} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-me-section">
        <AboutMePicture />
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            I have always had an interest in anything computer science related
            and knew I wanted to have a career in it. I was exposed to web
            development in late 2021 and absolutely loved it, since then I have
            taken front-end courses, created projects, and completed project
            challenges in order to reinforce everything I have been learning and
            obtain new knowledge along the way.
          </p>
          <p>My current goals are...</p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-section-body">
          <span className="interest">
            Are You Interested? <br></br> Say Hi!
          </span>
          <ContactBubble />
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
