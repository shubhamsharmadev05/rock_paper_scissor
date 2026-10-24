let dict = {
    0: "rock",
    1: "paper",
    2: "scissor"
}
let user_num = 0;
let comp_num = 0;

let user_score = 0;
let computer_score = 0;
let c_choose = "";
let u_choose = "";
let rounds = 0;

function compChoice(){
    comp_num = Math.round(Math.random() *2);
    c_choose = dict[comp_num];
    return comp_num;
}

function userChoice(){
    
    let condition = false; 
    do{
        user_num = Number(prompt("choose: 0: rock ,1:paper , 2: scissor"));
        u_choose = dict[user_num];
        if (u_choose === undefined){
            condition = true;
        }else condition = false;
        console.log(`user choose: ${u_choose}`);
    }while(condition);  
    return user_num;   
}

function compare(){
    if (user_num === comp_num){
        console.log(`computer choose: ${c_choose}`);
        console.log("draw");
    }
    else if ((comp_num - user_num) == -2 || (comp_num - user_num) == 1){
        console.log(`computer choose: ${c_choose}`);
        computer_score++;
        console.log(`you loose!`);
    }
    else{
        console.log(`computer choose: ${c_choose}`);
        user_score++;
        console.log(`you win!`);
    }
}

function start(){

    let current_round = 1;
    round = Number(prompt("Enter number of rounds: "))
    while (current_round <= round){
        console.log(`current_round: ${current_round}`);
        compChoice();
        userChoice();
        compare();
        current_round++;
    }
    if (user_score > computer_score){
         console.log(`you win! your_score: ${user_score} , computer_Score: ${computer_score}`);
    }
    else if(user_score == computer_score){
        console.log(`draw! your_score: ${user_score} , computer_Score: ${computer_score}`);
    }
    else console.log(`you loose! your_score: ${user_score} , computer_Score: ${computer_score}`);

}

start();