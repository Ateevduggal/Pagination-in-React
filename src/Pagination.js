import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(10);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/comments");
      const dataJ = await data.json();
      setPost(dataJ);
    };
    fetchApi();
  }, []);

  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = post.slice(firstPost, lastPost);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(post.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <table>
            <thead>
              <tr className="border-2 border-dark text-center my-2">
                <th className="col-1 border-2 border-dark fs-4 text-capitalize">
                  S No.
                </th>
                <th className="col-3 border-2 border-dark fs-4 text-capitalize">
                  Name
                </th>
                <th className="col-2 border-2 border-dark fs-4 text-capitalize">
                  Email
                </th>
                <th className="col-6 border-2 border-dark fs-4 text-capitalize">
                  Comment
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPost.map((Val) => {
                return (
                  <>
                    <tr
                      className="border-2 border-dark text-center"
                      key={Val.id}
                    >
                      <td className="border-2 border-dark text-capitalize">
                        {Val.id}
                      </td>
                      <td className="border-2 border-dark text-capitalize">
                        {Val.name}
                      </td>
                      <td className="border-2 border-dark text-capitalize">
                        {Val.email}
                      </td>
                      <td className="border-2 border-dark text-capitalize">
                        {Val.body}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>

          <div className="my-3 text-center">
            <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setNumber(number - 1)}
            >
              Previous
            </button>

            {pageNumber.map((Elem) => {
              return (
                <>
                  <button
                    className="px-3 py-1 m-1 text-center btn-outline-dark"
                    onClick={() => ChangePage(Elem)}
                  >
                    {Elem}
                  </button>
                </>
              );
            })}
            <button
              className="px-3 py-1 m-1 text-center btn-primary"
              onClick={() => setNumber(number + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
