import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import MainContent from "./pages/main/mainContent";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
      <MainContent />
  );
}

export default App;