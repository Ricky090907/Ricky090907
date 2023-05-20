var score = 0;
var scoretampil = document.getElementById("score");

function notifsalah() {
    document.getElementById("notifsalah").style.display = "none"
    
}

function notifbenar() {
    document.getElementById("notifbenar").style.display = "none"
    
}


function notifkalah(url) {
    window.location = url
}


function restart(url) {
    window.location = url
}





    






function cek0() {
    document.getElementById("utama").style.display = "none"
    document.getElementById("soal1").style.display = "block"
    document.getElementById("header").style.display = "block"
    score = 3
    document.getElementById("score").innerHTML = score
    

}



function cek1() {
    var jawaban1 = document.getElementById("jawaban1").value;
    var jawabanbenar1 = "tergatung foto mal";

    if (jawaban1 == jawabanbenar1) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal1").style.display = "none"
        document.getElementById("soal2").style.display = "block"

        

    }
    else {
        document.getElementById("kunci1").style.display = "block"
        document.getElementById("alert1").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal1").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
    }
    }
}

function cek2() {
    var jawaban2 = document.getElementById("jawaban2").value;
    var jawabanbenar2 = "tergatung foto mal";

    if (jawaban2 == jawabanbenar2) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal2").style.display = "none"
        document.getElementById("soal3").style.display = "block"

        

    }
    else {
        document.getElementById("kunci2").style.display = "block"
        document.getElementById("alert2").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal2").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek3() {
    var jawaban3 = document.getElementById("jawaban3").value;
    var jawabanbenar3 = "tergantung gambar mal";

    if (jawaban3 == jawabanbenar3) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal3").style.display = "none"
        document.getElementById("soal4").style.display = "block"

        

    }
    else {
        document.getElementById("kunci3").style.display = "block"
        document.getElementById("alert3").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal3").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek4() {
    var jawaban3 = document.getElementById("jawaban4").value;
    var jawabanbenar3 = "prasasti telaga batu";

    if (jawaban3 == jawabanbenar4) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal4").style.display = "none"
        document.getElementById("soal5").style.display = "block"

        

    }
    else {
        document.getElementById("kunci4").style.display = "block"
        document.getElementById("alert4").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal4").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek5() {
    var jawaban3 = document.getElementById("jawaban3").value;
    var jawabanbenar3 = "";

    if (jawaban3 == jawabanbenar3) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal5").style.display = "none"
        document.getElementById("soal6").style.display = "block"

        

    }
    else {
        document.getElementById("kunci5").style.display = "block"
        document.getElementById("alert5").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal5").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}






