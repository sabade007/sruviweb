import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { getThememode } from "../../hooks/getThememode";

const Lottie = ({ src, autoplay, loop, ...props }) => {
  const { isDark } = getThememode();

  return (
    <DotLottieReact
      src={src}
      autoplay={autoplay}
      loop={loop}
      {...props}
      style={isDark ? { filter: "invert(100%) hue-rotate(180deg)" } : undefined}
    />
  );
};

export default Lottie;
