let f1 = document.forms.f1;
let checkbox = f1.agree;
let button = f1.ok;




function signUp(){
    document.querySelector('.name_2').innerHTML = f1.elements['name'].value;
    document.querySelector('.surname_2').innerHTML = f1.elements['surname'].value;
    document.querySelector('.email_2').innerHTML = f1.elements['mail'].value;
    document.querySelector('.position_2').innerHTML = f1.elements['postion'].value;
    if(f1.elements['sex'].value === 'man'){
        document.querySelector('.man_woman__photo').src='img/boy.png';
    }else if(f1.elements['sex'].value === 'woman'){
        document.querySelector('.man_woman__photo').src='img/girl.png';
    }

    if(checkbox.checked){
        button.disabled = false;
        button.addEventListener('click',function(event){
            event.preventDefault();
            document.querySelector('.main_box').style.display = 'none';
            document.querySelector('.second_block').style.display = 'flex';
            checkbox.checked = false;
        })
    }else{
        button.disabled = true;
    }


}

function BackOf(){
    document.querySelector('.main_box').style.display = 'flex';
    document.querySelector('.second_block').style.display = 'none';
    checkbox.checked = true;
}
