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
        <Route
          path="/post_job"
          element={
            <DashboardLayout>
              <PostJob />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/message"
          element={
            <DashboardLayout>
              <MessagesPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/review"
          element={
            <DashboardLayout>
              <ReviewsSection freelancerId={parseInt(id)} />
            </DashboardLayout>
          }
        />

        <Route
          path="/bookmarks"
          element={
            <DashboardLayout>
              <BookmarkPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <DashboardLayout>
              <SettingsPage />
            </DashboardLayout>
          }
        />

        <Route
          path="/freelancer/:id"
          element={
            <DashboardLayout>
              <FreelancerProfile />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
