const btn = document.querySelectorAll(".btn");
const num = document.querySelector("#count");

let count = 0;
btn.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        const style = e.currentTarget.classList;
        if(style.contains('increase')){
            count++;
        }else if(style.contains('decrease')){
            count--;
        }else{
            count = 0;
        }
        if(count > 0){
            num.style.color = "green";
        }else if(count < 0){
            num.style.color = "red";
        }else{
            num.style.color = "black";
        }
        num.textContent = count;
    })
}); 