import { createStore } from 'redux'
import CountReducer from './reducer/count.reducer'

export default createStore(CountReducer)