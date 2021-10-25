import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <div className="col-12 text-center fs-1 fw-bold bg-primary py-3">React Pagination</div>
          <div className="col-12 d-flex p-4 justify-content-center bg-primary">
            <button className="bg-danger mx-3 text-center">
              <NavLink
                exact
                to="/"
                className="text-white text-decoration-none fs-4 px-3 py-2"
              >
                Using React Hooks
              </NavLink>
            </button>
            <button className="bg-danger mx-3 text-center">
              <NavLink
                exact
                to="/npm"
                className="text-white text-decoration-none fs-4 px-3 py-2"
              >
                Using React Paginate
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
