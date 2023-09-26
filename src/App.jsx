import { useState } from "react";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Intro from "./pages/Intro";
import Services from "./pages/Services";
import Works from "./pages/Works";

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => {
    setIsDark((old) => !old);
  };
  return (
    <div className={isDark && `dark`}>
      <Intro toggleDark={toggleDark} />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
