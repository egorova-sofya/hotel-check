import "./App.css";
import LoginPage from "./pages/AuthorisationPage/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <h1> App</h1>
      <LoginPage />

      <div
        style={{
          height: "20px",
          background: "linear-gradient(var(--primaryGradient))",
        }}
      ></div>
    </div>
  );
}

export default App;
