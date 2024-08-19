import "./App.css";
import images from "./assets/images/image.jpeg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <section className="container" role="main">
        <div className="row my-5">
          <div className="col-md-6">
            <img src={images} alt="image" height="600" width="600" />
          </div>
          <div className="col-md-6">Test 2</div>
        </div>
      </section>
    </>
  );
}

export default App;
