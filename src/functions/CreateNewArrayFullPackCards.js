import {useCallback, useEffect} from "react";
import {setIndexForCards, setNewArrayCards} from "../store/redusers/cardsReducer";
import {useDispatch, useSelector} from "react-redux";

export const CreateNewArrayFullPackCards = () => {
    /* call dispatch */
    let dispatch = useDispatch()

    /* cards data */
    const dataCards = useSelector(state => state.cards.cards)
    const newDataCards = useSelector(state => state.cards.newArrayCards)

    /* callback in store new array cards */
    const setNewDataCards = useCallback((e) => dispatch(setNewArrayCards(e)), [dispatch])
    const setIndexCards = useCallback((index, idx) => dispatch(setIndexForCards(index, idx)), [dispatch])

    /* create full array cards */
    useEffect(() => {
        setNewDataCards(
            dataCards.concat(dataCards).map(item => {
                    item['id'] = ''
                    item['active'] = false
                    return item
                }
            )
        )
    }, [dataCards, setNewDataCards])

    /* assigning an id to each card */
    useEffect(() => {
        newDataCards.map((item, idx) =>
            item.id === '' ? setIndexCards(idx, idx) : null
        )
    }, [newDataCards, setIndexCards])
}
