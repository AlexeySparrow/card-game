import React, {useCallback} from "react";
import style from "./FinishWindow.module.scss";
import {setFinish} from "../../store/redusers/cardsReducer";
import {useDispatch} from "react-redux";

export const FinishWindow = () => {
    let dispatch = useDispatch()
    const setFinishGame = useCallback((e) => dispatch(setFinish(e)), [dispatch])

    const reset = () => {
        setFinishGame(false)
        window.location.reload()
    }

    return (
        <section className={style.container}>
            <div>
                <h1>game over</h1>
                <p>Ты справился</p>
                <p>молодец!!!</p>
                <button onClick={reset}>я молодец :)</button>
            </div>
        </section>
    )
}
