import { Create } from "@/components/Create"
import { Join } from "@/components/Join"

interface IRoomSelectorProps {
    selectedRoom: 'join' | 'create'
}
export function RoomSelector({selectedRoom}:IRoomSelectorProps) {
  switch(selectedRoom) {
    case 'join':
        return <Join/>

    case 'create':
        return <Create/>    

    default: <Join/>    
  }
}