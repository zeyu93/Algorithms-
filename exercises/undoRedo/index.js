const performEditorActions = actions => {
  let hashOpposite = {
    INSERT: "DELETE",
    DELETE: "INSERT"
  };

  let result = [];
  let stack = [];
  let undoStack = [];
  const hashActions = {
    INSERT: x => result.push(x),
    DELETE: x => result.pop()
  };

  for (let i = 0; i < actions.length; i++) {
    let [action, value] = actions[i];
    if(action ==="REDO" && !undoStack.length){
      continue;
    }
    if (action === "UNDO" && stack.length) {
      let lastAction = stack.pop();
      action = hashOpposite[lastAction[0]];
      value = lastAction[1];
      undoStack.push([action, value]);
    } else if (action === "REDO" && undoStack.length) {
      let lastUndo = undoStack.pop()
      action = hashOpposite[lastUndo[0]];
      value = lastUndo[1];
    }
    hashActions[action](value);
    stack.push([action, value]);
    console.log(stack);
  }
  console.log(result);
  return result.join("");
};
const actions = [["INSERT", "A"], ["INSERT", "B"], ["UNDO"], ["UNDO"]];

performEditorActions(actions);
