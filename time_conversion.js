// Time Conversion
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// example 1
// s = '12:01:00PM'
// return '12:01:00'

//example 2
// s = '12:01:00AM'
// return '00:01:00'

function timeConversion(s) {
 let a = s.substr(0,8); //00:00:00
 let b = s.substr(8); // pm/am
 let c = s.substr(0,2); // 00
 let d = a.substr(2);
 let n = 13;
//  return d
 if(b == 'PM'){
 for (var i = 1; i <= 11; i++) {
     if(c == i){
         return n+d;
     }else if(c == 12){
         return a;
     }
 n++}
 }else if(b == 'AM'){
    if(c == 12){
        return '00'+d
    }else{
        return a;
    }
 }
}

timeConversion('12:01:00PM')
