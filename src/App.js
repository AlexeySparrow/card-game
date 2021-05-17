import React, {useCallback} from "react";
import style from "./assets/scss/App.module.scss";
import {useDispatch, useSelector} from "react-redux";
import shirt from "./assets/img/shirt.png";
import {CreateNewArrayFullPackCards} from "./functions/CreateNewArrayFullPackCards";
import {setActiveCard, setFirstCardSelected, setSecondCardSelected} from "./store/redusers/cardsReducer";
import {ShuffleArrayCards} from "./functions/ShuffleArrayCards";
import {LogicPairwiseSelectionCards} from "./functions/LogicPairwiseSelectionCards";
import {FinishGame} from "./functions/FinishGame";
import {FinishWindow} from "./components/FinishWindow/FinishWindow";
import {ImgCastle} from "./components/ImgCastle/ImgCastle";

export const App = () => {
    let dispatch = useDispatch()

    /* ----- cards data ----- */
    const cardsArray = useSelector(state => state.cards.shuffleArrayCards)

    /* ----- create new array full pack cards ----- */
    CreateNewArrayFullPackCards()

    /* ----- toggle class card for flip ----- */
    /* lock board */
    const lock = useSelector(state => state.cards.lockBoard)
    /* set active flip card */
    const setActiveCards = useCallback((id, active) => dispatch(setActiveCard(id, active)), [dispatch])

    const flipCard = (id) => {
        setActiveCards(id, true)
    }

    /* ----- shuffle cards ----- */
    ShuffleArrayCards()

    /* ----- pairwise selection cards ----- */
    /* view first and second cards */
    const firstCard = useSelector(state => state.cards.firstCardSelected)
    const secondCard = useSelector(state => state.cards.secondCardSelected)

    /* set first and second cards */
    const setFirstCard = useCallback((e) => dispatch(setFirstCardSelected(e)), [dispatch])
    const setSecondCard = useCallback((e) => dispatch(setSecondCardSelected(e)), [dispatch])

    const setFirstAndSecondCards = (item) => {
        if (!firstCard) setFirstCard(item)
        if (firstCard && !secondCard) setSecondCard(item)
    }

    LogicPairwiseSelectionCards()

    /* ----- finish game ----- */
    const finish = useSelector(state => state.cards.finish)
    FinishGame()

    return (
        <main className={style.wrapper}>
            <ImgCastle/>
            <section className={style.container}>
                {
                    cardsArray.map((item, idx) =>
                        <div
                            key={idx}
                            className={`${style.card} ${item.active ? style.flip : null}`}
                            onClick={() => {
                                if (!item.active || lock) {
                                    flipCard(item.id)
                                    setFirstAndSecondCards(item)
                                }
                            }}
                        >
                            <img src={item.img} alt={item.name + item.index}/>
                            <img src={shirt} alt="shirt"/>
                        </div>
                    )
                }
            </section>
            {
                finish ? <FinishWindow/> : null
            }
        </main>
    )
}
