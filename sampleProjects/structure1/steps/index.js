import {yaddaLibrary} from 'ya-done-api';
import _allSteps from './lib/all-steps';

const bootstrap = () => {
  return _allSteps.call(yaddaLibrary());
};

export default bootstrap();
