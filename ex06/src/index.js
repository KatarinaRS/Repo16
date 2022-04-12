let firstName = (firstName) => {
    return firstName.toUpperCase();
  };
  let lastName = (lastName) => {
    return lastName.toLowerCase();
  };
  console.log(firstName("Katarina"));
  console.log(lastName("Roser Salihovic"));
  
  exports.firstName = firstName;
  exports.lastName = lastName;