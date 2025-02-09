import { useTheme } from "../context/ThemeContext";
import { skills } from "../data/projects";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "General Industrial Controls",
      period: "2024 - Present",
      description:
        "Led development of enterprise-scale applications, mentored junior developers, and implemented CI/CD pipelines.",
    },
    {
      title: "R&D Software Engineer",
      company: "General Industrial Controls",
      period: "2023 - 2024",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and AWS.",
    },
  ];

  const education = [
    {
      degree: "Bachlore of Computer Science",
      school: "Dr. DY Patil Institute of Technology, Pune",
      year: "2020 - 2023",
      description: "Major in Software Engineering and Minor in Cyber Security",
    },
    {
      degree: "Diploma of Computer Science",
      school: "MIT, Pune",
      year: "2017 - 2020",
      description: "Major in Computer Science, Minor in Mathematics",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 space-y-16">
      {/* Bio Section */}
      <section className="space-y-4">
        <h1
          className={`text-4xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          About Me
        </h1>
        <div
          className={`space-y-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <p>
            I'm a passionate Full Stack Developer with over 2 years of
            experience in building web applications. I specialize in JavaScript
            technologies across the stack and have professional experience
            working with React, Node.js, and cloud platforms.
          </p>
          <p>
            My journey in software development started during my university
            years, and I've since worked with various technologies and
            frameworks. I'm particularly interested in building scalable
            applications and implementing clean, maintainable code.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-6">
        <h2
          className={`text-2xl font-bold flex items-center ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          <Briefcase className="mr-2" />
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-600">{exp.company}</p>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {exp.period}
              </p>
              <p
                className={`mt-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <h2
          className={`text-2xl font-bold flex items-center ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          <GraduationCap className="mr-2" />
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } shadow-lg`}
            >
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-blue-600">{edu.school}</p>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {edu.year}
              </p>
              <p
                className={`mt-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <h2
          className={`text-2xl font-bold flex items-center ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          <Award className="mr-2" />
          Skills & Technologies
        </h2>
        <div className="space-y-6">
          {skills.map((category, index) => (
            <div key={index}>
              <h3
                className={`text-xl font-semibold mb-3 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full ${
                      theme === "dark"
                        ? "bg-gray-800 text-gray-300"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
