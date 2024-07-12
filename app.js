const rootRealDom = document.getElementById("app");
const rootVirtualDom = ReactDOM.createRoot(rootRealDom);

rootVirtualDom.render(React.createElement(App));

function App() {
  return React.createElement("button", null, "Click me");
}
