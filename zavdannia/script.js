let f1 = document.forms.f1;

f1.move.addEventListener('click',function(){
    let first_name = f1.first.value;
    if(first_name.length>0){
        f1.second.value = first_name;
        f1.first.value = '';
    }else{
        console.log('You dont write your name');
    }
})

let f2 = document.forms.f2;

f2.third.addEventListener('blur',function(){
    let third = f2.third.value;
    if(third.length>0){
        f2.third.placeholder = third;
        f2.third.value = '';
    }else{
        console.log('You dont write your name');
    }
})