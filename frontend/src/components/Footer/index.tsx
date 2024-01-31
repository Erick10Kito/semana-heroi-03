'use client';
import { Camera, Computer, Mic, NoCamera, NoComputer, NoMic, Phone } from "@/Icons";
import Container from "../Container";
import { useState } from "react";

export default function Footer() {
    const [isMuted, setIsMuted] = useState(false);
    const [isCameraOff, setIsCameraOff] = useState(false);
    const [isScreenSharing, setIsScreenSharing] = useState(false);
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0') + ':';
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return (
        <div className="items-center bottom-0 bg-black py-6 w-full flex-1">
            <Container>
                <div className="grid grid-cols-3">
                    <div className="flex items-center">
                        <p className="text-xl">{hours}{minutes}</p>
                    </div>
                    <div className="flex space-x-6 justify-center">
                        {isMuted ? (
                            <NoMic className="w-16 h-12 text-white p-2 bg-red-500 rounded-md cursor-pointer" onClick={() => setIsMuted(!isMuted)} />
                        ) : (
                            <Mic className="w-16 h-12 text-white p-2 bg-gray-950 rounded-md cursor-pointer" onClick={() => setIsMuted(!isMuted)} />
                        )}

                        {isCameraOff ? (
                            <NoCamera
                                className="h-12 w-16 text-white p-2 bg-red-500 rounded-md cursor-pointer"
                                onClick={() => setIsCameraOff(!isCameraOff)}
                            />
                        ) : (
                            <Camera
                                className="h-12 w-16 text-white p-2 bg-gray-950 rounded-md cursor-pointer"
                                onClick={() => setIsCameraOff(!isCameraOff)}
                            />
                        )}

                        {isScreenSharing ? (
                            <NoComputer
                                className="h-12 w-16 text-white p-2 bg-red-500 rounded-md cursor-pointer"
                                onClick={() => setIsScreenSharing(!isScreenSharing)}
                            />
                        ) : (
                            <Computer
                                className="h-12 w-16 text-white p-2 bg-gray-950 rounded-md cursor-pointer"
                                onClick={() => setIsScreenSharing(!isScreenSharing)}
                            />
                        )}

                        <Phone className="w-16 h-12 text-white p-2 bg-primary rounded-md cursor-pointer hover:bg-red-500" />
                    </div>
                </div>
            </Container>
        </div>
    );
}
