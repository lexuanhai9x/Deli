const p2_text = document.getElementsByClassName('text');
for (let i = 0; i < p2_text.length; i++) {
    p2_text[i].addEventListener('click',()=>{
        p2_text[i].classList.toggle('active');
    })
}

const p1_nut = document.getElementById('p1_nut');
const p2_nut = document.getElementById('p2_nut');
const p3_nut1 = document.getElementById('p3_n1');
const p3_nut2 = document.getElementById('p3_n2');
const p4_nut = document.getElementById('p4_nut');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
p1_nut.addEventListener('click',()=>{
    p1.classList.add('active');
    p2.classList.add('next');
})
p2_nut.addEventListener('click',()=>{
    p1.style.display = "none"
    p2.classList.add('pass');
    p2.classList.remove('next');
    p3.classList.add('next');
})
p3_nut1.addEventListener('click',()=>{
   p4.classList.add('active');
})
p3_nut2.addEventListener('click',()=>{
   p5.classList.add('active');
})
p4_nut.addEventListener('click',()=>{
   p4.classList.remove('active');
   p3_nut1.style.display="none";
})


//page 5

const item = document.getElementsByClassName('item');
const nen = document.getElementsByClassName('nen');
const anh = document.getElementById('anh_db');
console.log(nen);
for (let j = 0; j < item.length; j++) {
    if(j<3){
        item[j].addEventListener('click',()=>{
            nen[j].classList.add('active');
        })
    }
    else{
        item[j].addEventListener('click',()=>{
            nen[j].classList.add('active2');
            anh.classList.add('active3');
        })
    }
    
    
}

