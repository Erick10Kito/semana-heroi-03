import { Camera, Computer, Mic, Phone } from "@/Icons";
import Container from "../Container";

export default function Footer() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0') + ':'
    const minutes = date.getMinutes.toString().padStart(2, '0')

    return(
        <div className="fixed bottom-0 bg-black py-6 w-full">
            <Container>
                <div className="grid grid-cols-3">
                        <div className="flex items-center">
                            <p className="text-xl">{hours}{minutes}</p>
                        </div>
                        <div className="flex space-x-6 justify-center">
                            <Mic className="w-16 h-10 text-white p-2 bg-gray-950 rounded-md "/>
                            <Camera className="w-16 h-10 text-white p-2 bg-gray-950 rounded-md "/>
                            <Computer className="w-16 h-10 text-white p-2 bg-gray-950 rounded-md "/>
                            <Phone className="w-16 h-10 text-white p-2 bg-primary rounded-md "/>
                        </div>
                </div>
            </Container>
        </div>
    )
}