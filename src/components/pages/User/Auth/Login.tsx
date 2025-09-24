import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Snack } from "../../../../utils/CommonFunction";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [mobileNo, setMobileNo] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  //useSyncExternalStorage for sync update in redux or other, useId for generating unique id
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (!value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };
  const handleGetOtp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOtpVisible(true);
    Snack("success", "OTP sent successfully");
  };
  const handleVerifyOtp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const reqBody = {
      mobileNo,
      otp: otp.join(""),
    };
    Snack("success", "Welcome Arpan");
    navigate("/");
    console.log("req body", reqBody);
  };
  const disableBtn = () => {
    return mobileNo === "" || mobileNo.length < 10;
  };
  const disableOtp = () => otp.includes("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative">
      {/* Glow */}
      <div className="absolute top-20 w-72 h-72 bg-blue-500/60 rounded-full blur-[120px]" />

      {/* Glass Card */}
      <div className="relative w-[380px] p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-xl font-bold">🔒</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-white text-center">
          Welcome back
        </h2>
        {isOtpVisible ? (
          <p className="text-gray-300 text-center text-sm mt-1">
            Otp sent successfully {mobileNo}
            <br />
            <span className="underline text-blue-500 hover:cursor-pointer">
              Change Mobile
            </span>{" "}
          </p>
        ) : (
          <p className="text-gray-300 text-center text-sm mt-1">
            Please enter your details to sign in.
          </p>
        )}

        {/* Mobile Input */}
        {!isOtpVisible ? (
          <div className="mt-6">
            <input
              type="text"
              placeholder="Mobile No"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex justify-between gap-2 mt-4">
            {otp.map((val, i) => (
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
        )}

        <button
          onClick={(e) => {
            if (isOtpVisible) handleVerifyOtp(e);
            else handleGetOtp(e);
          }}
          className="w-full mt-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-md transition disabled:bg-gray-400 hover:cursor-pointer"
          disabled={isOtpVisible ? disableOtp() : disableBtn()}
        >
          {isOtpVisible ? "Verify OTP" : "Get OTP"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <hr className="flex-1 border-gray-500" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-500" />
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-white/20 text-white border border-white/30 hover:bg-white/30 transition hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        {/* Footer */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/createAccount")}
            className="text-blue-400 hover:underline hover:cursor-pointer"
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
