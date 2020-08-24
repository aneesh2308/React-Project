import uuid from "uuid/v1";

export const characterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.character.title,
          power: action.character.power,
          id: uuid()
        }
      ];
    case "REMOVE_BOOK":
      return state.filter((character) => character.id !== action.id);
    default:
      return state;
  }
};
