const NEW_ARRAY_CARDS = 'NEW_ARRAY_CARDS'
const INDEX_FOR_CARDS = 'INDEX_FOR_CARDS'
const ACTIVE_CARD = 'ACTIVE_CARD'
const SHUFFLE_ARRAY_CARDS = 'SHUFFLE_ARRAY_CARDS'
const FIRST_CARD_SELECTED = 'FIRST_CARD_SELECTED'
const SECOND_CARD_SELECTED = 'SECOND_CARD_SELECTED'
const LOCK_BOARD = 'LOCK_BOARD'

let initialState = {
    cards: [
        {index: 1, name: 'img', img: 'https://alexeysparrow.github.io/card-game/img/1.png'},
        {index: 2, name: 'img', img: 'https://alexeysparrow.github.io/card-game/img/2.png'},
        {index: 3, name: 'img', img: 'https://alexeysparrow.github.io/card-game/img/3.png'},
        {index: 4, name: 'img', img: 'https://alexeysparrow.github.io/card-game/img/4.png'},
        {index: 5, name: 'img', img: 'https://alexeysparrow.github.io/card-game/img/5.png'},
        {index: 6, name: 'img', img: 'https://alexeysparrow.github.io/card-game/img/6.png'},
        {index: 7, name: 'img', img: 'https://alexeysparrow.github.io/card-game/img/7.png'},
        {index: 8, name: 'img', img: 'https://alexeysparrow.github.io/card-game/img/8.png'},
    ],
    newArrayCards: [],
    shuffleArrayCards: [],
    firstCardSelected: null,
    secondCardSelected: null,
    lockBoard: false
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_ARRAY_CARDS:
            return {
                ...state,
                newArrayCards: action.newArrayCards
            }
        case INDEX_FOR_CARDS:
            return {
                ...state,
                newArrayCards: state.newArrayCards.map((item, idx) =>
                    idx === action.idx ? {...item, id: action.id} : item
                )
            }
        case SHUFFLE_ARRAY_CARDS:
            return {
                ...state,
                shuffleArrayCards: action.shuffleArrayCards
            }
        case ACTIVE_CARD:
            return {
                ...state,
                shuffleArrayCards: state.shuffleArrayCards.map(item =>
                    item.id === action.id ? {...item, active: action.active} : item
                )
            }
        case FIRST_CARD_SELECTED:
            return {
                ...state,
                firstCardSelected: action.firstCardSelected
            }
        case SECOND_CARD_SELECTED:
            return {
                ...state,
                secondCardSelected: action.secondCardSelected
            }
        case LOCK_BOARD:
            return {
                ...state,
                lockBoard: action.lockBoard
            }
        default:
            return state;
    }
}

export const setNewArrayCards = (newArrayCards) => ({type: NEW_ARRAY_CARDS, newArrayCards})
export const setIndexForCards = (id, idx) => ({type: INDEX_FOR_CARDS, id, idx})
export const setActiveCard = (id, active) => ({type: ACTIVE_CARD, id, active})
export const setShuffleArrayCards = (shuffleArrayCards) => ({type: SHUFFLE_ARRAY_CARDS, shuffleArrayCards})
export const setFirstCardSelected = (firstCardSelected) => ({type: FIRST_CARD_SELECTED, firstCardSelected})
export const setSecondCardSelected = (secondCardSelected) => ({type: SECOND_CARD_SELECTED, secondCardSelected})
export const setLockBoard = (lockBoard) => ({type: LOCK_BOARD, lockBoard})
