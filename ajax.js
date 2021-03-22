//URL API
let url    = 'http://api.icndb.com/jokes/random'
let button = document.getElementById('button');
let jokeParagraph = document.getElementById('joke');
//calling function for init
ajaxCall()

//Calling fetch
function ajaxCall(){
fetch(url)
.then(response => response.json())
.then(data =>
    jokeParagraph.innerHTML = data.value.joke)
    
.catch(error => console.log(error))
}



//change image
function changeImage(){
    let image = document.getElementById('image0');

    if(image.src.match('gif0')){
        image.src = './img/chuk-gif1.gif'
    }else if(image.src.match('gif1')){
        image.src = './img/chuk-gif2.gif'
    }else if(image.src.match('gif2')){
        image.src = './img/chuk-gif3.gif'
    }else{
        image.src = './img/chuk-gif0.gif' 
    }    
}

//listener
button.addEventListener('click', ajaxCall);
button.addEventListener('click', changeImage);