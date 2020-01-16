import renderer from 'react-test-renderer';
import SearchForm from './Favourites';

test('renders correctly',()=>{
    const tree = renderer
    .create(SearchForm)
    .toJSON();
    expect(tree).toMatchSnapshot();
});