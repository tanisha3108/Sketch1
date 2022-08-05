function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}



function clearCanvas() {

    background("white");
}

function draw() {
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult() {
    if (error) {
        console.error(error);
    }
    console.log(results);
    document.getElementsById('label').innerHTML = 'Label: ' + results[0]

    document.getElementsById('confidence').innerHTML = 'Confidence: ' + results[0]

    utterThis = new SpeechSynthesisisUtterance(results[0].label);
    synth.speak(utterThis);

    
}

