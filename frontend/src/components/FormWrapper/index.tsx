'use client';
import { useState } from "react";
import Button from "../Button";
import { Input } from "../Input";
import { RoomSelector } from "./RoomSelector";


export function FormWrapper() {
    const [selectedRoom, setSelectedRoom] = useState<'join' | 'create' >('join')

    function handleSelectedRoom(room: 'join' | 'create' ) {
        setSelectedRoom(room)
    }
    return (
        <div className="w-full">
        <div className="flex items-center text-center">
          <span className={`w-1/2 p-4 cursor-pointer ${selectedRoom === 'join' && ' rounded-t-lg text-primary bg-secondary'}`} onClick={()=> handleSelectedRoom('join')}>Ingressar</span>
          <span className={`w-1/2 p-4 cursor-pointer ${selectedRoom === 'create' && ' rounded-t-lg text-primary bg-secondary'}`} onClick={()=> handleSelectedRoom('create')}>Nova reunião</span>
        </div>
        <div className="bg-secondary rounded-b-lg space-y-8 p-10">
        <RoomSelector selectedRoom={selectedRoom}/>
        </div>
      </div>
    )
}