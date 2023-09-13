export const reducer = ({ state, action }) => {
  if (action.type === 'ADD-TO-CART') {
    return { ...state }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}
