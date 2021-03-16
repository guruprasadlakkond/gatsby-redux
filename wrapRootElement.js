const React = require('react');
const { Provider } = require('react-redux');

const store = require('./src/store');
console.log(store);
export default ({ element }) => <Provider store={store.default}>{element}</Provider>;
