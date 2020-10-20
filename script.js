    
   const firstQuestions =  prompt("Please type first number:");
   const add1Number = parseInt(firstQuestions);
   const secondQuestions =  prompt("Please type second number:");
   const add2Number = parseInt(secondQuestions);
          /*multipl block*/
   const needMult = prompt("Do you want multiply?")
   if (firstQuestions && secondQuestions && needMult === 'yes'){
   console.log( 'Your result:' + firstQuestions * secondQuestions);
   } else if(needMult != 'yes'){
          /*summ block*/
       const needSumm = prompt("Do you want summ?")
        if(needSumm === 'yes'){
        console.log( 'Your result:' + firstQuestions + secondQuestions);
        }else if(needSumm != 'yes'){
          /* divide block*/
             const needDivi = prompt("Do you want divide?")
             if(needDivi === 'yes'){
             console.log( 'Your result:' + firstQuestions / secondQuestions);
          }
        }
  }
/* example*/

 