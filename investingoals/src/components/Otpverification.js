// import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
// import { CgSpinner } from "react-icons/cg";
import './login.css';
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import Signup from "./Signup";


const Otpverification= () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
     <section className="hero-section inner-page">
        
       
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-md-7 text-center hero-text">
                  <h1 data-aos="fade-up" data-aos-delay="0">
                    Signup
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <div className="main">
      
      <div className="container signup box col-6" data-aos="fade-up">

        <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
            <>
            <Signup />
            </>
          
        ) : (
            <>
            
            {showOTP ? (
                <>
                <br />
                <br />
                <br />
                
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                 
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
                <>
              <div className='centers'>
                
              <div className="col-12 mt-3 mb-2 ">
                <br />
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                  >
                    <h5>

                  Verify your phone number
                    </h5>
                </label>
                
                
                </div>
                <div>
                <PhoneInput id="mobileinput" country={"in"} value={ph} onChange={setPh} />
                </div>
                    
                <br />
                <button
                  onClick={onSignup}
                  className="btn btn-outline-light"
                  >
                  
                  <span>Send code via SMS</span>
                </button>
                <br />
                <br />
                <br />
              </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
          
        </div>
      </div>
 
    
        </>
  );
};

export default Otpverification;
