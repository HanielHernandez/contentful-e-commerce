// pages/index.js
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Your Name - Web Developer Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <section id="hero" className="text-center mb-16">
          <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-4">
            <Image
              src="/profile.jpg" // Replace with your profile image
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-4xl font-bold mb-4">Hello, I'm Your Name</h2>
          <p className="text-lg text-gray-700 mb-8">
            A passionate web developer specializing in Next.js and Tailwind CSS.
          </p>
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View My Projects
          </a>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 mb-4">
            Write a brief introduction about yourself. Include your skills,
            experience, and what you're passionate about.
          </p>
          <p className="text-gray-700 mb-4">
            Mention your expertise in technologies like Next.js, Tailwind CSS,
            and any other relevant tools.
          </p>
          <p className="text-gray-700">
            You can also include your interests and hobbies.
          </p>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card Example */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <Image
                  src="/project1.jpg" // Replace with project image
                  alt="Project 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Project 1 Title</h3>
              <p className="text-gray-700 mb-4">
                Brief description of the project.
              </p>
              <a
                href="#" // Replace with project link
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
            {/* Add more project cards here */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <Image
                  src="/project2.jpg" // Replace with project image
                  alt="Project 2"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Project 2 Title</h3>
              <p className="text-gray-700 mb-4">
                Brief description of the project.
              </p>
              <a
                href="#" // Replace with project link
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <Image
                  src="/project3.jpg" // Replace with project image
                  alt="Project 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Project 3 Title</h3>
              <p className="text-gray-700 mb-4">
                Brief description of the project.
              </p>
              <a
                href="#" // Replace with project link
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-gray-700 mb-4">
            Feel free to reach out to me for any inquiries or collaborations.
          </p>
          <div className="flex flex-col space-y-2">
            <p>Email: your.email@example.com</p>
            <p>LinkedIn: linkedin.com/in/yourprofile</p>
            <p>GitHub: github.com/yourusername</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
