import logo from "../covercrop.jpg";
import "../App.css";

const Contact = () => {
  return (
    <div className="App-home">
      <p>
        <code>CONTACTS</code>
      </p>
      <a
        className="App-link"
        href="https://github.com/stevelab1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p><code>stevelab1</code></p>
        <p>
          <img src={logo} className="App-logo-small" alt="logo" />
        </p>
      </a>
    </div>
  );
};

export default Contact;
