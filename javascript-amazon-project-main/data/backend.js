const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);
}); //the event listens to the event

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

