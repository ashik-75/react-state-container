import React, { useState } from "react";

const debounce = (fn) => {
  let timeOut;
  return function () {
    if (timeOut) {
      clearTimeout(timeOut);
    }

    timeOut = setTimeout(() => {
      fn();
    }, 500);
  };
};

const Dashboard = () => {
  const [count, setCount] = useState(0);

  const handleCount = debounce(function () {
    setCount((count) => count + 1);
  });

  console.log("count is here", count);

  return (
    <div className="h-[100vh] w-[50%] mx-auto mt-20">
      <button className="btn btn-info mb-5" onClick={() => handleCount()}>
        Debounce
      </button>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
            <input
              type="text"
              placeholder="Search"
              class="input input-bordered"
            />
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
