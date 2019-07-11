console.log('Javascript is loaded successoively');

fetch('http://puzzle.mead.io/puzzle').then((response)=>{

response.json().then((data)=>{

    
    console.log(data);
});

});

const weatherForm = document.querySelector('form');

const search       = document.querySelector('input');
const messageOne   = document.querySelector('#message-1');
messageOne.textContent = 'Im here';

weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault();
    const location = search.value();


    console.log(location);
//console('testing');
});






