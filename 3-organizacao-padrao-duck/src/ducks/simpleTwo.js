// types
// -----
export const TypesTwo = {
  a: 'SIMPLE_ACTION_TWO_A',
  b: 'SIMPLE_ACTION_TWO_B'
};

// reducers
// --------
const initialStore = {
  result: 'not clicked',
}

export const simpleTwo = (state = initialStore, action) => {
  switch (action.type) {
    case TypesTwo.A:
      return {
        result: action.payload
      }

    case TypesTwo.B:
      return {
        result: action.payload
      }      
    
    default:
      return state
  }
}

// actions creators
// ----------------
const simpleActionTwoA = () => {
  return {
    type: TypesTwo.A,
    payload: 'result_of_simple_action_two_a'
  };
};

const simpleActionTwoB = () => {
  return {
    type: TypesTwo.B,
    payload: 'result_of_simple_action_two_b'
  };
};

export const CreatorsTwo = {
  simpleActionTwoA,
  simpleActionTwoB
}