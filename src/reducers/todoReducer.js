function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
        },
      ];
    default:
      return state;
  }
}

export { todoReducer };
