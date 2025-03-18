import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

        {/* Profile Picture and Introduction */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Picture */}
          <div className="w-200 h-60 relative">
            <Image
              src="/profile.jpg" // Path to your profile picture in the public folder
              alt="Profile Picture"
              fill
              className="rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>

          {/* Introduction */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Hi, I&#39;m Tomiwa Ogunleye</h2>
            <p className="text-gray-700 mb-4">
            I am a highly motivated and detail-oriented Software Engineer with a Bachelor of Science in Computer Science from the University of Regina. My expertise lies in developing scalable, maintainable, and reliable code, with a strong commitment to continuous learning and applying software engineering best practices. I thrive in collaborative environments and take pride in delivering high-quality software solutions that drive innovation and efficiency.

With hands-on experience in full-stack development, I have designed and implemented web applications using technologies like React.js, Node.js, JavaScript, and SQL. My projects range from creating a music media application to developing a budget management Chrome extension, showcasing my ability to handle end-to-end feature development—from concept to deployment.

I am passionate about solving complex problems, improving user experiences, and contributing to innovative technology solutions. Whether working independently or as part of a team, I bring a positive attitude, strong initiative, and a dedication to excellence in every project I undertake..
            </p>
            <p className="text-gray-700">
              When I&#39;m not working, you can usually find me reading a book or practicing my photography. Feel free to reach out if you&#39;d like to collaborate or just say hi!
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-500 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-gray-700">Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Next.js.</p>
            </div>
            <div className="bg-blue-500  p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-700">Experienced in creating user-friendly interfaces using tools like Tailwind CSS.</p>
            </div>
            <div className="bg-blue-500  p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-700">Skilled in building scalable backend systems with Node.js, Express, and databases like MongoDB.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">Want to work together or have a question?</p>
          <Link
            href="/contact" // Link to your contact page
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}