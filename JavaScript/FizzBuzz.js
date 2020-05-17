var n = 1
var output = [];
count = 1;

function FizzBuzz(){
    if((n%3 == 0) && (n%5 == 0)) {
        output.push("Fizz Buzz");
    }

   else if(n%3 == 0){
        output.push("Fizz");
    }
    else if(n%5 == 0){
        output.push("Buzz");
    }
        else{
        output.push(n);
    }
    n++;
    console.log(output);
}

while(count != 22){
    FizzBuzz();
    count++;
}
