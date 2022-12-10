import { useState, useRef, useEffect } from 'react';
import './App.css';
import GoalList from './GoalList';
import db from './firebase';
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";

function App() {

  //目標を追加していく
  const [goals, setGoals] = useState([]); //()内は初期値
  const goalNameRef = useRef(); //refフィールドのテキスト要素を取得する
  const handleAddGoal = () => {
    //クリックで目標を追加する
    const goalName = goalNameRef.current.value; //カレントの中からテキストを取り出す
    console.log(goalNameRef);
    console.log(goalName);

    //firestoreへ保存
    const fsGoalData = { goal: goalName };
    addDoc(collection(db, "goals"), fsGoalData);
  };


  // firestoreからデータを取得
  useEffect(() => {
    const fsGoalData = collection(db, "goals");
    console.log(fsGoalData);
    getDocs(fsGoalData).then((snapShot) => {
      console.log(snapShot.docs.map((doc) => ({ ...doc.data() }))); //snapShotの中身をスプレッド構文でみてる
      setGoals(snapShot.docs.map((doc) => ({ ...doc.data() })));
    });

    // リアルタイムでfirestoreから取得
    onSnapshot((fsGoalData), (goal) => {
      setGoals(goal.docs.map((doc) => ({ ...doc.data() })))
    });
  }, []);



  return (
    <div className="App">
      {/* <Home /> */}
      <h1 style={{ textAlign: "center" }}>目標管理</h1>
      <div style={{ textAlign: "center" }}>
        <input type="text" ref={goalNameRef} placeholder="目標入力" />
        <button onClick={handleAddGoal}>追加</button>
      </div>
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
