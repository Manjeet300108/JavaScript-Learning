
let select = document.querySelector('select');
let device = document.querySelector("#device");

select.addEventListener("change",function(e){
    device.textContent = `${e.target.value} Is selected`;
})
