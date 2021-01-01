const marco=document.querySelector('.box35')
const marcoPequeño=document.querySelector('.box70')
const sobreMi=document.querySelector('#sobre_mi')
const sobreMiButton=document.querySelector('#cerrar')
const marcoSobreMi=document.querySelector('.box18')
const subtitleSobreMi=document.querySelector('.subtitleSobreMi')


const oceanApp=document.querySelector('.box28')
const escualos=document.querySelector('.box29')
const fotografia=document.querySelector('.box30')
const models=document.querySelector('.box31')
const pesca=document.querySelector('.box32')
const tattoo=document.querySelector('.box33')
const github=document.querySelector('.box82')
const whatsapp=document.querySelector('.box83')
const instagram=document.querySelector('.box81')
const covid=document.querySelector('.box36')

//BOTONES 

const btn28=document.createElement('button')
const btn29=document.createElement('button')
const btn30=document.createElement('button')
const btn31=document.createElement('button')
const btn32=document.createElement('button')
const btn33=document.createElement('button')
const btn34=document.createElement('button')
const btn36=document.createElement('button')


//DAMOS ATRIBUTOS A LOS BOTONES 

btn28.setAttribute('id','btn28')
btn28.style.width="30%"
btn28.style.height="20px"
btn28.style.borderRadius="9px"
btn28.innerText="ENTRA"
btn28.style.boxShadow="9px 9px 9px lightblue"
btn28.style.backgroundColor="#821B0A"
btn28.style.color="white"
btn28.style.display="none"




btn29.setAttribute('id','btn29')
btn29.style.width="30%"
btn29.style.height="20px"
btn29.style.borderRadius="9px"
btn29.innerText="ENTRA"
btn29.style.boxShadow="9px 9px 9px lightblue"
btn29.style.backgroundColor="#821B0A"
btn29.style.color="white"
btn29.style.display="none"




btn30.setAttribute('id','btn30')
btn30.style.width="30%"
btn30.style.height="20px"
btn30.style.borderRadius="9px"
btn30.innerText="ENTRA"
btn30.style.boxShadow="9px 9px 9px lightblue"
btn30.style.backgroundColor="#821B0A"
btn30.style.color="white"
btn30.style.display="none"




btn31.setAttribute('id','btn31')
btn31.style.width="30%"
btn31.style.height="20px"
btn31.style.borderRadius="9px"
btn31.innerText="ENTRA"
btn31.style.boxShadow="9px 9px 9px lightblue"
btn31.style.backgroundColor="#821B0A"
btn31.style.color="white"
btn31.style.display="none"





btn32.setAttribute('id','btn32')
btn32.style.width="30%"
btn32.style.height="20px"
btn32.style.borderRadius="9px"
btn32.innerText="ENTRA"
btn32.style.boxShadow="9px 9px 9px lightblue"
btn32.style.backgroundColor="#821B0A"
btn32.style.color="white"
btn32.style.display="none"




btn33.setAttribute('id','btn33')
btn33.style.width="30%"
btn33.style.height="20px"
btn33.style.borderRadius="9px"
btn33.innerText="ENTRA"
btn33.style.boxShadow="9px 9px 9px lightblue"
btn33.style.backgroundColor="#821B0A"
btn33.style.color="white"
btn33.style.display="none"



btn34.setAttribute('id','btn34')
btn34.style.width="30%"
btn34.style.height="20px"
btn34.style.borderRadius="9px"
btn34.innerText="ENTRA"
btn34.style.boxShadow="9px 9px 9px lightblue"
btn34.style.backgroundColor="#821B0A"
btn34.style.color="white"
btn34.style.display="none"


btn36.setAttribute('id','btn36')
btn36.style.width="30%"
btn36.style.height="20px"
btn36.style.borderRadius="9px"
btn36.innerText="ENTRA"
btn36.style.boxShadow="9px 9px 9px lightblue"
btn36.style.backgroundColor="#821B0A"
btn36.style.color="white"
btn36.style.display="none"




/*SOBRE MÍ*/ 

sobreMi.style.display='none'

window.addEventListener('click',(e)=>{
    e.preventDefault()
    
    if(e.target.matches('.box18')){
        sobreMi.style.display='block'
    }
    if(e.target.matches('.subtitleSobreMi')){
        sobreMi.style.display='block'
    }
    if(e.target.matches('#cerrar')){
        sobreMi.style.display="none"
    }
})









window.addEventListener('click',mostrar)




function mostrar(e){
    e.preventDefault()
  
    if(e.target.matches('.box28')){
        
        marco.setAttribute('id','box28Marco')
        marco.appendChild(btn28)
        btn28.style.display="block"
        btn29.style.display="none"
        btn30.style.display="none"
        btn31.style.display="none"
        btn32.style.display="none"
        btn33.style.display="none"
        btn34.style.display="none"
        btn36.style.display="none"
        btn28.addEventListener('click',()=>{
            window.location.href='https://pensive-newton-281ac0.netlify.app/'
            btn28.style.backgroundColor='orangered'
        })
        
    }
  
  
   if(e.target.matches('.box29')){
        
    marco.setAttribute('id','box29Marco')
    marco.appendChild(btn29)
    btn29.style.display="block"
    btn28.style.display="none"
    btn30.style.display="none"
    btn31.style.display="none"
    btn32.style.display="none"
    btn33.style.display="none"
    btn34.style.display="none"
    btn36.style.display="none"
    btn29.addEventListener('click',()=>{
        window.location.href='https://makoart.github.io/escualosFront/'
        btn29.style.backgroundColor='orangered'

    })

}

if(e.target.matches('.box30')){
        
    marco.setAttribute('id','box30Marco')
    marco.appendChild(btn30)
    btn30.style.display="block"
    btn29.style.display="none"
    btn28.style.display="none"
    btn31.style.display="none"
    btn32.style.display="none"
    btn33.style.display="none"
    btn34.style.display="none"
    btn36.style.display="none"
    btn30.addEventListener('click',()=>{
        window.location.href='https://makoart.github.io/Laura__Fotografia/'
        btn30.style.backgroundColor='orangered'
    })
    

}

if(e.target.matches('.box31')){
        
    marco.setAttribute('id','box31Marco')
    marco.appendChild(btn31)
    btn31.style.display="block"
    btn29.style.display="none"
    btn30.style.display="none"
    btn28.style.display="none"
    btn32.style.display="none"
    btn33.style.display="none"
    btn34.style.display="none"
    btn36.style.display="none"
    btn31.addEventListener('click',()=>{
        window.location.href='https://sad-einstein-385599.netlify.app'
        btn31.style.backgroundColor="orangered"
    })
    
    

}

if(e.target.matches('.box32')){
        
    marco.setAttribute('id','box32Marco')
    marco.appendChild(btn32)
    btn32.style.display="block"
    btn29.style.display="none"
    btn30.style.display="none"
    btn31.style.display="none"
    btn28.style.display="none"
    btn33.style.display="none"
    btn34.style.display="none"
    btn36.style.display="none"
    btn32.addEventListener('click',()=>{
        window.location.href='https://app-clima-react-jsx.netlify.app'
        btn32.style.backgroundColor='orangered'
    })
  
 
}

if(e.target.matches('.box33')){
        
    marco.setAttribute('id','box33Marco')
    marco.appendChild(btn33)
    btn33.style.display="block"
    btn29.style.display="none"
    btn30.style.display="none"
    btn31.style.display="none"
    btn32.style.display="none"
    btn28.style.display="none"
    btn34.style.display="none"
    btn36.style.display="none"
    btn33.addEventListener('click',()=>{
        window.location.href='https://makoart.github.io/Tattoo-studio/'
        btn33.style.backgroundColor='orangered'
    })
    
}

if(e.target.matches('.box34')){
        
    marco.setAttribute('id','box34Marco')
    marco.appendChild(btn34)
    btn34.style.display="block"
    btn33.style.display="none"
    btn29.style.display="none"
    btn30.style.display="none"
    btn31.style.display="none"
    btn32.style.display="none"
    btn28.style.display="none"
    btn36.style.display="none"
    btn34.addEventListener('click',()=>{
        window.location.href='https://competent-golick-d7fdc1.netlify.app'
        btn34.style.backgroundColor="orangered"
       
    })
    
}

if(e.target.matches('.box36')){
        
    marco.setAttribute('id','box36Marco')
    marco.appendChild(btn36)
    btn36.style.display="block"
    btn34.style.display="none"
    btn33.style.display="none"
    btn29.style.display="none"
    btn30.style.display="none"
    btn31.style.display="none"
    btn32.style.display="none"
    btn28.style.display="none"
    btn36.addEventListener('click',()=>{
        window.location.href='https://eloquent-saha-4d9f80.netlify.app/'
        btn36.style.backgroundColor="orangered"
       
    })
    
}


if(e.target.matches('.box82')){
    window.location.href='https://github.com/MakoArt'
}
if(e.target.matches('.box81')){
    window.location.href='https://www.instagram.com/makoart2379/'
}
if(e.target.matches('.box83')){
   marcoPequeño.innerHTML='<h2 style="color:white;background-color:#8B3511">(+34) 654010103 (Manuel)</h2>'
}
if(e.target.matches('.box84')){
    window.location.href='https://app.netlify.com/teams/ninjavascript/overview'
  
}
if(e.target.matches('.box90')){
    window.location.href='https://www.shutterstock.com/es/g/Manuel+Gomez+Martinez?rid=241292968'
}











   
 
  
    
   

  
    
    
    














}
  
  
  
  
  
  
  
  
  
  
    




















