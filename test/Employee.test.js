// import Employee
// describe object being created
// should have id as a num, name as string, position as string, email as string
//method to check if arg is true or false
// test('', () => {
//   expect().toBe()
// })
const Employee = require('../library/Employee')

test('employee id as a number', () => {
  //setup
  const employee =  new Employee( 1, 'Stanley', 'Engineer', "email@email.com");
  // logic(avoid if possible)
  // compare
  expect(Number.isInteger(employee.id)).toBe(true)
});

test('employee has a name as a string', () => {
  const employee = new Employee( 2, 'Dwight', 'Assistant to the manager', 'beet@shrutefarm.com');
  expect().toBe()
});

test('employee has a position as a string', () => {
  const employee = new Employee( 3, 'Jim', 'manager', 'jim@dundermifflin.com');
  expect().toBe()
});

test('employee has a email as a string', () => {

});



