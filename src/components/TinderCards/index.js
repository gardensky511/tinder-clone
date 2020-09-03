import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./style.css";
import database from "../../firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database
      .collection("people")
      // onSnapshot()로 문서를 리슨
      // →콜백이 최초로 호출될 때는 현재 내용으로 문서 스냅샷이 즉시 생성
      // →내용이 변경될 때마다 콜백이 호출되어 문서 스냅샷을 업데이트
      .onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())));
  }, []);

  return (
    <div>
      <div className="tinderCardsWrapper">
        {people.map(person => (
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
