import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import App from './App';
import './App.css';

const Home = () => {
    const [user] = useAuthState(auth); //ログイン状態の確認

    return (
        <div>
            {user ? ( //trueの時（=サインイン時）は<></>を表示、nullの時（=サインアウト時）は:を表示する
                <>
                    <App />
                    <SignOutButton />
                </>
            ) : (
                <SignInButton />
            )}
        </div>
    )
}

//サインイン
function SignInButton() {
    const signInWithGoogle = () => {
        //firebaseを使ってGoogleでサインイン
        signInWithPopup(auth, provider);
    };

    return (
        <div className='signInBox'>
            <h1>目標管理</h1>
            <button onClick={signInWithGoogle} className="signInButton">
                <p>サインイン</p>
            </button>
        </div>
    )
}

//サインアウト
function SignOutButton() {
    return (
        <div className='signOutBox'>
            <button onClick={() => auth.signOut()} className="signOutButton">
                <p>サインアウト</p>
            </button>
        </div>
    )
}

export default Home;