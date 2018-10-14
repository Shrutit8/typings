if (window.addEventListener) // W3C standard
{
  window.addEventListener('load', animate, false); // NB **not** 'onload'
} 
else if (window.attachEvent) // Microsoft
{
  window.attachEvent('onload', animate);
}

var defaultDelta = 800;
var defaultForwardDelta = 100;
var defaultBackwardDelta = 75;
var defaultSwitchDelta = 800;
var defaultContinuous = false;

function animate() {
    for (var i = document.getElementsByClassName("typings").length - 1; i >= 0; i--) {
        element = document.getElementsByClassName("typings")[i];
        
        var elementData = JSON.parse(element.getAttribute("type"));
        var originalText = element.innerText;
        var delta = element.hasAttribute("delta") ? parseInt(element.getAttribute("delta")) : defaultDelta;
        var switchDelta = element.hasAttribute("switchDelta") ? parseInt(element.getAttribute("switchDelta")) : defaultSwitchDelta;
        var forwardDelta = element.hasAttribute("forwardDelta") ? parseInt(element.getAttribute("forwardDelta")) : defaultForwardDelta;
        var backwardDelta = element.hasAttribute("backwardDelta") ? parseInt(element.getAttribute("backwardDelta")) : defaultBackwardDelta;
        var continuous = element.hasAttribute("mode") ? (element.getAttribute("mode") == "continuous" ? true : false) : defaultContinuous;
        var callback = element.hasAttribute("callback") ? element.getAttribute("callback") : "";
        
        setTimeout(
            moveLetters(element, originalText, elementData, 0, 0, true, continuous, delta, forwardDelta, backwardDelta, switchDelta, callback),
            0);
    }
}

function moveLetters(element, originalText, elementData, elementDataIndex, currentDataIndex, directionForwards, continuous, delta, forwardDelta, backwardDelta, switchDelta, callback) {
    var switchDirection = false;
    element.innerText = originalText + elementData[elementDataIndex].substring(0, currentDataIndex);
    var nextIndex = -1;
    var delta = 0;
    if(directionForwards) {
        if(currentDataIndex == elementData[elementDataIndex].length) {
            nextIndex = elementData[elementDataIndex].length - 1;
            directionForwards = !directionForwards;
            delta = switchDelta;
            if(!continuous && elementDataIndex == elementData.length - 1) {
                eval(callback);
                return;
            }
        }
        else {
            nextIndex = currentDataIndex + 1;
            delta = forwardDelta;
        }
    }
    else {
        if(currentDataIndex == 0) {
            nextIndex = 0;
            directionForwards = !directionForwards;
            delta = switchDelta;
            if(elementDataIndex == elementData.length - 1) {
                elementDataIndex = 0;
            }
            else {
                elementDataIndex = elementDataIndex + 1;
            }
        }
        else {
            nextIndex = currentDataIndex - 1;
            delta = backwardDelta;
        }
    }

    setTimeout(() => {
        moveLetters(element, originalText, elementData, elementDataIndex, nextIndex, directionForwards, continuous, delta, forwardDelta, backwardDelta, switchDelta, callback);
    }, delta);
}