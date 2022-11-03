






function isChecked(){
    if($('#Pomidorche').checked){
        $('#Pomidor').style.display = "block";
        const cllist =    $('.undef3').classList;
        cllist.add("d-none")  
    }
    else{
        $('#Pomidor').style.display = "none";
    }
}
function isChecked1(){
    if($('#Bodring').checked){
        $('#bodringe').style.display = "block";
        const cllist =    $('.undef3').classList;
        cllist.add("d-none")  
    }
    else{
        $('#bodringe').style.display = "none";
    }
}
function isChecked2(){
    if($('.check_box').checked){
        $('.Kurka').style.display = "block";
        const cllist =    $('.undef3').classList;
        cllist.add("d-none")  
    }
    else{
        $('.Kurka').style.display = "none";
    }
}
function isChecked3(){
    if($('.check_box-r2').checked){
        $('.Qoziqorin').style.display = "block";
        const cllist =    $('.undef3').classList;
        cllist.add("d-none")  
    }
    else{
        $('.Qoziqorin').style.display = "none";
    }
}
function isChecked4(){
    if($('.check_box-l1').checked){
        $('.Zaytun').style.display = "block";
        const cllist =    $('.undef3').classList;
        cllist.add("d-none")  
    }
    else{
        $('.Zaytun').style.display = "none";
    }
}
function isChecked5(){
    if($('.check_box-r3').checked){
        $('.Qazi').style.display = "block";
        const cllist =    $('.undef3').classList;
        cllist.add("d-none")  
    }
    else{
        $('.Qazi').style.display = "none";
    }
}

function isChecked6(){
    if($('.check_box-l2').checked){
        $('.Achiq').style.display = "block";
        const cllist =    $('.undef4').classList;
        cllist.add("d-none")  
    }
    else{
        $('.Achiq').style.display = "none";
    }
}
function isChecked7(){
    if($('.check_box-r').checked){
        $('.Sosiskali').style.display = "block";
        const cllist =    $('.undef4').classList;
        cllist.add("d-none")  
    }
    else{
        $('.Sosiskali').style.display = "none";
    }
}


function getSelectValue(){
    var selectedVlaue = document.getElementById('list').value;
    console.log(selectedVlaue);
    if(selectedVlaue=='0'){
        $('.yupqa').style.display = 'inline-block'
        $('.ortacha').style.display = 'none'
        $('.qaln').style.display = 'none'

        const cllist =    $('.undef1').classList;
        cllist.add("d-none")     
    }else if(selectedVlaue=='1'){
        $('.ortacha').style.display = 'inline-block'
        $('.yupqa').style.display = 'none'
        $('.qaln').style.display = 'none'

        const cllist =    $('.undef1').classList;
        cllist.add("d-none")     
    }else if(selectedVlaue=='2'){
        $('.qaln').style.display = 'inline-block'
        $('.yupqa').style.display = 'none'
        $('.ortacha').style.display = 'none'

        const cllist =    $('.undef1').classList;
        cllist.add("d-none")     
    }
}




$('.btn_1').addEventListener('click',()=>{
    $('.tfcm').style.display = 'inline-block'
    $('.thcm').style.display = 'none'
    $('.thfcm').style.display = 'none'
    
    const cllist =    $('.undef2').classList;
    cllist.add("d-none")  
    
})
$('.btn_2').addEventListener('click',()=>{
    $('.thcm').style.display = 'inline-block'
    $('.tfcm').style.display = 'none'
    $('.thfcm').style.display = 'none'
    
    const cllist =    $('.undef2').classList;
    cllist.add("d-none")  
    
})
$('.btn_3').addEventListener('click',()=>{
    $('.thfcm').style.display = 'inline-block'
    $('.tfcm').style.display = 'none'
    $('.thcm').style.display = 'none'
    
    const cllist =    $('.undef2').classList;
    cllist.add("d-none")  
    
})

$('.submitt').addEventListener('click', ()=>{
    alert('Rahhmat, Yozganingizni 10 minut ichida korib chiqamiz!!') 
}
)







$('.final_btn').addEventListener('click', ()=>{
    let findee1 = $('.undef1').classList.contains("d-none")
    let findee2 = $('.undef2').classList.contains("d-none")
    let findee3 = $('.undef3').classList.contains("d-none")
    let findee4 = $('.undef4').classList.contains("d-none")
    
    if(findee1==false){
        $('.warning_text1').style.display = 'block'
        console.log(findee1);
    }else{
        console.log(findee1);
        $('.warning_text1').style.display = 'none'
        
    }

    if(findee2==false){
        $('.warning_text2').style.display = 'block'
        console.log(findee2);
    }else{
        console.log(findee2);
        $('.warning_text2').style.display = 'none'
        
    }

    if(findee3==false){
        $('.warning_text3').style.display = 'block'
        console.log(findee3);
    }else{
        console.log(findee3);
        $('.warning_text3').style.display = 'none'
        
    }

    if(findee4==false){
        $('.warning_text4').style.display = 'block'
        console.log(findee4);
    }else{
        console.log(findee4);
        $('.warning_text4').style.display = 'none'
        
    }

    if(findee1&&findee2&&findee3&&findee4==true){
        console.log('sucsess');
        $('.big').style.display = 'block'
        $('section').style.display = 'none'
        $('header').style.display = 'none'
    }
})






























