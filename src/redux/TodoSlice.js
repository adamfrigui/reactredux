import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todoList :[]
}

const TodoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
         saveTodo: (state,action) =>{
             state.todoList.push(action.payload)
         },
         setCheck: (state , action) => {
            state.todoList.map(item => {
                if(action.payload === item.id){
                    if (item.completed === true) {
                        item.completed = false
                    }
                    else{
                        item.completed = true
                    }
                }
            })
         },
         deleteTodo : (state , action) => {
           return state.todoList.filter((todo) => todo.id !== action.payload.id)
         }

    }
});

export const {saveTodo , setCheck,deleteTodo} = TodoSlice.actions

export const SelectTodoList = (state) => state.todos.todoList

export default TodoSlice.reducer