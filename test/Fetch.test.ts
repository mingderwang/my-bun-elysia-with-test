import 'isomorphic-fetch';

beforeEach(() => {
  console.log("running test.");
});

test("snap", () => {
  const res = fetch('https://jsonplaceholder.typicode.com/users/1');
  const result = JSON.stringify((res));
  expect(result).toMatchSnapshot();
});
