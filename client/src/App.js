import React, { useEffect } from "react";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import HomeLayout from "./pages/home/templates/HomeLayout";

function App() {
  useEffect(() => {

    const htmlElement = document.documentElement;
    htmlElement.classList.add("wide", "wow-animation", "desktop", "landscape", "rd-navbar-static-linked");

  }, []);

  return (
    <PrimeReactProvider>
      <HomeLayout />
    </PrimeReactProvider>
  );
}

export default App;
