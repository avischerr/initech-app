import '../styles.css';
import Button from './Button.jsx';

const Cover = (props) => {
  return (
    <div className="cover">
      <div className="image-container" id="cover-image-container">
        <div className="cover-text">
          Unlock your<br></br>full potential
          <div id="email-signup">
            <input type="text" id="email-input" placeholder="Email address"></input>
            <Button text="Sign Up" id="signup-button" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Cover;