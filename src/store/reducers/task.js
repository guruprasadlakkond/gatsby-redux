import * as actionType from '../actionTypes';

const initialState = {
    tasks: []
}

export default (state= initialState, action) =>{

    switch(action.type) {
        case actionType.ADD_TASK:
            console.log(action.payload.task)
            return {
                tasks : [...state.tasks, action.payload]
            }
        case actionType.DELETE_TASK : 
            return {
                tasks : [...state.tasks]
            };
        case actionType.UPDATE_TASK : 

         return {
             tasks: [...state.tasks]
         };

         default :
          return state;
    }
}