import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./style.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Chansung",
      url:
        "https://sports.chosun.com/news/html/2018/07/30/2018073101002747200209912.jpg",
    },
    {
      name: "Taec",
      url:
        "https://pds.joins.com/news/component/newsis/201807/25/NISI20180725_0000178915_web.jpg",
    },
    {
      name: "Jun.K",
      url:
        "https://6.viki.io/image/a8f6a333dc374b29a05885f54e8cb91b.jpeg?s=900x600&e=t",
    },
  ]);

  return (
    <div>
      <h1>TinderCards</h1>
      <div className="tinderCardsWrapper">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3 className="card__name">{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
