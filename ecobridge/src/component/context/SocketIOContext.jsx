import { useQueryClient } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { io } from "socket.io-client";
import queryKeys from "../../services/queryKeys";
import { socketEmitEvents, socketOnEvents } from "./socketEvents";
// import io from "socket.io-client";

// import { tableReload } from "../../store/TableReloads";
// import { useDispatch, useSelector } from "react-redux";


let SocketIOContext = createContext({})

export default function SocketIOContextProvider({children}) {
    const queryClient = useQueryClient()
    // const {userDetails} = useSelector((state) => state?.userDetails); // CHECKS IF USER UID, to determine if user is active

    // const dispatch = useDispatch()

    const socket = io.connect(process.env.REACT_APP_SOCKET_URL); 

    // // Messages States
    // const [message, setMessage] = useState("");
    const [socketMsgReceived, setSocketMsgReceived] = useState("");

    const joinRoom = (room) => {
        if (room !== "") {
            return socket.emit("join_room", room);
        }
        return
    };

    const sendMessage = (eventType, message, room) => {
        if(message && room){
            socket.emit(eventType, { message, room });
        }
    };

    useEffect(() => {
        socket.on(socketOnEvents.receive_message, (data) => {
            // setSocketMsgReceived(data.message);
            // dispatch(tableReload({type:'CHATMESSAGELIST'})) // dispatches to update chat message sending from owner to worker and vice versa
            console.log('DATA', data)
            queryClient.refetchQueries({
                queryKey: [...queryKeys.recentAction],
                // type: 'active',
                // exact: true,
            })
        });

        socket.on(socketOnEvents.refresh_provision, (data) => {
            queryClient.refetchQueries({  // refetches productProvision API call
                queryKey: [...queryKeys.myproduct_provision],
            })
        });

        // client-side
        socket.on("connect", () => {
            console.log(socket.id);
        });
        
        socket.on("disconnect", () => {
            console.log(socket.id);
        });
    }, [socket]);

    let values = {
        socket,
        sendMessage,
        socketMsgReceived,
        setSocketMsgReceived,
        joinRoom,
    }

  return (
    <SocketIOContext.Provider value={values}>
        <Outlet />
    </SocketIOContext.Provider>
  )
}


export const SocketContextValues = () => {
    return useContext(SocketIOContext)
}
