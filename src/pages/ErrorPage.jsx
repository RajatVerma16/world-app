import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops!  An error occurred...We are working to fix This</h1>
      <br /> <br /> <br /> <br />
      <h1>You may check the URL for this error</h1>
      <br /> <br /> <br /> <br />


      {error && <p>{error.data}</p>}


      {/* This is a component provided by the react-router-dom library, It acts like a special anchor tag (<a>) designed for navigating within your React application without causing a full page refresh. */}
      <NavLink to="/">
      <br /> <br />
     
        <button   >Click the button Go Home page </button>

      </NavLink>
    </div>
  );
};
