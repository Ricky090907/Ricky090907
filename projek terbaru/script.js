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
    var jawabanbenar1 = "pelaksanaan otonomi daerah";

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
    var jawabanbenar2 = "kepemimpinan nasional";

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
    var jawabanbenar3 = "gerakan mahasiswa indonesia 1998";

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
    var jawaban4 = document.getElementById("jawaban4").value;
    var jawabanbenar4 = "korupsi kolusi nepotisme";

    if (jawaban4 == jawabanbenar4) {
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
    var jawaban5 = document.getElementById("jawaban5").value;
    var jawabanbenar5 = "bj habibie";

    if (jawaban5 == jawabanbenar5) {
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

function cek6() {
    var jawaban6 = document.getElementById("jawaban6").value;
    var jawabanbenar6 = "penegakan supremasi hukum";

    if (jawaban6 == jawabanbenar6) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal6").style.display = "none"
        document.getElementById("soal7").style.display = "block"

        

    }
    else {
        document.getElementById("kunci6").style.display = "block"
        document.getElementById("alert6").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal6").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek7() {
    var jawaban7 = document.getElementById("jawaban7").value;
var jawabanbenar7 = "pemberantasan kkn";

    if (jawaban7 == jawabanbenar7) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal7").style.display = "none"
        document.getElementById("soal8").style.display = "block"

        

    }
    else {
        document.getElementById("kunci5").style.display = "block"
        document.getElementById("alert5").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal7").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek8() {
    var jawaban8 = document.getElementById("jawaban8").value;
    var jawabanbenar8 = "amien rais";

    if (jawaban8 == jawabanbenar8) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal8").style.display = "none"
        document.getElementById("soal9").style.display = "block"

        

    }
    else {
        document.getElementById("kunci5").style.display = "block"
        document.getElementById("alert5").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal8").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek9() {
    var jawaban9 = document.getElementById("jawaban9").value;
    var jawabanbenar9 = "demonstrasi dikampus besar";

    if (jawaban9 == jawabanbenar9) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal9").style.display = "none"
        document.getElementById("soal10").style.display = "block"

        

    }
    else {
        document.getElementById("kunci5").style.display = "block"
        document.getElementById("alert5").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal9").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek10() {
    var jawaban10 = document.getElementById("jawaban10").value;
    var jawabanbenar10 = "penghapusan dwifungsi abri";

    if (jawaban10 == jawabanbenar10) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal10").style.display = "none"
        document.getElementById("soal11").style.display = "block"

        

    }
    else {
        document.getElementById("kunci5").style.display = "block"
        document.getElementById("alert5").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal10").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek11() {
    var jawaban11 = document.getElementById("jawaban11").value;
    var jawabanbenar11 = "orde baru";

    if (jawaban11 == jawabanbenar11) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal11").style.display = "none"
        document.getElementById("soal12").style.display = "block"

        

    }
    else {
        document.getElementById("kunci5").style.display = "block"
        document.getElementById("alert5").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal11").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek12() {
    var jawaban12 = document.getElementById("jawaban12").value;
    var jawabanbenar12 = "masa kepemimpinan soeharto";

    if (jawaban12 == jawabanbenar12) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal12").style.display = "none"
        document.getElementById("soal13").style.display = "block"

        

    }
    else {
        document.getElementById("kunci5").style.display = "block"
        document.getElementById("alert5").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal12").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek13() {
    var jawaban13 = document.getElementById("jawaban13").value;
    var jawabanbenar13 = "masa reformasi";

    if (jawaban13 == jawabanbenar13) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal13").style.display = "none"
        document.getElementById("soal14").style.display = "block"

        

    }
    else {
        document.getElementById("kunci5").style.display = "block"
        document.getElementById("alert5").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal13").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek14() {
    var jawaban14 = document.getElementById("jawaban14").value;
    var jawabanbenar14 = "amandemen uud 1945";

    if (jawaban14 == jawabanbenar14) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal14").style.display = "none"
        document.getElementById("soal15").style.display = "block"

        

    }
    else {
        document.getElementById("kunci5").style.display = "block"
        document.getElementById("alert5").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal14").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}

function cek15() {
    var jawaban15 = document.getElementById("jawaban15").value;
    var jawabanbenar15 = "krisis multidimensi";

    if (jawabanbenar15 == jawabanbenar15) {
        document.getElementById("notifbenar").style.display = "block"
        document.getElementById("soal15").style.display = "none"
        document.getElementById("ending").style.display = "block"

        

    }
    else {
        document.getElementById("kunci5").style.display = "block"
        document.getElementById("alert5").style.display = "block"
        score -= 1
        document.getElementById("score").innerHTML = score
        document.getElementById("notifsalah").style.display = "block"
        if (score == 0) {
            document.getElementById("soal15").style.display = "none"
            document.getElementById("notifsalah").style.display = "none"
            document.getElementById("notifkalah").style.display = "block"
        }
    }
}



