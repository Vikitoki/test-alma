import React from "react";
import { FC } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export { App };
