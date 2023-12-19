let formBtn = document.querySelector('.submit-btn');
let loader = document.querySelector('.loading');
formBtn.addEventListener('click', () => {
    let fullname =document.querySelector('#name') || null;
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let number = document.querySelector('#number') || null;
    let tac = document.querySelector('#tc') || null;
    if(fullname != null) {
        if(fullname.value.length < 3) {
            showFormError('name must be 3 letters long');
        } else if(!email.value.length) {
            showFormError('Enter your email');
        } else if(password.value.length < 8) {
            showFormError('password must be 8 letters long');
        } else if(Number(number) || number.value.length < 10) {
            showFormError('invalid number, plese enter valid one');
        } else if(!tac.checked) {
            showFormError('you must agree to our terms and conditions')
        } else {
            loader.style.display = 'block';
            sentDAta('/signup', {
                name:fullname.value,
                email:email.value,
                password: password.value,
                number: number.value,
                tac: tac.checked
            })
        }
    } else {
        if(!email.value.length  || !password.value.length) {
            showFormError('fill all the inputs')
        }
    }
});
function saveData() {
    let name,email,password,phoneNumber;
    name= document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    phoneNumber = document.getElementById("number").value;
    // localStorage.setItem("name",name);
    // localStorage.setItem("email",email);
    // localStorage.setItem("password",password);
    // localStorage.setItem("phoneNumber",phoneNumber);
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=> {
        return v.email==email;
    })){
        alert("this email already exist");
    } else {
        user_records.push({"name":name,"email":email,"password":password,"phoneNumber":phoneNumber});
        localStorage.setItem("users",JSON.stringify(user_records));
        alert("return to Login")
    }   
}
function saveLoginData() {
    let email,password,a;
   
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    a = document.querySelector('.homeroute')
    // localStorage.setItem("name",name);
    // localStorage.setItem("email",email);
    // localStorage.setItem("password",password);
    // localStorage.setItem("phoneNumber",phoneNumber);
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=> {
        return v.email==email && v.password == password;
    })){
        alert("login successfull");
        let current_user = user_records.filter((v)=>{
            return v.email==email && v.password ==password;
        })[0]
        localStorage.setItem("name",current_user.name);
        localStorage.setItem("email",current_user.email);
        window.location.href = "index.html";
        console.log(window.location.href);
    } else {
        alert('login fail');
    }
    
}
