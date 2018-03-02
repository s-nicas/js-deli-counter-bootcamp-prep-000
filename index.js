var katzDeli=[];

function takeANumber (katzDeli, newCustomer){
  katzDeli.push(newCustomer);
  return 'Welcome, ' +newCustomer+ '. You are number ' +katzDeli.length + ' in line.';
  
}

function nowServing(katzDeli){
  if(katzDeli.length===0){
    return "There is nobody waiting to be served!";
  }
  else {
  return 'Currently serving ' + katzDeli.shift()+ '.';
  }
}

function currentLine(katzDeli){
  var results = [];
  for(var i=0; i<katzDeli.length; i++){
    results. push([i]+'. '+katzDeli[i]);
  }
  
  return "The line is currently: "+ results.join();
}