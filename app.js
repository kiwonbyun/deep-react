const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);

let counterName = "one";

root.render(<App />);

function App() {
  return (
    <section>
      <h1>Counters</h1>
      <section>
        <Counter />
      </section>
    </section>
  );
}

function Counter({ name }) {
  return (
    <article>
      <h2>Counter {name}</h2>
      <p>you clicked 1 times</p>
      <button className="button">Click me</button>
    </article>
  );
}

function Counter2({ name }) {
  return (
    <article>
      <h2>Counter {name}</h2>
      <p>Times clicked : 1</p>
      <button className="button">Click me</button>
    </article>
  );
}

function rerender() {
  console.log("Rerender...");
  counterName = "two";
  root.render(React.createElement(App));
}

// class LinkedListNode {
//   constructor(val, next = null) {
//     this.value = val;
//     this.next = next;
//   }
// }

//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(val) {
//     const newNode = new LinkedListNode(val);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//       return this;
//     }

//     this.tail.next = newNode;
//     this.tail = newNode;
//   }

//   print() {
//     let currentNode = this.head;
//     while (currentNode) {
//       console.log(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }
// }

// let myLinkedList = new LinkedList();
// myLinkedList.append("tony");
// myLinkedList.append("alicea");
// myLinkedList.append("understanding React");
// myLinkedList.print();
