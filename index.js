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

function currentLine(line){
  var results = [];
  for(var i=1; i<line.length; i++){
    results. push([i]+'. '+line[i]);
  }
  
  return "The line is currently: "+ results.join();
}