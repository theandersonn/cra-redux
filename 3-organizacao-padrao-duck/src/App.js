import { connect } from 'react-redux';
import { CreatorsOne } from './ducks/simpleOne';
import { CreatorsTwo } from './ducks/simpleTwo';

const App = ({ actionOneA, actionOneB, actionTwoA, actionTwoB, resultA, resultB }) => {
  return (
    <>
      <h1>setup redux</h1>  
      <button onClick={() => actionOneA()}>Test actionOneA</button>
      <button onClick={() => actionOneB()}>Test actionOneB</button>
      <hr />
      <button onClick={() => actionTwoA()}>Test actionTwoA</button>
      <button onClick={() => actionTwoB()}>Test actionTwoB</button>

      <pre>
        { JSON.stringify(resultA) }
      </pre>

      <pre>
        { JSON.stringify(resultB) }
      </pre>
    </>
  );
}

const mapStateToProps = (state) => ({
  resultA: state.simpleOne,
  resultB: state.simpleTwo
});

const mapDispatchToProps = (dispatch) => ({
  actionOneA: () => dispatch(CreatorsOne.simpleActionOneA()),
  actionOneB: () => dispatch(CreatorsOne.simpleActionOneB()),
  actionTwoA: () => dispatch(CreatorsTwo.simpleActionTwoA()),
  actionTwoB: () => dispatch(CreatorsTwo.simpleActionTwoB()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
