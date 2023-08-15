import "./App.css";
import data from "./assets/movies_rnexgr.json";

//Components
import Header from "./assets/components/Header";
import Section from "./assets/components/Section";
function App() {
  return (
    <>
      <Header />
      <div className="bloc-movies">
        {data.map((section, index) => (
          <Section
            key={index}
            category={section.category}
            images={section.images}
          />
        ))}
      </div>
    </>
  );
}

export default App;
