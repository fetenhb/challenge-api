import React from "react";
import "../SearchMovie/SearchMovie.css";
import { Link } from "react-router-dom";

const SearchMovie = ({ setNameSearch }) => {
  return (
    <div>
      <form
        action="#"
        autocomplete="off"
        className="frm"
        style={{ marginLeft: "200px" }}
      >
        {/* --------------------------- home ------------------------- */}
        <div class="icons" style={{ alignSelf: "flex-end" }}>
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
        {/* --------------------------- search by name ------------------------- */}
        <fieldset
          class="url"
          style={{ marginRight: "150px", paddingTop: "50px" }}
        >
          <input
            id="url"
            type="text"
            name="url"
            required
            className="inpt"
            onChange={(e) => setNameSearch(e.target.value)}
          />
          <label
            for="url"
            className="lab"
            style={{
              marginRight: "150px",
              paddingTop: "50px",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            <i class="fa fa-search" aria-hidden="true"></i> Search
          </label>
          <div class="after"></div>
        </fieldset>
      </form>
    </div>
  );
};

export default SearchMovie;
