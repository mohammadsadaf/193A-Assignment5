
function bigger(){
    document.getElementById("textbox").style.fontSize = "24pt";
}

function myfunc(){
    txt = document.getElementById("textbox");
    const fancy = document.getElementById("fancy");
    if(fancy.checked){
        txt.style.fontWeight = "bold";
        txt.style.textDecoration = "underline";
        txt.style.color = "blue";

    }else{
        txt.style.fontWeight = "normal";
        txt.style.textDecoration = "none";
        txt.style.color = "";
    }
}

function moo(){
    const txt = document.getElementById("textbox");
    let val = txt.value.toUpperCase();

    const parts = val.split(".");
    for (let i = 0; i < parts.length; i++) {
        let s = parts[i].trim();
        if (!s) continue;
        let words = s.split(/\s+/);
        words[words.length - 1] = words[words.length - 1] + " - Moo";
        parts[i] = words.join(" ");
    }

 
    val = parts.join(".");
    if (txt.value.trim().endsWith(".") && !val.trim().endsWith(".")) {
        val = val.trimEnd() + ".";
    }

    txt.value = val;
}







