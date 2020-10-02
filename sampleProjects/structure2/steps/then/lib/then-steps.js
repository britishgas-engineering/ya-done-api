
export default function () {
  return (
    this
      .then(
        'test the then step',
        async function testThenSteps() {
          console.log('test then'); // eslint-disable-line
        }
      )
  );
}
