import React from "react";
import { FC } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { store } from "../../store/store";
import { Provider } from "react-redux";

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <main className="main">
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export { App };
