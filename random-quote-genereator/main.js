const div=document.querySelector('.main');
const button=document.querySelector('.generate');
const loaderText=document.querySelector('.loading');

function showLoader(){
    loaderText.classList.add('show');
    div.classList.add('hide');
}

function removeLoader()
{
    loaderText.classList.remove('show');
    div.classList.remove("hide");
}


const title=document.createElement('h1');
const para=document.createElement('p');

async function randomQuote(){
    showLoader()
    const response=await fetch('https://api.quotable.io/quotes/random',{
        method:'GET'
    })

    try{
        const result= await response.json();
    console.log(result);
    if(result)
    removeLoader();
    createQuote(result);
    }
    catch(error){
        console.log(error)
    }
}

function createQuote(result){
   
    title.textContent=result[0].author;
    para.textContent=result[0].content;

    title.classList.add("title");
    para.classList.add("para");

    div.style.backgroundColor="white";
    div.appendChild(title);
    div.appendChild(para);

    console.log(div)

}

randomQuote();

button.addEventListener('click',()=>{
    randomQuote();
})

async function randomImages(){
    const response=await fetch('https://source.unsplash.com/random',{
        method:"GET"
    })

    console.log(response.url);
}
randomImages()