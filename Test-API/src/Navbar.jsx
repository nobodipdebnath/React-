import React, { use } from "react";
import { AuthContext } from "./Context/AuthContext";
import Testimonial from "./Testimonial";
import Loading from "./Loading";

const Navbar = () => {
  const { users, loading} = use(AuthContext);
  const newUser = users;
//   console.log(newUser);
  return (
    <div>
        {
            loading && <Loading></Loading>
        }
      <div className="grid grid-cols-4 gap-6">
        {newUser.map((user, idx) => (
          <Testimonial key={idx} user={user}></Testimonial>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
