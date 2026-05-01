// Create a system to calc popcorn price based on the size customer asked

let size = 'M';

if (size === 'XL'){
    console.log('Rs. 250');
    
}
else if(size === 'L'){
    console.log('Rs. 200');
    
}
else if(size === 'M'){
    console.log('Rs. 100');

}
else if(size === 'S'){
    console.log('Rs. 50');

}


// A "good string" is a string that starts with the letter 'a' and has a length >3. write a program to find if a string is good or not.

let string = 'raman';

if(string[0] === 'a' && string.length > 3 ){
    console.log('good string');
    
}

else console.log('bad string');


// predict the output of the code ;

let num = 12;

if ((num%3 === 0)&& ((num+1 == 15)|| (num-1 == 11))){
    console.log("safe");
    
}
else{
    console.log("unsafe");
    
}


// use switch statement to print the day of the week using a number var "day" with val 1 - 7

let day = 5 ;

switch (day) {
    case 1:
        console.log('Mon');
        break;
    case 2:
        console.log('Tue');
        break;
    case 3:
        console.log('Wed');
        break;
    case 4:
        console.log('Thu');
        break;
    case 5:
        console.log('Fri');
        break;
    case 6:
        console.log('Sat');
        break;
    case 7:
        console.log('Sun');
        break;

    default :
        console.log('Week');
        break;
}


