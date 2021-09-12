import { connect } from 'react-redux';
import { simpleActionOneA, simpleActionOneB } from './store/reducers/simpleOne/actions';
import { simpleActionTwoA, simpleActionTwoB } from './store/reducers/simpleTwo/actions';

const App = ({ actionOneA, actionOneB, actionTwoA, actionTwoB, resultA, resultB }) => {
  return (
    <div>
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  resultA: state.simpleOne,
  resultB: state.simpleTwo
});

const mapDispatchToProps = (dispatch) => ({
  actionOneA: () => dispatch(simpleActionOneA()),
  actionOneB: () => dispatch(simpleActionOneB()),
  actionTwoA: () => dispatch(simpleActionTwoA()),
  actionTwoB: () => dispatch(simpleActionTwoB()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
