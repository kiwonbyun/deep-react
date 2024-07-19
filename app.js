const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);

let counterName = "one";

root.render(<App />);

function App() {
  return (
    <section>
      <h1>Counters</h1>
      <section>
        <Counter name="one" />
      </section>
    </section>
  );
}

function Counter({ name }) {
  const [state, dispath] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "Increment":
          return { clicks: state.clicks + 1 };
        default:
          throw new Error();
      }
    },
    {
      clicks: 0,
    }
  );

  return (
    <article>
      <h2>Counter {name}</h2>
      <p>you clicked {state.clicks} times</p>
      <button className="button" onClick={() => dispath({ type: "Increment" })}>
        Click me
      </button>
    </article>
  );
}
