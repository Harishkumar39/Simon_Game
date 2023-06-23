var randcolor=["red","blue","green","yellow"];
var newrandcolor=[];
var userclickedpat=[];
var randomnumber,i=1;

$(document).keypress(function(){
    var started=event.key;
    if(started==="A")
        nextsequence();
});

function userclickfn(){
    $(".btn").click(function(){
        var usercolor=$(this).attr("id");
        userclickedpat.push(usercolor);
        sounds(usercolor);
        animatepress(usercolor);
        checkans(userclickedpat.length-1);
        
    });
}

function checkans(currlevel){
    if(newrandcolor[currlevel]===userclickedpat[currlevel]){
        // console.log("Success");
        if(newrandcolor.length===userclickedpat.length){
            setTimeout(function(){
                nextsequence();
            },1000);
        }
    }
    else{
        // console.log("wrong");
        $("#level-title").text("Wrong pattern!! You lost the game.Press any key to restart.");
    }
}


function nextsequence(){
    $("#level-title").text("Level "+ i++);
    randomnumber=Math.floor((Math.random()*4));
    var randnewclr=randcolor[randomnumber];
    newrandcolor.push(randnewclr);


    $("#"+randnewclr).fadeIn(100).fadeOut(100).fadeIn(100);
    sounds(randnewclr);
    userclickfn();
}

function sounds(color){
    var audio=new Audio("sounds/"+color+".mp3");
    audio.play();
}

function animatepress(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setInterval(function(){
        $("."+currentcolor).removeClass("pressed");
    },100);
}
