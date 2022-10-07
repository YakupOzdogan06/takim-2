import Menu from "./components/Menu";
import data from "./helper/data";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />
      {data.map((item, index) => (
        <Menu key={index} item={item} />
      ))}
    </div>
  );
}

export default App;
