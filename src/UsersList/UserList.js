import React from "react";
import Loading from "../Loading/Loading";
import Users from "../Users/Users";
import "../Users/Users.scss";

const UserList = ({ users, nameSearch, loading }) => {
  return (
    <section class="hero-section">
      <div class="card-grid">
        {loading ? (
          <Loading />
        ) : (
          users
            .filter((el) =>
              el.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
            )
            .map((el, i) => <Users el={el} key={i} loading={loading} />)
        )}
      </div>
    </section>
  );
};

export default UserList;
