import { Bounce, toast } from "react-toastify";

const convertMoney = (value: string | number) => {
  const amount = Number(value);
  if (isNaN(amount) || !isFinite(amount)) {
    return "₹0";
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    // minimumFractionDigits: 0, // optional: removes .00
  }).format(amount);
};

const convertMoneyRemoveDot = (value: string | number) => {
  const amount = Number(value);
  if (isNaN(amount) || !isFinite(amount)) {
    return "₹0";
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0, // optional: removes .00
  }).format(amount);
};

const fetchDiscount = (original: number, discount: number) => {
  const convertOriginal = Number(original);
  const convertDiscount = Number(discount);
  const discountPer = 100 - (100 * convertDiscount) / convertOriginal;
  return Math.floor(discountPer || 0);
};

const startTimer = (totalSeconds: number) => {
  let remaining = totalSeconds;
  function formatTime(sec: number) {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  }
  const interval = setInterval(() => {
    remaining--;

    if (remaining < 0) {
      clearInterval(interval);
    } else {
      const time = formatTime(remaining);
      return time;
    }
  }, 1000);
  return formatTime(remaining);
};

const Snack = (type: string, message: string) => {
  const snackType = type === "error" ? "error" : "success";
  return toast(message, {
    type: snackType,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

const isNumber = (value: string) => {
  const regex = /^[+-]?(\d+(\.\d+)?|\.\d+)$/;
  return regex.test(value.trim());
};

export {
  convertMoney,
  convertMoneyRemoveDot,
  fetchDiscount,
  startTimer,
  Snack,
  isNumber,
};
