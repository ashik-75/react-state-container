import React from "react";

const Analytics = () => {
  return (
    <div className="h-[100vh] d-flex items-center justify-center">
      <div className="tracking-2 text-2xl">
        Analytics Page (Protected: authenticated user with permission 'analyze'
        required)
      </div>
    </div>
  );
};

export default Analytics;
