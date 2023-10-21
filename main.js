random_color_boxes = [];
preview_color_boxes = [];
preview_index = 0;


window.onload = function(){
    createRandomColorBoxes();
    createPreviewColorBoxes();
    document.body.onkeyup = function (e) {
        if (e.key === " ") {
            newRandomColors();
        }
    }
}
function randomColor(){
    return ('#' + Math.floor(Math.random()*16777215).toString(16));
}

function createRandomColorBoxes(){
    let random_color_container = document.getElementById("random-colors");
    for(let i = 0; i < 6; i++){
        random_color_boxes[i] = document.createElement("div");
        random_color_boxes[i].classList.add("random-color");
        random_color_boxes[i].style.backgroundColor = randomColor();
        random_color_boxes[i].onclick = function() {addToPallete(i)};
        random_color_container.appendChild(random_color_boxes[i]);
    }

}
function createPreviewColorBoxes(){
    let preview_color_container = document.getElementById("preview-colors");
    for(let i = 0; i < 6; i++){
        preview_color_boxes[i] = document.createElement("div");
        preview_color_boxes[i].classList.add("preview-color");
        preview_color_container.appendChild(preview_color_boxes[i]);
    }
}
function addPreviewColorBox(){
    let preview_color_container = document.getElementById("preview-colors");
    preview_color_boxes[preview_index] = document.createElement("div");
    preview_color_boxes[preview_index].classList.add("preview-color");
    preview_color_container.appendChild(preview_color_boxes[preview_index]);
}

function newRandomColors(){
    for(let i = 0; i < random_color_boxes.length; i++){
        random_color_boxes[i].style.backgroundColor = randomColor();
    }
}

function addToPallete(index){
    let color_clicked = random_color_boxes[index].style.backgroundColor;
    
    if (preview_index >= preview_color_boxes.length){
        addPreviewColorBox();
    }
    preview_color_boxes[preview_index].style.backgroundColor = color_clicked;
    
    let tooltip = document.createElement("span");
    tooltip.classList.add("tooltiptext");
    tooltip.style.backgroundColor = "white";
    tooltip.innerHTML = rgbStringToHex(color_clicked);
    preview_color_boxes[preview_index].appendChild(tooltip);

    preview_index++;
}

function rgbStringToHex(color_str){
    color_vals = color_str.substring(4, color_str.length-1).split(",");
    return rgbToHex(parseInt(color_vals[0]), parseInt(color_vals[1]), parseInt(color_vals[2]));
}

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
  }