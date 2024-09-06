import { createContext, useState } from "react";

export const GameContext =createContext({})

export const GameContextProvider = (props)=>{
    const [game, setGame] = useState({
        board:[1,2,3,4,5,6,7,8,9],
        player1:{
            choice:"x",
            name:"Maburna"
        },
        player2:{
            choice:"o",
            name:"Tsubist"
        },
        turn:"x",
    })
    
    const updatedBoard = (index)=>{
        let updatedBoard = game.board;
        updatedBoard[index] = game.turn;
        setGame({...game, board:updatedBoard, turn:game.turn==="x"?"o":"x"})
    }
    return(
        <GameContext.Provider value={{game, updatedBoard}}>
            {props.children}
        </GameContext.Provider>
    )
}