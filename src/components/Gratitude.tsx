import { SetSuccess } from "./Form";

type EmailType = {
  emailData: string;
};

const Gratitude = ({ emailData, setFunction }: EmailType & SetSuccess) => {
  return (
    <div className="gratitude-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 64 64"
      >
        <defs>
          <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stop-color="#FF6A3A" />
            <stop offset="100%" stop-color="#FF527B" />
          </linearGradient>
        </defs>
        <g fill="none">
          <circle cx="32" cy="32" r="32" fill="url(#a)" />
          <path
            stroke="#FFF"
            stroke-width="4"
            d="m18.286 34.686 8.334 7.98 19.094-18.285"
          />
        </g>
      </svg>
      <h1 className="tittle">Thanks for subscribing!</h1>
      <span className="manual">
        A confirmation email has been sent to <strong>{emailData}</strong>{" "}
        Please open it and click the button inside to confirm your subscription.
        Dismiss message
      </span>
      <button onClick={() => setFunction(false)} className="dimiss-button">
        Dismiss message
      </button>
    </div>
  );
};

export default Gratitude;
