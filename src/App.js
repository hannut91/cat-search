import Title from './components/Title';
import Search from './components/Search';
import Cats from './components/Cats';
import Filter from './components/Filter';

const App = () => `
${Title()}
${Search()}
${Filter()}
${Cats()}
`;

export default App;
