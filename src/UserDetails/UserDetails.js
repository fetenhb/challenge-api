import React from "react";
import "../UserDetails/UserDetails.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const UserDetails = (props) => {
  const userFound = props.users.find((a) => a.name == props.match.params.user);

  console.log(userFound && userFound.name);
  return (
    <div style={{ display: "flex" }}>
      {/* --------------------------- home ------------------------- */}
      <div
        class="icons"
        style={{
          alignSelf: "flex-start",
          marginTop: "-20px",
          marginLeft: "50px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            padding: "10px 5px",
            display: "inline-block",
            fontSize: "100px",
            color: "#ffffff",
            textAlign: " center",
            opacity: "0.65",
          }}
        >
          <i class="ion-ios-home"></i>
        </Link>
      </div>

      {props.loading ? (
        <Loading />
      ) : (
        <figure class="snip1344">
          <img
            src={userFound && userFound.img}
            alt="profile-sample1"
            class="background"
          />
          <img
            src={userFound && userFound.img}
            alt="profile-sample1"
            class="profile"
          />
          <figcaption>
            <h3
              style={{
                fontSize: "30px",
                marginTop: "-20px",
                marginBottom: "20px",
              }}
            >
              {userFound && userFound.name}
              <span>{userFound && userFound.nickname}</span>
            </h3>
            <p> Birthday : {userFound && userFound.birthday}</p>
            <p> occupation : {userFound && userFound.occupation.join(", ")}</p>
            <p> status : {userFound && userFound.status}</p>
            <p> portrayed : {userFound && userFound.portrayed}</p>
            <p> appearance : {userFound && userFound.appearance.join(", ")}</p>

            <div class="icons">
              <i class="ion-arrow-right-a"></i> {console.log(props.loading)}
              <Link
                to={`/Episodes/${userFound && userFound.name}`}
                loading={props.loading}
              >
                <i class="ion-ios-film-outline"></i>
              </Link>
            </div>
          </figcaption>
        </figure>
      )}
    </div>
  );
};

export default UserDetails;
