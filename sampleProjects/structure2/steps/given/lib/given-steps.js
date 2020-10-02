import {utils} from 'ya-done-api';
const addContext = require('mochawesome/addContext');
import expect from 'expect';

export default function () {
  return (
    this
      .given(
        'Get random postcode',
        async function getRandomAddressBygeneratingPostcode() {
          const path = `https://api.postcodes.io/random/postcodes`;
          const header = {'Content-Type': 'application/json'};
          const response = await utils.GET(header, path);
          expect(response.status).toEqual(200);
          addContext(this.mocha,
            `Random generated postcode : ${response.data.result.postcode}
            `);
        }
      )
      .given(
        'test the given step',
        async function testGivenSteps() {
          console.log('test Given'); // eslint-disable-line
        }
      )
  );
}
