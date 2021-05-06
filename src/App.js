import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchMovie from "./SearchMovie/SearchMovie";
import axios from "axios";
import UserList from "./UsersList/UserList";
import UserDetails from "./UserDetails/UserDetails";
import Episodes from "./Episodes/Episodes";
function App() {
  const [users, setUsers] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://breakingbadapi.com/api/characters"
        );
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.log("err");
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchDataEpisodes = async () => {
      try {
        const res = await axios.get(
          `https://breakingbadapi.com/api/episodes?title=Breakage`
        );
        setEpisodes(res.data);
        setLoad(false);
      } catch (error) {
        console.log("err");
      }
    };
    fetchDataEpisodes();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <>
              {" "}
              <SearchMovie setNameSearch={setNameSearch} />
              <UserList
                users={users}
                episodes={episodes}
                nameSearch={nameSearch}
                loading={loading}
              />{" "}
            </>
          )}
        />
      </div>
      <Route
        path="/UserDetails/:user"
        render={(props) => (
          <UserDetails {...props} users={users} loading={loading} />
        )}
      />
      <Route
        path="/Episodes/:user"
        render={(props) => (
          <Episodes {...props} users={users} episodes={episodes} load={load} />
        )}
      />
    </BrowserRouter>
  );
}

export default App;
