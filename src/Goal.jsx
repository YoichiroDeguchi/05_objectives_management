import React from 'react'
import { useState, useRef } from 'react';
import ActionList from './ActionList';
import CheckList from './CheckList';
import { v4 as uuidv4 } from 'uuid';

const Goal = ({ goal }) => {

    // アクションプランを追加していく
    const [actions, setActions] = useState([]); //()内は初期値
    const actionNameRef = useRef(); //refフィールドのテキスト要素を取得する
    const handleAddAction = () => {
        //クリックでアクションを追加する
        const actionName = actionNameRef.current.value; //カレントの中からテキストを取り出す
        console.log(actionNameRef);
        console.log(actionName);
        setActions((prevActions) => { //目標リストにランダムidを付与して追加する
            return [...prevActions, { id: uuidv4(), name: actionName }];
        })
        actionNameRef.current.value = null;
    };

    // 振り返りを追加していく
    const [checks, setChecks] = useState([]);
    const checkTextRef = useRef(); //refフィールドのテキスト要素を取得する
    const handleAddCheck = () => {
        //クリックでアクションを追加する
        const checkText = checkTextRef.current.value; //カレントの中からテキストを取り出す
        console.log(checkTextRef);
        console.log(checkText);
        setChecks((prevChecks) => { //目標リストにランダムidを付与して追加する
            return [...prevChecks, { id: uuidv4(), name: checkText }];
        })
        checkTextRef.current.value = null;
    };

    // 達成した目標を削除する
    // const [goals, setGoals] = useState([]);

    // const toggleGoal = (id) => {
    //     const newGoals = [...goals];
    //     const goal = newGoals.find((goal) => goal.id === id);
    //     goal.completed = !goal.completed;
    //     setGoals(newGoals);
    // };


    return (
        <div className='goal_box'>
            <h2>{goal.name}</h2>
            <ActionList actions={actions} />
            <CheckList checks={checks} />
            <div>
                <input type="text" ref={actionNameRef} placeholder="アクションプラン" />
                <button onClick={handleAddAction}>追加</button>
            </div>
            <div>
                <textarea rows="3" ref={checkTextRef} placeholder="振り返り入力" />
                <button onClick={handleAddCheck}>追加</button>
            </div>
            <label>
                <input type="checkbox" id={uuidv4()} checked={goal.completed = false} readOnly />目標達成
            </label>
        </div >
    );
};

export default Goal