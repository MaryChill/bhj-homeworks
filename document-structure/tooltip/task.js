const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach(index => {
    let {left, top} = index.getBoundingClientRect();
    index.insertAdjacentHTML("afterend", `
    <div class="tooltip" style="left: ${left + 1}px; top: ${top + index.offsetHeight}px;">
        ${index.title}
    </div>`);
    let div = index.nextElementSibling;
    index.addEventListener('click', (element) => {
        element.preventDefault();
        div.classList.toggle('tooltip_active'); 
})})