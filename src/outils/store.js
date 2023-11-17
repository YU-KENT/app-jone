import { configureStore } from '@reduxjs/toolkit'
import loginReducer from'../features/loginReducer'
/* import editNameReducer from '../features/editNameReducer' */

export const store = configureStore({
    reducer: {
        login: loginReducer,
        /* editName:editNameReducer, */
    }

  })
