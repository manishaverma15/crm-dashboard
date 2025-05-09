import React from "react";
import { useResolvedTheme } from "@/lib/hooks";

const PendingOrdersIcon = () => {
  const { isDarkTheme } = useResolvedTheme();

  return isDarkTheme ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="55"
      height="54"
      viewBox="0 0 55 54"
    >
      <image
        xlinkHref="data:image/png;base64,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"
        x="0"
        y="0"
        width="55"
        height="54"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="55"
      height="54"
      viewBox="0 0 55 54"
    >
      <image
        xlinkHref="data:image/png;base64,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"
        x="0"
        y="0"
        width="55"
        height="54"
      />
    </svg>
  );
};

export default PendingOrdersIcon;
