let imgs = document.getElementsByTagName('img');

let closeTerm = document.getElementById('close');

closeTerm.addEventListener('click', ()=>{
    let term = document.getElementById('term');
    term.style.display = "none";
});

let successBtn = document.getElementById('OK');

successBtn.addEventListener('click', ()=>{
    let success = document.getElementById('success');
    success.style.display = "none";
})

imgs[0].addEventListener('click', fisrtImage)

function fisrtImage(){
    let popup = document.getElementById('formPopup');
    popup.style.display = "block";
}

let arr = [];
let form = document.forms['myform'];

let sub = document.getElementById('submit');

sub.addEventListener('click', formSubmit);

function formSubmit(e){
    e.preventDefault();

    let name = form.name.value;
    let email = form.email.value;
    let userName = form.userName.value

    let nameArr = name.split(' ');
    if(name == "" || nameArr.length < 2){
        form.name.style.border = "2px solid red";
        form.name.style.backgroundColor = "lightred"; 
        
        let p = document.getElementById('alert');
        p.innerHTML = "Name should have at least 2 words!";
        p.style.display = "block";
        console.log(p);
        return;
    }else{
        form.name.style.border = "0px";
        form.name.style.backgroundColor = "white"; 
    }

    if(!ValidateEmail(email) || email == ""){
        form.email.style.border = "2px solid red";
        form.email.style.backgroundColor = "lightred"; 
        let p = document.getElementById('alert');
        p.innerHTML = "Enter a valid Email!"; 
        p.style.display = "block";
        return;
    }else{
        form.email.style.border = "0px";
        form.email.style.backgroundColor = "white"; 
    }

    let na = userName.split(' ');
    if(userName == "" || na.length < 1 || na.length > 1){
        form.userName.style.border = "2px solid red";
        form.userName.style.backgroundColor = "lightred"; 
        let p = document.getElementById('alert');
        p.innerHTML = "User Name should have maximum one word!";
        p.style.display = "block";
        return;
    }else{
        form.userName.style.border = "0px";
        form.userName.style.backgroundColor = "white"; 
    }



    let obj = {
        name:name,
        email:email,
        userName:userName
    }

    arr.push(obj);
    console.log(arr);
    console.log(obj);

    imgs[1].addEventListener('click', showDetails);
    imgs[0].removeEventListener('click', fisrtImage);
    imgs[0].classList.remove('active');

    imgs[1].classList.add('active');

    let popup = document.getElementById('formPopup');
    popup.style.display = "none";

}

//email validation 
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    // alert("You have entered an invalid email address!")
    return (false)
}


// Password validatoin 
function ValidPassword(Password){
    var capital = /[A-Z]/;
    var small = /[a-z]/;
    let number = /[0-9]/;
    let special = /[^a-zA-Z0-9]/;

    if(capital.test(Password) && small.test(Password) && number.test(Password) && special.test(Password)){
        return true;
    }else{
        return false;
    } 
}

function showDetails(){
    let obj = arr[0];

    let name = document.getElementById('nameLi');
    let user = document.getElementById('userNameLi');
    let email  = document.getElementById('emailLi');

    name.innerHTML = obj.name;
    user.innerHTML = obj.userName;
    email.innerHTML = obj.email;

    let details = document.getElementById('detail');

    details.style.display ="block";
    // console.log(details);

    imgs[2].addEventListener('click', dice);
    imgs[1].removeEventListener('click', showDetails);
    imgs[1].classList.remove('active');

    imgs[2].classList.add('active');

}

let dices = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

// image 3 function
function dice(){
    let score = document.getElementById('score');
    score.innerHTML = "Your Score : 0";

    let dicImg =  document.getElementById('diceImg');
    dicImg.src = "diceDefault.png";

    let details = document.getElementById('detail');
    details.style.display ="none";

    let dic = document.getElementById('dice');
    dic.style.display = "block";

    dic.addEventListener('click', shuffle);

    imgs[2].removeEventListener('click', dice);
    imgs[2].classList.remove('active');

    dic.classList.add('active');

}

let sum = 0;
let click = 0;
let t = 2;

function shuffle(){
    let dicImg = document.getElementById('diceImg');

    let random = Math.floor((Math.random()*6)+1);
    dicImg.src = dices[random-1];
    sum += random;

    let score = document.getElementById('score');

    score.innerHTML = "Your Score : " + sum;

    click++;
    console.log(sum, click);

    if(click >= 3){
        t--;
        if(sum > 10){
            let success = document.getElementById('success');
            success.style.display = "block";

            coupanImage();
            click = 0;
            sum = 0;
            return;
        }else{
            if(t <= 0){
                let message = document.getElementById('lm');
                let h3 = document.createElement('h3');

                h3.innerHTML = "BAD LUCK! Your Score is not more then 10!";
                h3.style.textAlign = "center";
                message.appendChild(h3);

                let dic = document.getElementById('dice');

                dic.removeEventListener('click', shuffle);
                dic.classList.remove('active');

                return;
            }else{
                sum = 0;
                click = 0;

                let dic = document.getElementById('dice');

                imgs[2].addEventListener('click', dice);
                dic.removeEventListener('click', shuffle);
                dic.classList.remove('active');

                imgs[2].classList.add('active');

                let term = document.getElementById('term');
                term.style.display = "block";
            }
        }
    }
}

function coupanImage(){
    // console.log("IN");
    let dic = document.getElementById('dice');
    imgs[3].addEventListener('click', coupan);

    dic.removeEventListener('click', shuffle);
    dic.classList.remove('active');

    imgs[3].classList.add('active');
}


// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function coupan() {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 12; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    let coupan = document.getElementById('coupan');
    coupan.innerHTML = "Your Coupan : "+ result;

    let congImage = document.getElementById('cong');
    congImage.src = "congrats.jpg";

    let final = document.getElementById('congrats');
    final.style.display = "block";


    imgs[3].removeEventListener('click', shuffle);
    imgs[3].classList.remove('active')
    
    
}
