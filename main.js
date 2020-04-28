document.getElementById('clear').addEventListener('click',function(){
        if(document.getElementById('clear-left').style.display=='none'){
            document.getElementById('clear-left').style.display='block';
        }
        else{
            document.getElementById('clear-left').style.display='none';
        }
});
document.getElementById('btn-hide').addEventListener('click',function(){
    if(document.getElementById('clear-left').style.display=='none'){
        document.getElementById('clear-left').style.display='block';
    }
    else{
        document.getElementById('clear-left').style.display='none';
    }
});

document.getElementById('main-icon').addEventListener('click',function(){
    document.getElementById('overlay').style.display="block";
    document.getElementById('body-overlay').style.display="block";
});
document.getElementById('overlay-btn1').addEventListener('click',function(){
    document.getElementById('overlay').style.display="none";
    document.getElementById('body-overlay').style.display="none";
});
document.getElementById('overlay-btn2').addEventListener('click',function(){
    document.getElementById('overlay').style.display="none";
    document.getElementById('body-overlay').style.display="none";
});


