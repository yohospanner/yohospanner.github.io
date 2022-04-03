var d = new Date();
y.innerText = d.getFullYear();

var score = 0;

$("#resetscore").click(() => {
    score = 0;
    $('#score').text(0);
    $("#CG1").attr("src", "images/gift2022.jpg");
    $("#CG1big").attr("src", "images/gift2022.jpg");
});

function addToScore(amount) {
    score = score + amount;
    document.getElementById("score").innerHTML = score;

    if (score >= 2022) {
        $("#doggie").attr("src", "images/10.jpg");
    }
    else if (score >= 1120) {
        $("#doggie").attr("src", "images/8.jpg");
    }
    else if (score >= 1010) {
        $("#doggie").attr("src", "images/6.jpg");
    }
    else if (score >= 414) {
        $("#doggie").attr("src", "images/4.jpg");
    }
    else {
        $("#doggie").attr("src", "images/2.jpg");
    }

    if (score == 2022) {
        $("#exampleModal").modal('show');
    }
}

var s = 1;
time();
function time() {
    setTimeout("time()", 1000);
    s -= 1
    if (s <= 0) {
        if (score >= 2022) {
            $("#doggie").attr("src", "images/9.jpg");
            $("#CG1").attr("src", "images/gift.jpg");
            $("#CG1big").attr("src", "images/gift.jpg");
        }
        else if (score >= 1120) {
            $("#doggie").attr("src", "images/7.jpg");
        }
        else if (score >= 1010) {
            $("#doggie").attr("src", "images/5.jpg");
        }
        else if (score >= 414) {
            $("#doggie").attr("src", "images/3.jpg");
        }
        else {
            $("#doggie").attr("src", "images/1.jpg");
        }
    }
}

//總次數紀錄
//取出
var scorestring = localStorage.getItem("finalscore");
if (scorestring) {
    $('#score').text(scorestring);
    let scoreint = parseInt(scorestring);
    score = scoreint;
}
//存入
$('#finalscore').click(() => {

    let finalscore = $('#score').text();

    localStorage.setItem("finalscore", finalscore);
});