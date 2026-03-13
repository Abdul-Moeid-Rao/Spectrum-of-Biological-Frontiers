import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Public Pages
import Home from './pages/public/Homepage';
import About from './pages/public/About';
import AimsScope from './pages/public/AimsScope';
import EditorialBoard from './pages/public/EditorialBoard';
import Ethics from './pages/public/Ethics';
import Archives from './pages/public/Archives';
import IssueArticles from './pages/public/IssueArticles';
import JournalOverview from './pages/public/JournalOverview';
import Indexing from './pages/public/Indexing';
import AuthorGuidelines from './pages/public/AuthorGuidelines';
import Contact from './pages/public/Contact';
import APC from './pages/public/APC';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Dashboard Pages
import Dashboard from './pages/dashboard/Dashboard';
import MySubmissions from './pages/dashboard/MySubmissions';
import MyReviews from './pages/dashboard/MyReviews';
import Profile from './pages/dashboard/Profile';
import SubmitManuscript from './pages/dashboard/SubmitManuscript';

// Placeholder for missing routes
const SubmissionsInfo = () => <div className="pt-32 pb-20 px-4 md:px-8 container mx-auto"><h1>Submission Info</h1></div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black selection:bg-brand-teal selection:text-white flex flex-col font-body">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal/aims-scope" element={<AimsScope />} />
            <Route path="/journal/editorial-board" element={<EditorialBoard />} />
            <Route path="/journal/overview" element={<JournalOverview />} />
            <Route path="/journal/indexing" element={<Indexing />} />
            <Route path="/authors/guidelines" element={<AuthorGuidelines />} />
            <Route path="/authors/apc" element={<APC />} />
            <Route path="/authors/submissions" element={<SubmissionsInfo />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/archives/:volume/:issue" element={<IssueArticles />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/submit" element={<SubmitManuscript />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/submissions" element={<MySubmissions />} />
              <Route path="/dashboard/reviews" element={<MyReviews />} />
              <Route path="/dashboard/profile" element={<Profile />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
