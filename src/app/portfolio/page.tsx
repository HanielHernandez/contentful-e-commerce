"use client";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <header className="header">
        <Image
          src="/path/to/developer-image.jpg"
          alt="Developer Image"
          width={150}
          height={150}
          className="developer-image"
        />
        <h1>About Me</h1>
      </header>

      <section className="intro">
        <p>
          Hi, I&apos;m [Your Name], a passionate web developer with over 6 years
          of experience in building engaging and user-friendly websites. I
          specialize in front-end development, creating responsive designs with
          clean and maintainable code. I’ve had the pleasure of working with
          global teams, leveraging my skills to create seamless digital
          experiences that scale across platforms.
        </p>
        <p>
          When I&apos;m not coding, you can find me experimenting with new
          technologies, exploring design trends, or enjoying my free time with
          my loved ones. I thrive in dynamic environments and am always up for
          new challenges.
        </p>
        <Link href="#contact">
          <span className="contact-button">Contact Me</span>
        </Link>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <Image
              src="/path/to/html-icon.png"
              alt="HTML Icon"
              width={50}
              height={50}
            />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <Image
              src="/path/to/css-icon.png"
              alt="CSS Icon"
              width={50}
              height={50}
            />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <Image
              src="/path/to/js-icon.png"
              alt="JavaScript Icon"
              width={50}
              height={50}
            />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <Image
              src="/path/to/react-icon.png"
              alt="React Icon"
              width={50}
              height={50}
            />
            <p>React</p>
          </div>
          <div className="skill-item">
            <Image
              src="/path/to/nextjs-icon.png"
              alt="Next.js Icon"
              width={50}
              height={50}
            />
            <p>Next.js</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <h3>Contact Me</h3>
        <p>
          If you&apos;d like to work together or just chat, feel free to reach
          out!
        </p>
        <Link href="mailto:your-email@example.com">
          <span className="contact-link">Email Me</span>
        </Link>
      </footer>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .header {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
        }

        .developer-image {
          border-radius: 50%;
          margin-right: 20px;
        }

        h1 {
          font-size: 2.5rem;
          color: #333;
        }

        .intro {
          margin-bottom: 40px;
        }

        .contact-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 20px;
        }

        .skills {
          margin-bottom: 40px;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .skill-item {
          text-align: center;
        }

        .skill-item img {
          display: block;
          margin: 0 auto 10px;
        }

        .footer {
          text-align: center;
          padding: 40px 0;
          background-color: #f7f7f7;
        }

        .contact-link {
          color: #0070f3;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
