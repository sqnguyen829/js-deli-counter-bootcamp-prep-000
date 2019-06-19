
//var takeANumber = function(c_Line,c_name){
//  c_Line.push(c_name);
//   return "Welcome, "+c_name+ ". You are number " + c_Line.length + " in line." 
//  }
var takeANumber = function(c_Line,c_num){
  c_Line.push(c_num)
  let i=0;
  i++
  
  return "welcome, you're number" + c_num
}
  
var nowServing = function(c_Line){
  if (c_Line.length > 0){
    return "Currently serving " + c_Line.shift() + "."
  }
  if (c_Line.length === 0){
    return  "There is nobody waiting to be served!"
  }
}

var currentLine = function(line){
  if (line.length > 0){
    let j=0;
    let s=""
    for (let i = 1; i <= line.length ; i++){
      if(i < line.length){
        s +=  i +". "+ line[j++] + ", "
      }
      if(i === line.length){
        s += i + ". " + line[j++]
      }
    }
    return "The line is currently: " + s
  }
  
  if (line.length === 0){
    return "The line is currently empty."
  }
}
  
  