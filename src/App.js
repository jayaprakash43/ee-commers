import ListOfJewellery from "./components/pages/jewellerylist";
import ListOfWatches from "./components/pages/watchlist";
import PerfumrMap from "./components/pages/perfumeslist"
import Navbar from "./components/navbar";



function App() {
  return (
    <div className="App">
      <h1 style={{textAlign : 'center'}}>EE-CART</h1>
      <Navbar/>
      <ListOfJewellery/>
      <ListOfWatches/>
      <PerfumrMap/>
    </div>
  );
}

export default App;
