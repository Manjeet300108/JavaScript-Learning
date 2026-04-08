let btn = document.querySelector('#btn');
let fileinp = document.querySelector("#file-inp");

btn.addEventListener("click",()=>{
    fileinp.click();
});

fileinp.addEventListener('change',(e)=>{
    const file = e.target.files[0];
    if(file){
        btn.textContent = file.name
    }
})