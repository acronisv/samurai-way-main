import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app_wrapper">
            <header className="header">
                Header
            </header>
            <nav className="nav">
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
            <main className="main">
                <div><img src="" alt="avatar"/></div>
                <div>avatar desc</div>
                <div>My posts</div>
                <div>New posts</div>
                <div>Posts 1</div>
                <div>Posts 2</div>

            </main>
        </div>
    );
}

export default App;
