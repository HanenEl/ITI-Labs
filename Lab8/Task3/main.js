document.addEventListener("DOMContentLoaded", function () {
    const mainText = document.getElementById('main_tx');

    function updateStyle() {
        mainText.style.fontFamily = document.querySelector('input[name="fontFamily"]:checked').value;
        mainText.style.textAlign = document.querySelector('input[name="textAlign"]:checked').value;
        mainText.style.lineHeight = document.querySelector('input[name="lineHeight"]:checked').value;
        mainText.style.letterSpacing = document.querySelector('input[name="letterSpacing"]:checked').value;
        mainText.style.textIndent = document.querySelector('input[name="textIndent"]:checked').value;
        mainText.style.textTransform = document.querySelector('input[name="textTransform"]:checked').value;
        mainText.style.textDecoration = document.querySelector('input[name="textDecoration"]:checked').value;
        mainText.style.borderStyle = document.querySelector('input[name="borderStyle"]:checked').value;
        mainText.style.borderColor = document.querySelector('input[name="borderColor"]:checked').value;
    }

    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', updateStyle);
    });

    updateStyle();
});


