const div = document.querySelectorAll('.text')

//Iniciando primeira div aberta
let m = document.querySelector('.m-1')
let p = document.querySelector('.p-1')
let off_1 = document.querySelector('.off-1')

m.classList.add('open')
p.classList.add('close')
off_1.classList.add('open')

div.forEach((div) => {
  div.addEventListener('click', () => {
    
    let off = div.querySelector('.text-off')
    let minus = div.querySelector('.minus')
    let plus = div.querySelector('.plus')
    
    if(off.classList.contains('text-off')){  
      plus.classList.toggle('close')
      minus.classList.toggle('open')
      off.classList.toggle('open')
      
    }


  }); 

  div.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
      e.preventDefault()
      div.click()
    }
  })

});