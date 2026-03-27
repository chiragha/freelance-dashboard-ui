import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FrontPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // redirect after 3 sec
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      
      <h1 className="flex items-center gap-2 text-3xl font-bold animate-fadeIn">
        Welcome to
        <div className="bg-blue-600 text-white text-2xl font-bold px-2 py-1 rounded animate-bounce">
          F
        </div>
        <span className="text-lg font-semibold animate-slideIn">
          ind.Job
        </span>
      </h1>

    </div>
  );
}