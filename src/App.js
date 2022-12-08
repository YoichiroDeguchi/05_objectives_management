import { useState, useRef } from 'react';
import './App.css';
import GoalList from './GoalList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [goals, setGoals] = useState([]); //()内は初期値


  const goalNameRef = useRef(); //refフィールドのテキスト要素を取得する

  const handleAddGoal = () => {
    //クリックで目標を追加する
    const goalName = goalNameRef.current.value; //カレントの中からテキストを取り出す
    console.log(goalNameRef);
    console.log(goalName);
    setGoals((prevGoals) => { //目標リストにランダムidを付与して追加する
      return [...prevGoals, { id: uuidv4(), name: goalName }];
    })
    goalNameRef.current.value = null;
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>目標管理ツール</h1>
      <div style={{ textAlign: "center" }}>
        <input type="text" ref={goalNameRef} placeholder="目標入力" />
        <button onClick={handleAddGoal}>追加</button>
      </div>
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
