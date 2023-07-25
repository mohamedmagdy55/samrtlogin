var nameSignUp=document.getElementById("nameSignUp")
var emailSignUp=document.getElementById("emailSignUp")
var passSignUp=document.getElementById('passSignUp')
var errormass=document.getElementById('errormass')
var ragexName=/^[A-Z][a-z]{2,7}/
var ragexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
var ragexPass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
var allperson
var SignUpbtn=document.getElementById('SignUpbtn')

var emaillog=document.getElementById("emaillog")
var passlog=document.getElementById("passlog")
var loginbtn=document.getElementById("logbtn")
var errormass2=document.getElementById('errormass2')
var Welcomemass=document.getElementById('Welcomemass')
var logoutbtn=document.getElementById('logout')


if(localStorage.getItem('person')!=null)
{ //to get itemin local storge we change type of array form string to ob by jeson.parse
    allperson=JSON.parse(localStorage.getItem('person'))
    // displayperson()
}else
{
    allperson=[]
}
if(document.contains(loginbtn))
{

loginbtn.addEventListener('click',function(){
    console.log('clicked');
    logincheck()
    
    })

}


if(document.contains(SignUpbtn)){
    SignUpbtn.addEventListener('click',function(){
        console.log('clicked');
        addperson()
        
        })





}



function addperson()
{
console.log('valid mail',validemail());

    if(validname()==true && validemail()==true && validpassword()==true)
    { 
   
        var person={
            name:nameSignUp.value,
            email:emailSignUp.value,
            password:passSignUp.value
            
        }
    // console.log(person);

        allperson.push(person)

        
        //to sit itemin locqal storge we change type of array form ob to string by jeson.stringfiy
        localStorage.setItem('person',JSON.stringify(allperson))
    // console.log(allperson);
       
        cleardata();
        errormass.innerHTML='Success'
         errormass.classList.add('Success')
         errormass.classList.remove('d-none')
         setTimeout(() => {
            window.open('index.html','_slif')
          }, "1000");
        // displayperson();
    }
    else{

    console.log('person is not');
    
    errormass.innerHTML='login Faild'
    errormass.classList.add('filed')
    errormass.classList.remove('d-none')


    }

    
}


function  cleardata(){
{
    nameSignUp.value=''
    emailSignUp.value=''
    passSignUp.value=''
} 
}
// =================================================================================

function validname()
{
    if( ragexName.test(nameSignUp.value) )
{ 
     nameSignUp.classList.add('is-valid')
     nameSignUp.classList.remove('is-invalid')
  errormass.innerHTML=''
  errormass.classList.add('d-none')
    return true;

}   else
{
  nameSignUp.classList.add('is-invalid')
  nameSignUp.classList.remove('is-valid')
  errormass.innerHTML='the name must be start with captal letter '
  errormass.classList.remove('d-none')
  

    return false;
}
}
if(document.contains(SignUpbtn)){nameSignUp.addEventListener('keyup',function(){

validname()

})}

// =================================================================================

function validemail()
{
    if( ragexEmail.test(emailSignUp.value) )
{ 
    console.log(checkmail(emailSignUp));
    if ( checkmail(emailSignUp)) {


        emailSignUp.classList.add('is-invalid')
        emailSignUp.classList.remove('is-valid')
        errormass.innerHTML='this email is Already exists  '
     errormass.classList.remove('d-none')
        
    
    } else {
        
       emailSignUp.classList.add('is-valid')
        emailSignUp.classList.remove('is-invalid')
        errormass.innerHTML=''
        errormass.classList.add('d-none')
        return true;
    }


    // if(checkmail(emailSignUp)==true)
    //     { 
           
    //         return true;
    //     }else
    //     {
           
    //         // alert("This Email already Exists")
    //         return false;
    //     }
    

}   else
{
    emailSignUp.classList.add('is-invalid')
    emailSignUp.classList.remove('is-valid')
    errormass.innerHTML='the email must be have @ and . befor the extantion <br> example @ name websit.com'
    errormass.classList.remove('d-none')
   



    return false;
}
}
if(document.contains(SignUpbtn)){emailSignUp.addEventListener('input',function(){

    validemail()

})}

// =================================================================================
function validpassword()
{
    if( ragexPass.test(passSignUp.value) )
{ 
    passSignUp.classList.add('is-valid')
    passSignUp.classList.remove('is-invalid')
    errormass.innerHTML=''
    errormass.classList.add('d-none')
    return true;

}   else
{
    passSignUp.classList.add('is-invalid')
    passSignUp.classList.remove('is-valid')


    errormass.innerHTML='the Password must be  start with captal letter and have special character and number  '
    errormass.classList.remove('d-none')
    return false;
}
}
if(document.contains(SignUpbtn)){
passSignUp.addEventListener('keyup',function(){

    validpassword()

})
}


//=====================================================================cheek
function checkmail(email) {
    var check=false;
   for(var i=0;i<allperson.length;i++)
   {
    if(allperson[i].email==email.value)
    {
        check=true;
        localStorage.setItem('userindex',allperson[i].name)
    }
   } 
   return check;
}
//=====================================================================cheek

function checkpassword(pass) {
    var check=false;
    for(var i=0;i<allperson.length;i++)
    {
     if(allperson[i].password==pass.value)
     {
         check=true;
 
     }
    } 
    return check;
 }


 function logincheck()
 {
    if(checkmail(emaillog)&&checkpassword(passlog))
    {
   
        setTimeout(() => {
            window.open('welcom.html','_slif')
          }, "1000");
          errormass2.innerHTML='succse'
      errormass2.classList.remove('d-none')
      errormass2.classList.replace('filed','Success')


    }else
    {
      errormass2.innerHTML='incurrct data'
      errormass2.classList.remove('d-none')
      

    }
    
    
    
 
 }


 

 if(document.contains(logoutbtn))
 {
    Welcomemass.innerHTML=localStorage.getItem('userindex')
    logoutbtn.addEventListener('click',function(){
        
            window.open('index.html','_slif')
          

    })
 }