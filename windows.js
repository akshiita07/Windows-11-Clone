menuTaskbar= document.getElementById('tasbar-1');
searchTaskbar= document.getElementById('tasbar-2');
edgeTaskbar= document.getElementById('tasbar-5');

startMenu= document.getElementsByClassName('startMenu')[0];
searchMenu= document.getElementsByClassName('searchMenu')[0];
edgeMenu= document.getElementsByClassName('edgeMenu')[0];

menuTaskbar.addEventListener('click',()=>{
    if(startMenu.style.bottom=="-450px"){
        startMenu.style.bottom="50px"
    }
    else{
        
        startMenu.style.bottom="-450px"
    }
})


searchTaskbar.addEventListener('click',()=>{
    if(searchMenu.style.bottom=="-500px"){
        searchMenu.style.bottom="50px"
    }
    else{
        
        searchMenu.style.bottom="-500px"
    }
})

edgeTaskbar.addEventListener('click',()=>{
    if(edgeMenu.style.visibility=="hidden"){
        edgeMenu.style.visibility="visible"
    }
    else{
        
        edgeMenu.style.visibility="hidden"
    }
})