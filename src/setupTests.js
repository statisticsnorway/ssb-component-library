import util from 'util';
import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Object.defineProperty(global, 'TextEncoder', {
	value: util.TextEncoder,
});
configure({ adapter: new Adapter() });
