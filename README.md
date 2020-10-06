# ya-done-api

**A BDD based API automation framework based on JAVASCRIPT**

[![Build Status](https://travis-ci.com/britishgas-engineering/ya-done-api.svg?branch=master)](https://travis-ci.com/britishgas-engineering/ya-done-api)

```js
npm  i  ya-done-api --save
```

The aim of this Package is to help QA teams to automate API's using Javascript. `Ya-done-api` comes with predefined method for REST API calls.

> How to use the Package for automating- Please follow the below Steps. 

###### There are two structures mentioned below. Sample Projects for both the structures are available for download in GITHUB. (To Skip the Reading 😉)

#### 1. Decide Your Directry Structure: Sample Folder Structure 1
```
features
    ├─sampleFeature.js
steps
    ├─lib
    |   ├─all-steps.js 
    ├─index.js
index.js
package.json
```
#### 2. write the feature File
```feature
Feature: Sample Feature to Test the package

Scenario: 
  Given Get random postcode
```

#### 3. Write the code for the step
./steps/lib/all-steps.js

```js
import { utils } from 'ya-done-api';
const addContext = require('mochawesome/addContext');
import expect from 'expect';

export default function () {
    return (
      this
        .given(
          'Get random postcode',
          async function getRandomAddressBygeneratingPostcode() {
            const path = `https://api.postcodes.io/random/postcodes`;
            const header = { 'Content-Type': 'application/json' }
            const response = await utils.GET(header, path);
            expect(response.status).toEqual(200);
            addContext(this.mocha,
              `Random generated postcode : ${response.data.result.postcode}
            `);
          }
        )
    );
  }
```

#### 4. Extract the code to pass it `Ya-done-api` framework for execution
./steps/index.js
```js
import {yaddaLibrary} from 'ya-done-api';
import _allSteps from './lib/all-steps';

const bootstrap = () => {
    return _allSteps.call(yaddaLibrary());
};
  
export default bootstrap();
```

#### 5. Pass the requried steps in main index File 
./index.js
```js
import {yaddaCore, countScenarios} from 'ya-done-api';
import steps from './steps';

//Set the Framework for stepLevel Execution 
const framework = { stepLevel: true } // This is a feture to show the steps wise progess in terminal, completely optional

//running the test cases using Yadda
yaddaCore(steps, framework);
```

#### 6. install and run the project 🥳

```js
npm  i
npm  test
```

**If you want to split the Given when then in steps, you can follow the below structure: Structure 2**
```
features
    ├─sampleFeature.js
steps
    ├─given
    |    ├─lib
    |    |   ├─givenSteps.js
    |    ├─index.js
    ├─when
    |    ├─lib
    |    |   ├─whenSteps.js
    |    ├─index.js
    ├─then
    |    ├─lib
    |    |   ├─thenSteps.js
    |    ├─index.js
    ├─index.js
index.js
package.json
```

### Adding a dictionary

Dictionaries have been abstracted for simple use in ya-done. Dictionaries allow the use of [tables](https://acuminous.gitbooks.io/yadda-user-guide/en/feature-specs/example-tables.html) and [variables within steps](https://acuminous.gitbooks.io/yadda-user-guide/en/usage/step-libraries.html#step-aliases).


**how to consume reading scenario count from feature files**

In local index.js:
-  import the count scenarios function -->
```js
import {countScenarios} from 'ya-done-api';
```
-  countScenarios(**filePath**)  (Where file path is where your feature files are stored)

>  we have written most used REST API methods for reuse, please find below the functions available.

  * GET
  * POST
  * PUT
  * PATCH
  * DELETE
  * HEAD
  * OPTIONS
  * wait


**how to consume the common REST API Methods**
-  import the utils from ya-done 
```js
import { utils } from 'ya-done-api';
await utils.GET(header, path); //please refer to the step3 for detailed example
```


###### Please share your feedback!!!

###### Thanks!! 🤝