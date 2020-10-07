import {yaddaCore} from 'ya-done-api';
import steps from './steps';

//Set the Framework for stepLevel Execution
const framework = {stepLevel: true};

//running the test cases using Yadda
yaddaCore(steps, framework);
