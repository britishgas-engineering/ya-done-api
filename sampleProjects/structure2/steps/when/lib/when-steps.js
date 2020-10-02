
export default function () {
  return (
    this
      .when(
        'test the when step',
        async function testWhenSteps() {
          console.log('test When'); // eslint-disable-line
        }
      )
  );
}
