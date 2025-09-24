import React, { useRef, useState } from "react";
import { useCountdownTimer } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

interface UserProps {
  firstName: string;
  lastName: string;
  mobileNo: string;
  isOtpVisible: boolean;
  otp: string[];
}

const CreateAccount = () => {
  const navigate = useNavigate();
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const { remaining, start } = useCountdownTimer(60);
  const [state, setState] = useState<UserProps>({
    firstName: "",
    lastName: "",
    mobileNo: "",
    isOtpVisible: false,
    otp: ["", "", "", ""],
  });
  const updateState = (key: Partial<UserProps>) => {
    setState((prev) => ({ ...prev, ...key }));
  };
  const handleOtp = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { firstName, lastName, mobileNo } = state;
    e.preventDefault();
    const reqBody = {
      firstName,
      lastName,
      mobileNo,
    };
    console.log("req body", reqBody);
    navigate("/");
  };
  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateState({ isOtpVisible: true });
    start();
  };
  const handleResend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    start();
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { otp } = state;
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    updateState({ otp: newOtp });

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (!value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };
  const disableOtp = () => state.otp.includes("");
  const disableBtn = () => {
    const { firstName, lastName, mobileNo } = state;
    return (
      firstName === "" ||
      lastName === "" ||
      mobileNo === "" ||
      mobileNo.length < 10
    );
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="absolute top-20 w-72 h-72 bg-blue-500/60 rounded-full blur-[120px]" />
      <div className="relative w-[550px] p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-xl font-bold">🔒</span>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-white text-center uppercase">
          Create Account
        </h2>
        <>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-500 disabled:cursor-not-allowed"
              value={state?.firstName}
              disabled={state.isOtpVisible}
              onChange={(e) => updateState({ firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-500 disabled:cursor-not-allowed"
              value={state?.lastName}
              disabled={state.isOtpVisible}
              onChange={(e) => updateState({ lastName: e.target.value })}
            />
          </div>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-500 disabled:cursor-not-allowed"
              value={state?.mobileNo}
              onChange={(e) => updateState({ mobileNo: e.target.value })}
              disabled={state.isOtpVisible}
            />
          </div>
          {state.isOtpVisible && (
            <>
              <div className="flex justify-between items-center">
                <p className="mt-4 mb-2 font-semibold text-white text-base uppercase tracking-wider">
                  Enter OTP
                </p>
                <p
                  onClick={() => updateState({ isOtpVisible: false })}
                  className="mt-4 mb-2 font-semibold text-white text-sm underline tracking-wider hover:cursor-pointer"
                >
                  Change Number
                </p>
              </div>
              <div className="flex justify-between gap-2">
                {state.otp.map((val, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    ref={(el) => {
                      inputsRef.current[i] = el;
                    }}
                    value={val}
                    onChange={(e) => handleChange(e, i)}
                    className="w-12 h-12 text-center text-lg rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                ))}
              </div>
            </>
          )}
        </>
        <button
          onClick={(e) => {
            if (state?.isOtpVisible) handleOtp(e);
            else handleSignIn(e);
          }}
          className="w-full mt-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-md transition disabled:bg-gray-400 hover:cursor-pointer disabled:cursor-not-allowed"
          disabled={state?.isOtpVisible ? disableOtp() : disableBtn()}
        >
          {state?.isOtpVisible ? "Verify OTP" : "Get OTP"}
        </button>
        {state.isOtpVisible && (
          <button
            onClick={(e) => handleResend(e)}
            className="w-full mt-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-md transition disabled:bg-gray-400 hover:cursor-pointer disabled:cursor-not-allowed"
            disabled={remaining !== 0}
          >
            Resend OTP ({remaining})
          </button>
        )}
        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 hover:underline hover:cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
