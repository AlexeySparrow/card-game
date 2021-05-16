import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {setActiveCard, setFirstCardSelected, setLockBoard, setSecondCardSelected} from "../store/redusers/cardsReducer";

export const LogicPairwiseSelectionCards = (index) => {
    let dispatch = useDispatch()

    /* lockBoard */
    const setLock = useCallback((e) => dispatch(setLockBoard(e)), [dispatch])

    /* view first and second cards */
    const firstCard = useSelector(state => state.cards.firstCardSelected)
    const secondCard = useSelector(state => state.cards.secondCardSelected)

    /* set first and second cards */
    const setFirstCard = useCallback((e) => dispatch(setFirstCardSelected(e)), [dispatch])
    const setSecondCard = useCallback((e) => dispatch(setSecondCardSelected(e)), [dispatch])

    /* ----- toggle class card for flip ----- */
    const setActiveCards = useCallback((id, active) => dispatch(setActiveCard(id, active)), [dispatch])

    /* handling event */
    const equally = () => {
        setFirstCard('')
        setSecondCard('')
    }

    const notEqually = () => {
        setLock(true)

        setTimeout(() => {
            setActiveCards(firstCard.id, false)
            setActiveCards(secondCard.id, false)
            setFirstCard('')
            setSecondCard('')

            setLock(false)
        }, 500)
    }

    if (firstCard && secondCard) {
        let complete = firstCard.index === secondCard.index
        complete ? equally() : notEqually()
    }
}
