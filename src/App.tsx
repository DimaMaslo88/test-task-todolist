import React from 'react';
import {Title} from "ui/components/universal/Title";
import style from 'styles/App.module.css'
import s from 'styles/Title.module.css'
import {Tasks} from "ui/components/Tasks";
import {animated, useSpring} from '@react-spring/web'

function App() {
    const springs = useSpring({
        from: {x: -1000},
        to: {x: 100},
    })
    return (
        <animated.div
            style={{
                ...springs,
            }}
        >
            <div className={style.appContainer}>
                <div className={style.toDosContainer}>
                    <Title title='Todos' className={s.title}/>
                    <Tasks/>
                </div>

            </div>
        </animated.div>
    );
}

export default App;
