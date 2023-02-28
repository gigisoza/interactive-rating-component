import star from './images/icon-star.svg';
import thanks from './images/illustration-thank-you.svg';
import { useState } from 'react';

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items, setItems] = useState("");

  const Button = ({ number }) => {
    return <button onClick={() => setItems(number)} className="btn-rating-list-number">{number}</button>
  }

  const ThankYou = ({ setIsSubmitted, items }) => {
    return (
      <div className="wrapper-second">
        <img src={thanks} alt="thanks" className="img-icon-second" />
        <div className="p-selected-flex">
          <p className="p-selected-number">You selected {items} out of 5</p>
        </div>
        <h2 className="wrapper-header-second">Thank you!</h2>
        <p className="wrapper-text-paragraph-second">We appreciate you taking the time to give a rating. If you ever need more support, 
  don't hesitate to get in touch!</p>
        <div className="div-btn-rating-submit">
          <button onClick={() => setIsSubmitted(false)} className="btn-rating-submit">RATE AGAIN</button> 
        </div>
      </div>
    );
  }

  return (
    <>
      {!isSubmitted && 
        <div className="wrapper">
          <img src={star} alt="star" className="img-icon" />
          <h2 className="wrapper-header">How did we do?</h2>
          <p className="wrapper-text-paragraph">Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>

          
          <ul className="btn-rating-list">
            <li>
              <Button number={1} />
            </li>
            <li>
              <Button number={2} />
            </li>
            <li>
              <Button number={3} />
            </li>
            <li>
              <Button number={4} />
            </li>
            <li>
              <Button number={5} />
            </li>
          </ul>

          <div className="div-btn-rating-submit">
            <button onClick={() => setIsSubmitted(true)} className="btn-rating-submit">SUBMIT</button> 
          </div>
    
        </div>
      }

      {isSubmitted && <ThankYou items={items} setIsSubmitted={setIsSubmitted}/>}

    </>
  );
}

export default App;
