import {takeLatest,put, delay} from 'redux-saga/effects';
import {getCardData} from '../apiService/apiService'
function* cardDataAsync(action){
    if(action.value === 'init'){
       const data = yield getCardData();
       yield put({type:"CARD_DATA_ASYNC", value:JSON.stringify(data)})
    }
    else{
        yield put({type:"CARD_DATA_ASYNC", value:action.value})
    }
}

export default function* watchCard(){
    yield takeLatest("CARD_DATA", cardDataAsync)
}