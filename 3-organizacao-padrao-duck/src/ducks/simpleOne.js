// types
// -----
export const TypesOne = {
  a: 'SIMPLE_ACTION_ONE_A',
  b: 'SIMPLE_ACTION_ONE_B'
};

// reducers
// --------
const initialStore = {
  result: 'not clicked',
}

export const simpleOne = (state = initialStore, action) => {
  switch (action.type) {
    case TypesOne.a:
      return {
        result: action.payload
      }

    case TypesOne.b:
      return {
        result: action.payload
      }      
    
    default:
      return state
  }
}

// actions creators
// ----------------
const simpleActionOneA = () => {
  return {
    type: TypesOne.a,
    payload: 'result_of_simple_action_one_a'
  };
};

const simpleActionOneB = () => {
  return {
    type: TypesOne.b,
    payload: 'result_of_simple_action_one_b'
  };
};

export const CreatorsOne = {
  simpleActionOneA,
  simpleActionOneB
}