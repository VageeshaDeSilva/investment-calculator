import "./App.css";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10">
        <section className="flex flex-col items-center justify-start">
          <Header />
        </section>
        <section className="flex flex-col items-center justify-start mt-10">
          <UserInputs />
        </section>
      </div>
    </>
  );
}

export default App;
