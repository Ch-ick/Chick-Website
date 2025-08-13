import "./App.css";
import Navbar from "./components/Navbar";
import loginWindowImage from "./assets/loginWindow.png";
import mainWindowImage from "./assets/mainWindow.png";
import settingsWindowImage from "./assets/settingsWindow.png";
import popupImage from "./assets/popup-example.png";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <section id="home" className="section home-section">
          <div className="home-text">
            <h1>Welcome to Chick</h1>
            <p>
              Chick is a free desktop chat client for Kick that makes engaging
              with your streams effortless. Streamers can show chat messages as
              a popup and have them read aloud with text-to-speech (TTS),
              keeping you in the loop without missing a moment.
            </p>
            <p>
              Lightweight, intuitive, and always improving, Chick is just
              getting started — with more features on the horizon!
            </p>
          </div>

          <div className="home-images">
            <div className="home-images-row">
              <div className="left-column">
                <img
                  src={loginWindowImage}
                  alt="Chick settings window"
                  className="login-window-image"
                />
              </div>
              <div className="right-column">
                <img
                  src={mainWindowImage}
                  alt="Chick main window"
                  className="main-window-image"
                />
              </div>
            </div>
            <div className="home-images-row">
              <div className="right-column">
                <img
                  src={popupImage}
                  alt="Chick main window"
                  className="popup-image"
                />
              </div>
              <div className="left-column">
                <img
                  src={settingsWindowImage}
                  alt="Chick settings window"
                  className="settings-window-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="guide" className="section guide-section">
          <h2>Getting Started</h2>
          <div className="guide-steps">
            <div className="guide-step">
              <span className="step-number">1</span>
              <p>Download the Chick app</p>
            </div>
            <div className="guide-step">
              <span className="step-number">2</span>
              <p>Install it on your desktop</p>
            </div>
            <div className="guide-step">
              <span className="step-number">3</span>
              <p>Login with your Kick account</p>
            </div>
            <div className="guide-step">
              <span className="step-number">4</span>
              <p>Enjoy!</p>
            </div>
          </div>
        </section>

        <section id="download" className="section download-section">
          <p>Download Chick app here:</p>
          <button className="download-button">Download</button>
        </section>
      </div>
    </div>
  );
}

export default App;
