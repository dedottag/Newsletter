import image from "./design/image.png";
import Form from "./Form";
import { useState } from "react";
import Gratitude from "./Gratitude";
import logo from "../components/images/illustration-sign-up-desktop.svg";

const App: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  if (success) {
    return <Gratitude emailData={email} setFunction={setSuccess} />;
  }
  return (
    <div className="app-container">
      <Form setFunction={setSuccess} emailFuncsion={setEmail} />
      <img className="img" src={logo} alt="img" />
    </div>
  );
};

export default App;
