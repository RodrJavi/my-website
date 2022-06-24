import Head from "next/head";
import Intro from "/components/Intro";
import Card from "/components/Card";
import AboutMePicture from "../components/AboutMePicture";

export default function Home() {
  return (
    <div>
      <div className="container h-full">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <nav className="header-left">
          <span className="corner-name">Javier Rodriguez</span>
          <div className="header-right">
            <h3>Projects</h3>
            <h3>About</h3>
            <h3>Contact</h3>
          </div>
        </nav>

        <Intro></Intro>
      </div>

      <section className="project-section">
        <div className="container">
          <h2>Projects</h2>
          <div className="card-section">
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </section>

      <section>
        <AboutMePicture></AboutMePicture>
      </section>
    </div>
  );
}
