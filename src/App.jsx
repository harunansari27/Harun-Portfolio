import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Portfolio Page */}
        <Route
          path="/"
          element={
            <div className='relative z-0 bg-primary'>
              <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
                <Footer />
              </div>
            </div>
          }
        />

        {/* Resume Page */}
        <Route path="/Harun Ansari 8052201243.pdf" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
