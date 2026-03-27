import {
  Code,
  Cloud,
  Briefcase,
  PenTool,
  PieChart,
  Image,
  Megaphone,
  GraduationCap,
} from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Web & Software Dev",
    jobs: 612,
    desc: "Software Engineer, Web / Mobile Developer & More",
  },
  {
    icon: Cloud,
    title: "Data Science & Analytics",
    jobs: 113,
    desc: "Data Specialist / Scientist & More",
  },
  {
    icon: Briefcase,
    title: "Accounting & Consulting",
    jobs: 186,
    desc: "Auditor, Accountant & More",
  },
  {
    icon: PenTool,
    title: "Writing & Translations",
    jobs: 298,
    desc: "Copywriter, Translator & More",
  },
  {
    icon: PieChart,
    title: "Sales & Marketing",
    jobs: 549,
    desc: "Marketing Coordinator & More",
  },
  {
    icon: Image,
    title: "Graphics & Design",
    jobs: 873,
    desc: "Web Designer & More",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    jobs: 125,
    desc: "Social Media & More",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    jobs: 445,
    desc: "Coach, Advisor & More",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-2xl font-semibold mb-10">
        Popular Job Categories
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {categories.map((cat, index) => {
          const Icon = cat.icon;

          return (
            <div
              key={index}
              className="group transition-all duration-300 ease-in-out hover:-translate-y-1 bg-white p-6 rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:shadow-md"
            >
              <Icon
                className="mx-auto text-blue-600 group-hover:text-white transition"
                size={28}
              />

              <p className="mt-2 text-xs bg-gray-100 inline-block px-2 py-1 rounded group-hover:bg-blue-700 group-hover:text-white transition">
                {cat.jobs}
              </p>

              <h3 className="mt-3 font-medium group-hover:text-white transition">
                {cat.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 group-hover:text-white transition">
                {cat.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
