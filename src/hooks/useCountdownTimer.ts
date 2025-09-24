import { useEffect, useState } from "react";

export const useCountdownTimer = (initialSeconds: number = 0) => {
  const [remaining, setRemaining] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  const start = () => {
    setRemaining(initialSeconds);
    setIsActive(true);
    return;
  };

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  return { remaining, start };
};
