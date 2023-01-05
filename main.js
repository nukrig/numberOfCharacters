const form=document.getElementById('form')
const text=document.querySelector('input[name="text"]')
const char=document.querySelector('input[name="char"]')
const btn=document.getElementById('button')
const li=document.getElementById('li')


function count(text,char){
    let result=0
    for(let i=0;i<text.length; i++){
        if(text[i]===char){
            result=result+1
        }
    }
    li.textContent= result
    li.style.marginTop='15px'
    li.style.fontSize='30px'
    if(result===0){
        li.style.color='red'
    }else if(result<=10){
        li.style.color='yellow'
    }else{
        li.style.color='green'
    }
}

btn.addEventListener('click', ()=>{
    let inputValue = text.value.toLowerCase()
    let charValue=char.value.toLowerCase()

    if(charValue.length>1){
        alert('Enter only One Character!')
    }
    if(!inputValue || !charValue){
        alert('Empty Value Provided')
        return
    }
    
    count(inputValue,charValue)
    text.value=''
    char.value=''
})
