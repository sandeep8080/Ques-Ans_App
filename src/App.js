import "./App.css";
import Question from "./question";
import questions from "./data";

function App() {
  return (
    <main>
      <div className="container">
        <h3> Questions & Answers about Login</h3>
        <section>
          {questions.map((value, index) => {
            return <Question key={value.id} {...value} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
