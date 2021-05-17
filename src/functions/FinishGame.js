import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {setFinish} from "../store/redusers/cardsReducer";


export const FinishGame = () => {
    let dispatch = useDispatch()

    /* cards data */
    const cardsArray = useSelector(state => state.cards.shuffleArrayCards)

    /* finish array */
    let finishArray = []

    /* finish logic */
    const setFinishGame = useCallback((e) => dispatch(setFinish(e)), [dispatch])

    cardsArray.filter(item => item.active ? finishArray.push(item) : null)

    useEffect(() => {
        if (cardsArray.length > 0) {
            if (cardsArray.length === finishArray.length) setFinishGame(true)
        }
    }, [cardsArray.length, finishArray.length, setFinishGame])
}
