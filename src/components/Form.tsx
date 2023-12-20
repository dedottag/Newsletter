import React from "react";
import { useForm } from "react-hook-form";
import checked from "./images/icon-list.svg";

type FormData = {
  email: string;
  chek: boolean;
};

export type SetSuccess = {
  setFunction: React.Dispatch<React.SetStateAction<boolean>>;
};

type SetEmail = {
  emailFuncsion: React.Dispatch<React.SetStateAction<string>>;
};

const Form = ({ setFunction, emailFuncsion }: SetSuccess & SetEmail) => {
  const form = useForm<FormData>();
  const { handleSubmit, register, formState } = form;
  const { errors } = formState;

  function onSubmit(data: FormData) {
    console.log(data);
    if (data.email) {
      setFunction(true);
      emailFuncsion(data.email);
    }
  }
  return (
    <div className="form-container">
      <h1>Stay updated!</h1>
      <span>Join 60,000+ product managers receiving monthly updates on:</span>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="checked-container">
          <div className="checkboxed">
            <img className="check-img" src={checked} alt="img" />
            Product discovery and building what matters
          </div>
          <div className="checkboxed">
            <img className="check-img" src={checked} alt="img" />
            Measuring to ensure updates are a success
          </div>
          <div className="checkboxed">
            <img className="check-img" src={checked} alt="img" />
            And much more!
          </div>
        </div>
        <label>
          <div className="message-container">
            <span className="email-label">Email address</span>
            <span className="message">{errors.email?.message}</span>
          </div>
          <input
            className={errors.email ? "error-input" : "email-adress"}
            type="text"
            inputMode="email"
            placeholder="email@company.com"
            {...register("email", {
              pattern: {
                value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
                message: "Valid email required",
              },
            })}
          />
        </label>
        <button className="sub-button" type="submit">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

export default Form;
