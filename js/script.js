

function changeColor(x){
    x.classList.remove("package-card");
    x.classList.add("card-diff");
}

function prevColor(x){
    x.classList.remove("card-diff");
    x.classList.add("package-card");
}
