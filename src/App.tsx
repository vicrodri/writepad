import "./App.css";
import { Footer, Header } from "./common";
import { RoutesList } from "./routes/RoutesList";

function App() {
  return (
    <div className='App'>
      <Header />
      <RoutesList />
      <Footer />
    </div>
  );
}

export default App;
