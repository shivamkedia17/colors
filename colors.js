const toTitleCase = str =>
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1))
      .join(' ')

document.addEventListener('DOMContentLoaded', function() {
    let body = document.body
    let body_style = window.getComputedStyle(document.body);
    let bg_col = body_style.backgroundColor;

    let color_name = document.querySelector('#color');
    let color_div = document.querySelector('.color-input');
    let color_picker = document.querySelector('[name=bg-color]');

    color_name.innerHTML = toTitleCase(bg_col);

    color_div.style.background = bg_col;

    color_div.addEventListener('click', function() {
        color_picker.click();
    });

    function preview_color(event) {
        color_div.style.background = event.target.value;
        body.style.backgroundColor = event.target.value;
    };

    color_picker.addEventListener('input', preview_color)



})