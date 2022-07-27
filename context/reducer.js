export const initialState = {
  name: "",
  gender: "",
  email: "",
  preferred_City: "",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "SET_GENDER":
      return {
        ...state,
        gender: action.gender,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.email,
      };
    case "SET_PREFERRED-CITY":
      return {
        ...state,
        preferred_City: action.preferred_City,
      };

    default:
      return state;
  }
};

export default reducer;
