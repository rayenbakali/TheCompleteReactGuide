import ReactImg from "./assets/react-core-concepts.png";

const reactDescription = ["Fundamnental ", "Crucial", "Core"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept() {
  return (
    <li>
      <img src="#" alt="" />
      <h3>Title</h3>
      <p>Description</p>
    </li>
  );
}
function Header() {
  const RandomValue = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={ReactImg} alt="image" />
      <h1>React Essentials</h1>
      <p>
        {RandomValue} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <CoreConcept />
          <h2>Core Concepts</h2>
          <ul></ul>
        </section>
      </main>
    </div>
  );
}

export default App;
