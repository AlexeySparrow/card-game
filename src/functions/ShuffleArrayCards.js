import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {setShuffleArrayCards} from "../store/redusers/cardsReducer";

export const ShuffleArrayCards = () => {
    let dispatch = useDispatch()

    /* cards data */
    const newDataCards = useSelector(state => state.cards.newArrayCards)

    /* callback shuffle cards */
    const setShuffleArray = useCallback((e) => dispatch(setShuffleArrayCards(e)), [dispatch])

    /* logic shuffle */
    useEffect(() => {
        setShuffleArray(
            newDataCards.sort(() => {
                return 0.5 - Math.random()
            })
        )
    }, [newDataCards, setShuffleArray])
}
