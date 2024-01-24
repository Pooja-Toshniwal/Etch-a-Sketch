const container = document.querySelector('#container');
const create = () => {
    container.innerHTML="";
    let n = document.getElementById('range').value;
    container.style.color="blue";
    const gridwidth=600;
    for (let i = 0; i < n * n; i++) {
        const box = document.createElement('div');
        box.classList.add("box");
        box.style.width=box.style.height=`${(parseInt(gridwidth)/n)}px`;
        container.appendChild(box);
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
    }
    
};
function undo() {
    const kids = container.childNodes;
    kids.forEach(element => {
        element.style.backgroundColor = "white";
    });
}

