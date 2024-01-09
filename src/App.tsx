import Input from "./components/Input.tsx";
import Button from './components/Button.tsx';
import Container from "./components/Container.tsx";

function App(){
  return <main>
    <Input id="name" label="Your name:" type="text"></Input>
    <Input id="age" label="Your age:" type="number"></Input>
    <p>
      <Button onClick={()=>alert("Ciao")}>A Button</Button>
    </p>
    <p>
      <Button href="https://www.google.com">A link on google</Button>
    </p>
    <p>
      <Container as={Button}>Click Me!</Container>
    </p>
  </main>
}

export default App;