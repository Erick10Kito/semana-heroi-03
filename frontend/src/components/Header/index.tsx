import Image from "next/image";
import Logo from '../../../public/logo.svg'
import Hero from '../../../public/hero.svg'
import Container from "../Container";

export default function Header() {
    return (
    
<div className=" bg-gray-1000 px-4 py-4">
    <Container>
        <div className="flex justify-between">
            <Image alt="Talk to me!" src={Logo} width={120} height={120}/>
            <Image alt="Hero Code" src={Hero} width={60} height={60}/>
        </div>
    </Container>
</div>
      
    )
}