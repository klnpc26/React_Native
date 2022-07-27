import React, { createContext, useReducer } from 'react'
import users from '../data/users'

// Sempre recebe a lista de usuários da ultima versão, por conta que o estado esta sendo atualizando quando acontece um disparo da ação do reducer
const initialState = { users }

// Criamos o contexto com createContext e iremos o usar o mesmo com UserContext
const UsersContext = createContext({}); // Criamos um contexto vazio

const actions = {
    /*
    Objetivo: Evoluir estado

    Atráves de uma ação passada, será executada as tratativas necessárias e sempre retornará o estado para que o 
    contexto da nossa aplicação fique atualizada
    */
    deleteUser(state, action) {
        const user = action.payload

            return {
                ...state,
                users: state.users.filter(x => x.id != user.id)  
            }
    }
}

// Envolve a minha aplicação, para que possa ser acessado os dados através do contexto para todos os componentes que minha aplicação utiliza
export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]

        return fn ? fn(state, action) : state;
    }

    // Responsável por disparar um determinado evento para todos os reducer
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        //Passa todas as informações através da árvore de componentes
        <UsersContext.Provider value={{ // Inicializamos com valor
            state, dispatch //Esse objeto que eu quero prover apartir do meu objeto
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext