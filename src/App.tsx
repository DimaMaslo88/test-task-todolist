import React from 'react';
import {Title} from "ui/components/universal/Title";
import style from 'styles/App.module.css'
import s from 'styles/Title.module.css'
import {Tasks} from "ui/components/Tasks";

function App() {
    return (
        <div className={style.appContainer}>
            <div className={style.toDosContainer}>
                <Title title='ToDos' className={s.title}/>
                <Tasks/>
            </div>

        </div>
    );
}

export default App;
