export const reducerTemplate = (camelReducerName) =>
  `import { initialState } from "./state";
export const ${camelReducerName}Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      }
  }
}
`;

