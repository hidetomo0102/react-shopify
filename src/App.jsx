import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Cart } from "./components/Cart";
import { NavBar } from "./components/NavBar";
import { NavMenu } from "./components/NavMenu";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <NavMenu />
        <Cart />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
