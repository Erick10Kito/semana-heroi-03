import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Input } from "@/components/Input";


export default function Home() {
  return (
  <main className="min-h-screen flex flex-col">
    <Header/>
    <div className=" mx-auto w-full h-full flex flex-1 items-center justify-center">
    <Container>
<div className="max-w-[580px] bg-secondary p-4 rounded-lg w-full">
<div>
  <span>Ingressar</span>
  <span>Nova Reunião</span>
</div>
<div className="space-y-4">
<Input placeholder="Digite o código da reunião" type="text"/>
<Input placeholder="Digite o código da reunião" type="text"/>

<Button title="Entrar" />
</div>
</div>
    </Container>
    </div>

  </main>
  );
}
