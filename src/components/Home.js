import logo from "../logo.svg";

const Home = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Nama : {props.name} </p>
      </header>
    </div>
  );
};

export default Home;
