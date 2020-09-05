import React from "react";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";

// BrowserRouter : HTML5의 API를 이용하여 페이지를 새로고침 하지 않고도 주소를 변경
// Switch : 자식 컴포넌트 Route또는 Redirect중 매치되는 첫 번째 요소를 렌더링(사용하지 않을 경우 매칭되는 모두를 렌더링)
// Route : 컴포넌트의 속성에 설정된 URL과 현재 경로가 일치하면 해당하는 컴포넌트, 함수를 렌더링
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/chat">
            <h1>I am the chtapage</h1>
          </Route>
          {/* default 루트는 항상 제일 마지막에! */}
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
