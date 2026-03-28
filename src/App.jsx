import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FrontPage from "./pages/FrontPage";
import JobsPage from "./pages/JobsPage";
import JobDetails from "./pages/JobDetails";
import BrowseCompanies from "./pages/BrowseCompanies";
import DashboardLayout from "./components/DashboardLayout";
import PostJob from "./pages/PostJob";
import Dashboard from "./pages/Dashboard";
import FreelancerProfile from "./pages/FreelancerProfile";
import MessagesPage from "./pages/MessagesPage";
import ReviewsSection from "./pages/ReviewsSection";
import { useParams } from "react-router-dom";
import { useState } from "react";
import BookmarkPage from "./pages/BookmarkPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const { id } = useParams();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/companies" element={<BrowseCompanies />} />
        <Route path="/post_job" element={<PostJob />}/>
         <Route path="/message" element={<MessagesPage />}/>


        <Route path="/dashboard" element={<DashboardLayout />}>  
          {/* Default dashboard page */}
          <Route index element={<Dashboard />} />
           
        </Route>
        <Route path="/bookmarks" element={<BookmarkPage />} />



       
        <Route
          path="/review"
          element={
              <ReviewsSection freelancerId={parseInt(id)} /> 
          }
        />

       

        <Route
          path="/settings"
          element={
              <SettingsPage />
          }
        />

        <Route
          path="/freelancer/:id"
          element={
              <FreelancerProfile />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;