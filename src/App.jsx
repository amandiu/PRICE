import "./App.css";
import Navbar from "./Componants/Navbar/Navbar";
import Products from "./Componants/Products/Products";

function App() {
  return (
    <>
      <section className="mt-4 ">
        <Navbar></Navbar>
        <Products></Products>
      </section>
    </>
  );
}

export default App;
