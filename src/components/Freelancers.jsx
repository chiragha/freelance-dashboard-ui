import { Star, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

const freelancers = [
  {
    name: "Marcin Kowalski",
    role: "Front-End Developer",
    rating: 4.9,
    location: "Warsaw",
    rate: "$50/hr",
    success: "100%",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sindy Forest",
    role: "Magento Certified Developer",
    rating: 5.0,
    location: "Brisbane",
    rate: "$70/hr",
    success: "100%",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Sebastiano Piccio",
    role: "Laravel Dev",
    rating: 4.5,
    location: "Milan",
    rate: "$80/hr",
    success: "89%",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Sindy Forest",
    role: "Magento Certified Developer",
    rating: 5.0,
    location: "Brisbane",
    rate: "$70/hr",
    success: "100%",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Sindy Forest",
    role: "Magento Certified Developer",
    rating: 5.0,
    location: "Brisbane",
    rate: "$70/hr",
    success: "100%",
    img: "https://i.pravatar.cc/100?img=2",
  },
];

export default function Freelancers() {
  const scrollRef = useRef();
  const intervalRef = useRef(null);

  // ✅ Mouse wheel → horizontal scroll
  useEffect(() => {
    const container = scrollRef.current;

    intervalRef.current = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: container.clientWidth,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // ✅ Button scroll (FULL WIDTH → 3 CARDS)
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 mb-8">
        <h2 className="text-2xl font-semibold">Highest Rated Freelancers</h2>

        <button className="text-blue-600 hover:underline">
          Browse All Freelancers →
        </button>
      </div>

      {/* Slider Wrapper */}
      <div className="relative max-w-6xl mx-auto">
        {/* Left Button */}
      {/* Left Button */}
<button
  onClick={() => scroll("left")}
  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 rounded z-10"
>
  ‹
</button>

        {/* Cards */}
       <div
  ref={scrollRef}
  onMouseEnter={() => clearInterval(intervalRef.current)}
  onMouseLeave={() => {
    intervalRef.current = setInterval(() => {
      const container = scrollRef.current;
      const maxScrollLeft =
        container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: container.clientWidth,
          behavior: "smooth",
        });
      }
    }, 3000);
  }}
  className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-4 md:px-10 snap-x snap-mandatory"
>
          {freelancers.map((f, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[calc(100%/3-16px)] snap-start bg-white rounded-lg p-6 text-center shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <img
                src={f.img}
                alt="profile"
                className="w-20 h-20 mx-auto rounded-full"
              />

              {/* Name */}
              <h3 className="mt-4 font-medium">{f.name}</h3>
              <p className="text-sm text-gray-500">{f.role}</p>

              {/* Rating */}
              <div className="flex justify-center items-center gap-1 mt-2">
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                  {f.rating}
                </span>

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Info */}
              <div className="flex justify-between text-sm text-gray-500 mt-4">
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> {f.location}
                </span>
              </div>

              <div className="flex justify-between text-sm mt-2">
                <span>{f.rate}</span>
                <span>{f.success}</span>
              </div>

              {/* Button */}
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                View Profile
              </button>
            </div>
          ))}
        </div>

       {/* Right Button */}
<button
  onClick={() => scroll("right")}
  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 rounded z-10"
>
  ›
</button>
      </div>
    </section>
  );
}
