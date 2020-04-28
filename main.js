document.getElementById('clear').addEventListener('click',function(){
    if(window.screen.width < 501){
    if(document.getElementById('clear-left').style.display=='none'){
        document.getElementById('clear-left').style.display='block';
    }
    else{
        document.getElementById('clear-left').style.display='none';
    }
}
    
})