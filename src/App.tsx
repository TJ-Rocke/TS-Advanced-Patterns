import Input from "./components/Input";

function App() {
  return (
    <main>
      <h1>Let's get started!</h1>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />
    </main>
  );
}

export default App;
