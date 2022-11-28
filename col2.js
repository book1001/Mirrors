async function load(url) {
    let result = await fetch(url);
    readText(await result.text());
}

function readText(text) {
    let contents = splitText(text);
    let innerHtml = createHtml(contents);

    let shortcuts = document.getElementById("shortcuts-text");
    shortcuts.innerHTML = innerHtml;
}

function splitText(text) {
    if(text.includes("\r\n")) {     // for windows
        return text.split("\r\n")
    }
    else if(text.includes("\r")) {       // for mac
        return text.split("\r");
    }
    else if(text.includes("\n")) {       // for unix
        return text.split("\n");
    }
    return text;
}

function createHtml(contents) {
    let html = "";
    for(let i=0; i<contents.length; i++) {
        let line = contents[i];
        if(i == 0) {                                    // if first line
            line = line + " | "
        }
        else if(line.includes("Oil") ||          // if line contains (Oil, Plaster, Bronze)
                line.includes("Walnut") ||
                line.includes("Bronze")) {
            line = " | " + line + "<br><br>";
        }
        html += line + " ";
    }
    return html;
}

window.onload = function() {
    // load('Sample_text/data.txt');
    load('Shortcuts_text/data.txt');
}
