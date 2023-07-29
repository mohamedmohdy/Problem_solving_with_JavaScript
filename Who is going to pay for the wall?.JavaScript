function whoIsPaying(name){
let aray_names_1 = [] ;
let aray_names_2 = [] ;
let names = [] ;
let numper = name.length-1 ;
if(numper >= 2 ){
  aray_names_1.push(name) ;
  aray_names_2 = name.slice(0,2);
  names = names.concat(aray_names_1 , aray_names_2);
  return names ;
}else{
  names.push(name);
  return names ;
}
}
