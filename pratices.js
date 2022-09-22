
let heading=document.querySelector('.heading');
let button=document.querySelector('.button')
button.addEventListener('clickme',()=>{
    button.innerHTML="I am chaged to nagaraju";
    heading.innerHTML="iam also chaged";
    heading.style.cssText="color:green;background-color:red;text-transform:uppercase";
//    heading .classList.toggle('heading')
})



