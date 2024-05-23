import { useEffect, useState } from "react";
import User from "./user";

export default function GitHubProfileFinder() {
  const [userName, setUserName] = useState("harinipriya23");
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchGitHubData() {
    setLoading(true);
    try {
      const url = `https://api.github.com/users/${userName}`
    const res = await fetch (url);

    const data = await res.json();

    if (data){
        setUserData(data)
    }
      setLoading(false);
      console.log(data)
      setUserName("")
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  if (loading) {
    <div>
      <h4 className=" text-center capitalize m-3 p-2 text-xl">
        please wait while loading..
      </h4>
    </div>;
  }
  if (error) {
    <div>
      <h4 className=" text-center capitalize m-3 p-2 text-xl">
        an error occured ! {error}
      </h4>
    </div>;
  }
  useEffect(() => {
    fetchGitHubData();
  }, []);

  function handleSearch() {
   fetchGitHubData()
  }
  return (
    <div>
      <div className="text-center m-5 p-2">
        <div>
          <input
            name="profile"
            placeholder="search gitHub profile"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className=" capitalize p-1 w-1/4 mx-3 "
          />
          <button onClick={handleSearch} className="mx-3 p-1">
            search
          </button>
        </div>
        <div className=" capitalize m-5 flex justify-center">
          {
            userData !== null ? < User user={userData} /> : null
          }
        </div>
      </div>
    </div>
  );
}
