// by java script code wee have to switch the classes of the divs
const panel = document.querySelectorAll('.panel');
panel.forEach((panel)=>{
  panel.addEventListener('click',()=>{
    removeActiveClasses();
   panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panel.forEach((panel)=>{
    panel.classList.remove('active')
  })
}