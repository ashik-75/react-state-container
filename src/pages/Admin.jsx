import React from "react";

const Admin = () => {
  return (
    <div className="h-[100vh] d-flex items-center justify-center">
      <div className="tracking-2 text-2xl">
        Admin Page (Protected: authenticated user with role 'admin' required)
      </div>
    </div>
  );
};

export default Admin;
