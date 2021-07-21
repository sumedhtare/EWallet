const initialState = {
    profileData:{},
    cardData: JSON.stringify({})
}

export const reducer = (state=initialState, action)=>{
    const newState = {...state}
    switch(action.type){
        case 'PROFILE_DATA_ASYNC':
            newState.profileData = action.value;
            break;
        case 'CARD_DATA_ASYNC':
            newState.cardData = action.value;
            break;    
    }
    return newState;
}
