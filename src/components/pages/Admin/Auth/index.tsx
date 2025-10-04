import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Snack } from "../../../../utils/CommonFunction";
import { useDispatch } from "react-redux";
import { loginAuthAsync } from "../../../../redux/features/Auth/authThunk";
import { type AppDispatch } from "../../../../redux/store";

const Auth: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const reqBody = {
      username: username,
      password: password,
    };
    const result = await dispatch(loginAuthAsync(reqBody));
    console.log("req body", result);
    // navigate("/admin/dashboard");
  };
  const disableBtn = () => {
    return username === "" || password === "";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="absolute top-20 w-72 h-72 bg-blue-500/60 rounded-full blur-[120px]" />

      <div className="relative w-[380px] p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-xl font-bold">🔒</span>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-white text-center">
          Welcome back
        </h2>
        <p className="text-gray-300 text-center text-sm mt-1">
          Please enter your details to sign in.
        </p>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={(e) => {
            handleLogin(e);
          }}
          className="w-full mt-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-md transition disabled:bg-gray-400 hover:cursor-pointer"
          disabled={disableBtn()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;
