let score = prompt("Enter your score:");

score>= 97? alert("Your equivalent Grade is “1.00” Excellent"):
    score >= 94 && score <= 96? alert("96: Your equivalent Grade is “1.25” Excellent"):
    score >= 91 && score <= 93? alert("Your equivalent Grade is “1.50” Above Average"):
    score >= 88 && score <= 90? alert("Your equivalent Grade is “1.75” Above Average"):
    score >= 85 && score <= 87? alert("Your equivalent Grade is “2.00” Average"):
    score >= 82 && score <= 84? alert("Your equivalent Grade is “2.25” Average"):
    score >= 79 && score <= 81? alert("Your equivalent Grade is “2.50” Below Average"):
    score >= 76 && score <= 78? alert("Your equivalent Grade is “2.75” Below Average"):
    score == 75? alert("Your equivalent Grade is “3.00” Below Average"):
    score >= 72 && score <= 74? alert("Your equivalent Grade is “4.00” Poor"):
    alert("Your equivalent Grade is “5.00” Poor");

    if(score >= 90){
        alert("Final Remarks: HIGH PASS, Candidate for Cum Laude");
    }else if(score >= 80 || score <= 89){
        alert("Final Remarks: AVERAGE PASS");
    }else if(score >= 75 || score <= 79){
        alert("Final Remarks: LOW PASS"); 
    }else{
        alert("FAILED, Needs Improvement");
    }