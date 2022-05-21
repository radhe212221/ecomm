import React from 'react'
import {createStore, Provider} from 'redux'
import reducer from './reducer'
const store = createStore(reducer)
function Redux(props) {
    return <Provider store={store}>
        {
        props ?. children
    } </Provider>
}
export default Redux
