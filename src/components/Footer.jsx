import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-white text-xl font-bold">
            Find<span className="text-blue-500">.Job</span>
          </h2>
          <p className="mt-4 text-sm">
            Find the best jobs and freelancers in one place. Build your career
            with us.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <Facebook className="cursor-pointer hover:text-white" />
            <Twitter className="cursor-pointer hover:text-white" />
            <Instagram className="cursor-pointer hover:text-white" />
            <Linkedin className="cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* For Candidates */}
        <div>
          <h3 className="text-white font-semibold mb-4">For Candidates</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">Browse Jobs</li>
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">Browse Categories</li>
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">Candidate Dashboard</li>
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">Saved Jobs</li>
          </ul>
        </div>

        {/* For Employers */}
        <div>
          <h3 className="text-white font-semibold mb-4">For Employers</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">Post a Job</li>
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">Browse Candidates</li>
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">Employer Dashboard</li>
            <li className="hover:text-white hover:translate-x-1 transition cursor-pointer">Applications</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@findjob.com</li>
            <li>Phone: +91 1234567890</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Find.Jobs. All rights reserved.
      </div>
    </footer>
  );
}