// const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    cards: [
        {id: 1, name: 'img', img: ''},
        {id: 2, name: 'img', img: ''},
        {id: 3, name: 'img', img: ''},
        {id: 4, name: 'img', img: ''},
        {id: 5, name: 'img', img: ''},
        {id: 6, name: 'img', img: ''},
        {id: 7, name: 'img', img: ''},
        {id: 8, name: 'img', img: ''},
    ]
}

export const cardsReducer = (state = initialState, action) => {

    switch (action.type) {
        // case SEND_MESSAGE: {
        //     let mess = state.newMessageText;
        //     let newMessage = {
        //         id: 4,
        //         message: mess
        //     }
        //     return {
        //         ...state,
        //         newMessageText: '',
        //         MyMessage: [ ...state.MyMessage, newMessage]
        //     }
        // }
        default:
            return state;
    }
}

// export const updateNewMessageCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message})
