import React from "react";
import "../Users/Users.scss";
import { Link } from "react-router-dom";

const Users = ({ el, loading }) => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
      />
      <Link to={`/UserDetails/${el.name}`} loading={loading}>
        {console.log(loading)}

        <a class="card">
          <div
            class="card__background"
            style={{
              backgroundImage: `url(${el.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",

              width: "100%",
            }}
          ></div>
          <div class="card__content">
            <p class="card__category">{el.category}</p>
            <h3 class="card__heading">{el.name}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Users;
