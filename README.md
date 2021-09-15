```bash
# instalar as dependencias redux, react-redux, redux-thunk, redux-devtools-extension
yarn add redux react-redux redux-thunk redux-devtools-extension
```

```text
como configurar store
---------------------

1. importar a função createStore do redux
import { createStore } from 'redux';

2. atribuir a uma variavel e passar o reducer
const store = createStore(reducers);

3. passar a store para os componentes utilizando o react-redux
import { Provider } from 'react-redux';

<Provider store={store}>
 ...
</Provider>
```

```text
como plugar um componente ao estado
-----------------------------------
1. importar a HOC connect do react-redux
import { connect } from 'react-redux';

2. invocar a HOC na exportação do componente
export default connect()(ComponentName);

3. em sua primeira invoção o connect recebe dois parametros
mapStateToProps e mapDispatchToProps

3.1 Exemplo - mapStateToProps
const mapStateToProps = (state) => {
  return {
    items: state
  }
}

3.2 Exemplo - mapDispatchToProps
const mapStateToProps = (dispatch) => {
  return {
    onClick: function(item) {
      dispatch(addItem(item))
    }
  }
}
```