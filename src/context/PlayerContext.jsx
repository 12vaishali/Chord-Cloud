import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext= createContext();

const PlayerContextProvider=(props)=>{

    const audioRef =  useRef();

    const seekbg=useRef();
    const seekbar=useRef(); 

    const [track,setTrack]= useState(songsData[0]);
    const [playStatus, setPlayStatus ]= useState(false);
    const [time,setTime]= useState({
        currentTime:{
            second:0, 
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play=()=>{
        audioRef.current.play();
        setPlayStatus(true);
    }
    const pause=()=>{
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const ContextValue={
        audioRef,
        seekbar,
        seekbg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause
    }
    return (
        <PlayerContext.Provider value={ContextValue}>
            {props.children}
        </PlayerContext.Provider>
    )

}

export default PlayerContextProvider;