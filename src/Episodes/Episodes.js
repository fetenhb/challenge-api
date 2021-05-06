import React from "react";
import "../Episodes/Episodes.scss";
import "../Users/Users.scss";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Episodes = (props) => {
  const epFound = props.users.find((a) => a.name == props.match.params.user);

  return (
    <div>
      <div
        class="icons"
        style={{
          alignSelf: "flex-start",
          marginBottom: "-130px",
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
      </div>{" "}
      {/* --------------------------- home ------------------------- */}
      <div class="cont">
        <section class="hero-section">
          {" "}
          <div class="card-grd">
            {console.log(props.load)}
            {props.load ? (
              <Loading />
            ) : (
              props.episodes
                .filter((car) =>
                  car.characters.includes(`${epFound && epFound.name}`)
                )
                .map((el) => (
                  <div class="cellphone-container">
                    <div class="movie">
                      {console.log(epFound && epFound.series)}
                      {el.series == "Breaking Bad" ? (
                        <div
                          class="movie-img"
                          style={{
                            backgroundImage:
                              "url(https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg)",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                          }}
                        ></div>
                      ) : (
                        <div
                          class="movie-img"
                          style={{
                            backgroundImage:
                              "url(https://dlp2gfjvaz867.cloudfront.net/product_photos/68844882/file_8730dcc07d_original.jpg)",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",

                            width: "100%",
                          }}
                        ></div>
                      )}

                      <div class="text-movie-cont">
                        <div class="mr-grid">
                          <div class="col1">
                            <div class="mr-grid summary-row">
                              <div class="col2">
                                <h3>
                                  {" "}
                                  Season {el.season}, Episode {el.episode}
                                </h3>
                              </div>
                              <div class="col2">
                                <ul class="movie-likes">
                                  <li>
                                    <i class="material-icons">&#xE813;</i>124
                                  </li>
                                  <li>
                                    <i class="material-icons">&#xE813;</i>3
                                  </li>
                                </ul>
                              </div>
                            </div>{" "}
                            <h2>{el.title}</h2>
                            <ul
                              class="movie-gen"
                              style={{
                                marginTop: "10px",
                                marginBottom: "10px",
                              }}
                            >
                              <li>{el.air_date}</li>
                            </ul>
                          </div>
                        </div>

                        <div class="mr-grid">
                          <div class="col1">
                            <p
                              class="movie-description"
                              style={{ display: "flex" }}
                            >
                              <div style={{ marginRight: "10px" }}>
                                {" "}
                                <h5> CHARACTERS : </h5>
                              </div>
                              <div>
                                {el.characters.map((car, i) => (
                                  <div>
                                    {" "}
                                    <Link
                                      to={`/UserDetails/${car}`}
                                      style={{ fontSize: "15px" }}
                                    >
                                      {" "}
                                      {car}{" "}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            )}{" "}
          </div>{" "}
        </section>
      </div>
    </div>
  );
};

export default Episodes;
