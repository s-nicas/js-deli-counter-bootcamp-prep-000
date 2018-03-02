var katzDeli=[];

function takeANumber (katzDeli, newCustomer){
  katzDeli.push(newCustomer);
  return 'Welcome, ' +newCustomer+ '. You are number ' +katzDeli.length+1+ ' in line.';
  
}