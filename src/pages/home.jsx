import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/password">Password</Link>
      <Link to="/dropdown">Dropdown</Link>
    </div>
  );
};

export default Home;
