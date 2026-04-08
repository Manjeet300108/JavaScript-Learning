let form = document.querySelector('form');
let inputs = document.querySelectorAll('input')
let main = document.querySelector('#main')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    // dynamic data and create element dynamically
    let card = document.createElement('div');
    card.classList.add('card');


    let profile = document.createElement('div');
    profile.classList.add('profile');

    let img = document.createElement('img');
    img.setAttribute('src',inputs[0].value)

    let h6 = document.createElement('h6');
    h6.textContent = inputs[1].value;

    let h4 = document.createElement('h4');
    h4.textContent = `@${inputs[2].value}`;

    let p = document.createElement('p');
    p.textContent = inputs[3].value;

    profile.appendChild(img)
    card.appendChild(profile);

    card.appendChild(h6);
    card.appendChild(h4);
    card.appendChild(p);

    main.appendChild(card);

})