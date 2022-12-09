const createStack2 = () => {
    let items = [];
    return function () {
      return {
        push(item) {
          items.push(item);
          console.log("itemsPUSH", items);
        },
        pop() {
          items.pop();
          console.log("items POP", items);
          return items;
        },
        getItems(){
          console.log("items_ return", items);
          return items;
        }
      };
    }();
  };
  const stack2 = createStack2();
  stack2.push(10);
  stack2.push(5);
  stack2.pop(); // => 5
  stack2.items; // => undefined
  console.log("Solution__", stack2.items);
  stack2.getItems();