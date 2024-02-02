function toUpperCase() {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toUpperCase();
}

function toLowerCase() {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toLowerCase();
}

function toProperCase() {
    let text = document.querySelector("textarea").value;
    let words = text.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }

    document.querySelector("textarea").value = words.join(' ');
}

function toSentenceCase() {
    let text = document.querySelector("textarea").value;
    const words = text.toLowerCase().split('. ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }

    document.querySelector("textarea").value = words.join('. ');
}

function downloadText() {
    let text = document.querySelector("textarea").value;
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}