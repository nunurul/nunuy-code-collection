import "../style/password.css";
import bg from "../assets/password/bg-1.png";
import { useState } from "react";

const Password = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [cofirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisible = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisible = (e) => {
    e.preventDefault();
    setConfirmPasswordVisible(!cofirmPasswordVisible);
  };
  return (
    <div className="password-page">
      <img className="bg-password" src={bg} alt="" />
      <div className="password-content">
        <div className="password-text">
          <h2>Confirm New Password</h2>
          <p className="desc">
            Make sure not to forget your new password again.
          </p>
        </div>
        <div className="password-form">
          <div className="item-form">
            <div className="box-input">
              <label className="label-input" htmlFor="password">
                Password
              </label>
              <div className="box-password">
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="input-password"
                  id="password"
                />
                <div className="svg-icon" onClick={togglePasswordVisible}>
                  {passwordVisible ? (
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00002 3.18281C7.36821 3.18698 6.76346 3.43982 6.31669 3.88659C5.86992 4.33336 5.61709 4.93811 5.61292 5.56992C5.61292 6.87647 6.69348 7.95703 8.00002 7.95703C9.30577 7.95703 10.3871 6.87647 10.3871 5.56992C10.3871 4.26417 9.30577 3.18281 8.00002 3.18281Z"
                        fill="#4D432A"
                      />
                      <path
                        d="M8 0C1.9264 0 0.101054 5.26517 0.0843446 5.31848L0 5.56992L0.0835489 5.82136C0.101054 5.87468 1.9264 11.1398 8 11.1398C14.0736 11.1398 15.8989 5.87468 15.9157 5.82136L16 5.56992L15.9164 5.31848C15.8989 5.26517 14.0736 0 8 0ZM8 9.54844C3.74219 9.54844 2.0927 6.48816 1.69326 5.56992C2.09429 4.6485 3.74458 1.59141 8 1.59141C12.2578 1.59141 13.9073 4.65168 14.3067 5.56992C13.9057 6.49135 12.2554 9.54844 8 9.54844Z"
                        fill="#4D432A"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.9996 13.3653C8.75638 13.3653 9.44757 13.2829 10.078 13.1405L8.67238 11.7349C8.45399 11.7517 8.23239 11.7653 7.9996 11.7653C3.7189 11.7653 2.06054 8.6886 1.65895 7.76542C1.9605 7.09248 2.36777 6.47212 2.86532 5.92786L1.74695 4.80949C0.516576 6.14306 0.0501866 7.48622 0.0413868 7.51262C-0.0137956 7.67691 -0.0137956 7.85473 0.0413868 8.01901C0.0581865 8.07181 1.89334 13.3653 7.9996 13.3653ZM7.9996 2.16555C6.53003 2.16555 5.32286 2.48234 4.31649 2.95033L1.36536 0L0.234182 1.13117L14.6338 15.5308L15.765 14.3997L13.1099 11.7445C15.201 10.1838 15.9474 8.05261 15.9586 8.01901C16.0138 7.85473 16.0138 7.67691 15.9586 7.51262C15.941 7.45902 14.1059 2.16555 7.9996 2.16555ZM11.9771 10.6118L10.1532 8.78779C10.3051 8.4758 10.3995 8.13261 10.3995 7.76542C10.3995 6.45265 9.31237 5.36547 7.9996 5.36547C7.63241 5.36547 7.28922 5.45987 6.97802 5.61267L5.53166 4.1663C6.32565 3.89384 7.16019 3.75831 7.9996 3.76551C12.2803 3.76551 13.9387 6.84224 14.3403 7.76542C14.0987 8.319 13.4075 9.63897 11.9771 10.6118Z"
                        fill="#4D432A"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className="box-input">
              <label className="label-input" htmlFor="confirm-password">
                Confirm Password
              </label>
              <div className="box-password">
                <input
                  type={cofirmPasswordVisible ? "text" : "password"}
                  className="input-password"
                  id="confirm-password"
                />
                <div
                  className="svg-icon"
                  onClick={toggleConfirmPasswordVisible}
                >
                  {cofirmPasswordVisible ? (
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00002 3.18281C7.36821 3.18698 6.76346 3.43982 6.31669 3.88659C5.86992 4.33336 5.61709 4.93811 5.61292 5.56992C5.61292 6.87647 6.69348 7.95703 8.00002 7.95703C9.30577 7.95703 10.3871 6.87647 10.3871 5.56992C10.3871 4.26417 9.30577 3.18281 8.00002 3.18281Z"
                        fill="#4D432A"
                      />
                      <path
                        d="M8 0C1.9264 0 0.101054 5.26517 0.0843446 5.31848L0 5.56992L0.0835489 5.82136C0.101054 5.87468 1.9264 11.1398 8 11.1398C14.0736 11.1398 15.8989 5.87468 15.9157 5.82136L16 5.56992L15.9164 5.31848C15.8989 5.26517 14.0736 0 8 0ZM8 9.54844C3.74219 9.54844 2.0927 6.48816 1.69326 5.56992C2.09429 4.6485 3.74458 1.59141 8 1.59141C12.2578 1.59141 13.9073 4.65168 14.3067 5.56992C13.9057 6.49135 12.2554 9.54844 8 9.54844Z"
                        fill="#4D432A"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.9996 13.3653C8.75638 13.3653 9.44757 13.2829 10.078 13.1405L8.67238 11.7349C8.45399 11.7517 8.23239 11.7653 7.9996 11.7653C3.7189 11.7653 2.06054 8.6886 1.65895 7.76542C1.9605 7.09248 2.36777 6.47212 2.86532 5.92786L1.74695 4.80949C0.516576 6.14306 0.0501866 7.48622 0.0413868 7.51262C-0.0137956 7.67691 -0.0137956 7.85473 0.0413868 8.01901C0.0581865 8.07181 1.89334 13.3653 7.9996 13.3653ZM7.9996 2.16555C6.53003 2.16555 5.32286 2.48234 4.31649 2.95033L1.36536 0L0.234182 1.13117L14.6338 15.5308L15.765 14.3997L13.1099 11.7445C15.201 10.1838 15.9474 8.05261 15.9586 8.01901C16.0138 7.85473 16.0138 7.67691 15.9586 7.51262C15.941 7.45902 14.1059 2.16555 7.9996 2.16555ZM11.9771 10.6118L10.1532 8.78779C10.3051 8.4758 10.3995 8.13261 10.3995 7.76542C10.3995 6.45265 9.31237 5.36547 7.9996 5.36547C7.63241 5.36547 7.28922 5.45987 6.97802 5.61267L5.53166 4.1663C6.32565 3.89384 7.16019 3.75831 7.9996 3.76551C12.2803 3.76551 13.9387 6.84224 14.3403 7.76542C14.0987 8.319 13.4075 9.63897 11.9771 10.6118Z"
                        fill="#4D432A"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button className="btn-input" type="submit">
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
