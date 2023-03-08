let goalsCompleted=5;
let paymentsMissed=4;
let duration=24;

const total=100;
let obtainedPoints=0;

//for GoalsCompleted
{
    if(goalsCompleted>=10)
    {
        obtainedPoints +=20;
    }
    else if(goalsCompleted<10 && goalsCompleted>=8)
    {
        obtainedPoints +=15;
    }
    else if(goalsCompleted<8 && goalsCompleted>=4)
    { 
        obtainedPoints +=10;
    }
    else{

        obtainedPoints +=5;

    }
}

//for Duration
{

    if(duration==6)
    {
        obtainedPoints += 7.5;
    }
    else if(duration==12)
    {
        obtainedPoints += 15;
    }
    else if(duration==24)
    {
        obtainedPoints += 22.5;
    }
    else if(duration==36)
    {
        obtainedPoints += 30;
    }

}

//for Payments
{
    obtainedPoints+=50;
    let paymentPercentage=90;

    let percentageMissed=(paymentsMissed*100)/duration;
    
    if(percentageMissed>0 && percentageMissed<=10)
    {
        obtainedPoints -=10;
    }
    else if(percentageMissed>10 && percentageMissed<=20)
    {
        obtainedPoints -=20;
    }
    else if(percentageMissed>20 && percentageMissed<=30)
    {
        obtainedPoints -=30;
    }
    else if(percentageMissed>30 && percentageMissed<=50)
    {
        obtainedPoints -=40;
    }
    else if(percentageMissed>50 )
    {
        obtainedPoints -=50;
    }
}

console.log(obtainedPoints)
