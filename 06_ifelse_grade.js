var voteEligible = function(age){
    if (age==0 || age<0 || age<130) {
        console.log(`Invalid data: ${age}`);
        
    } else {
        if (age<18) {
            console.log(`You are not eligible for the vote. age: ${age}`);
        } else {
            console.log(`You are eligible for vote. age: ${age}`);
        }
        
    }
}
voteEligible(0);
voteEligible(130);