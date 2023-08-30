var AmIAfraid = function(day, num){
    if(day == "Saturday"){
        if(num == 56){
            return true ;
        }else{
            return false;
        }
    }
    else if (day == "Sunday"){
        if(num <= -666 || num >=666){
            return true ;
        }else{
            return false ;
        }
    }
    else if (day == "Monday"){
        if(num == 12){
            return true ;
        }else{
            return false ;
        }
    }
    else if (day == "Tuesday"){
        if(num > 95){
            return true ;
        }else{
            return false ;
        }
    }
    else if (day == "Wednesday"){
        if(num == 34){
            return true ;
        }
        else{
            return false ;
        }
    }
    else if (day == "Thursday"){
        if(num == 0 ){
            return true ;
        }else{
            return false ;
        }
    }
    else if (day == "Friday"){
        if(num % 2 == 0 ){
            return true ;
        }else{
            return false ;
        }
    }
}
