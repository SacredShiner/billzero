const content = `
    var wrapper = document.getElementById("signature-pad"),
        clearButton = wrapper.querySelector("[data-action=clear]"),
        saveButton = wrapper.querySelector("[data-action=save]"),
        canvas = wrapper.querySelector("canvas"),
        signaturePad;
    
    // Adjust canvas coordinate space taking into account pixel ratio,
    // to make it look crisp on mobile devices.
    // This also causes canvas to be cleared.
    function resizeCanvas() {
        // When zoomed out to less than 100%, for some very strange reason,
        // some browsers report devicePixelRatio as less than 1
        // and only part of the canvas is cleared then.
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
    }
    
    window.onresize = resizeCanvas;
    resizeCanvas();
    
    signaturePad = new SignaturePad(canvas);
    
    signaturePad.onEnd = function () {
      if (signaturePad.isEmpty()) {
          window.ReactNativeWebView.postMessage("EMPTY");
          clearButton.style.display = "none"
      } else {
          window.ReactNativeWebView.postMessage(signaturePad.toDataURL());
          clearButton.style.display = "block"
      }
      //window.postMessage(signaturePad.toDataURL());
    }
    
    clearButton.addEventListener("click", function (event) {
        signaturePad.clear();
        window.ReactNativeWebView.postMessage(null);
        clearButton.style.display = "none"
    });
    
    saveButton.addEventListener("click", function (event) {
        if (signaturePad.isEmpty()) {
            window.ReactNativeWebView.postMessage("EMPTY");
        } else {
            window.ReactNativeWebView.postMessage(signaturePad.toDataURL());
        }
    });
`;

export default content;
