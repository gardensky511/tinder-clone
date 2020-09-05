import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./style.css";
import database from "../../firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  // useEffect 는 기본적으로 렌더링 되고난 직후마다 실행
  // 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라짐
  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      // onSnapshot()로 문서를 리슨
      // →콜백이 최초로 호출될 때는 현재 내용으로 문서 스냅샷이 즉시 생성
      // →내용이 변경될 때마다 콜백이 호출되어 문서 스냅샷을 업데이트
      .onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())));

    // cleanup함수 (useEffect의 뒷정리)
    // 외부 데이터 소스 구독 기능을 설정 등의 경우엔 메모리 누수가 발생하지 않도록 뒷정리를 해야함
    // 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 작업을 수행하고 싶다면 cleanup함수를 반환해야 함
    return () => {
      unsubscribe();
    };
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
