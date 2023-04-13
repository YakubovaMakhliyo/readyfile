const korzinOpen=document.getElementById("hd-btn")
const korzinmodal=document.getElementById("md-korzin")
const bodywrap=document.getElementById("wrapp")
const defaultclose=document.getElementById("df-btn")
const korzinbooking=document.getElementById("book-btn")
const badge = document.getElementById("badge");

const total = document.getElementById("total");
let korzinka=[]

// products selector 
const cardsParent = document.querySelector('.Allcards'),
      meatcardsParent = document.querySelector('.meatcards'),
      cheasecardsParent = document.querySelector('.cheaseCards'),
      qoziqornliCardsParent = document.querySelector('.qoziqornliCards'),
      spicyCardsParent = document.querySelector('.spicyCards')


// request
const allCards = async (resourse) => {
const request = await fetch(resourse)
const data = await request.json()
return data
}
const url = 'http://localhost:7777/barcha-pitsalar'
allCards(url)
.then(data => AllPitsa(data))


const meatCards = async(resourse) => {
  const request = await fetch(resourse)
  const data = await request.json() 
  return data
}
const url2 = 'http://localhost:7777/goshtli'
meatCards(url2)
.then(data => meatCardsRoot(data))


const cheaseCards = async (resourse) => {
  const request = await fetch(resourse)
  const data = await request.json()
  
  return data
}
const url3 = 'http://localhost:7777/pishloqli'
cheaseCards(url3)
.then(data => cheaseCardsRoot(data))


const qoziqorinliCards = async(resourse) => {
  const request = await fetch(resourse)
  const data = await request.json()
  return data
}
const url4 = 'http://localhost:7777/qoziqorinli'
qoziqorinliCards(url4)
.then(data => qoziqornliCardsRoot(data) )


const spicyCards = async (resourse) => {
  const request = await fetch(resourse)
  const data = await request.json()
  return data
}

const url5 = 'http://localhost:7777/achchiq'
spicyCards(url5)
.then(data => spicyCardsRoot(data))


const getFormodal = async (resourse) => {
  const request = await fetch(resourse)
  const data = await request.json()
  return data
} 

function itemId(id) {
  const urlModal = `http://localhost:7777/barcha-pitsalar/${id}`
  getFormodal(urlModal)
  .then(data => modalContent(data))
}
// pitsanimodaligachiqarish

  const modalContent =function(data) {
  const modalImg = document.querySelector('#madalImg'),
        modalTitle = document.querySelector('.modalTitle'),
        modalText = document.querySelector('.modalText'),
        modalPrice = document.querySelector('.modal-price')


        modalImg.src = data.image;
        
        console.log(modalPrice);
        modalText.textContent = data.description;
        modalTitle.textContent = data.title;
        modalPrice.textContent = data.price;


}




// hrml root render 
function render(htmlRoot,data) {
  data.forEach( (item,id) => {
    htmlRoot.innerHTML += `
    
    <div class="cards-item id="${item.id}">
    <div class="cards-item__img" id="${item.id}">
    <img src="${item.image}" alt="${item.title}" class="cards-item__img-image" id="${item.id}">
    </div>
    <div class="cards-item__text" id="${item.id}">
      <h4 class="cards-item__text__title" id="${item.id}">${item.title}</h4>
      <p class="cards-item__text__descr" id="${item.id}">
        ${item.description}
      </p>
    </div>
    <div class="cards-item__button" id="${item.id}">
      <b class="price" id="${item.id}">
        ${item.price}
      </b>
       <span id="${item.id}"></span>
    </div>
  </div>
    `
  });
}

// xohlagan joyini bosganda ochishi

document.body.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('cards-item') ||
    e.target.classList.contains('cards-item__img') ||
    e.target.classList.contains('cards-item__img-image') ||
    e.target.classList.contains('cards-item__text') ||
    e.target.classList.contains('cards-item__text__descr') ||
    e.target.classList.contains(' cards-item__button') 
    ) {
      itemId(e.target.id)
    }  
})



function AllPitsa(data){
render(cardsParent,data)
}


function meatCardsRoot(data) {
render(meatcardsParent,data)
}

function cheaseCardsRoot(data) {
  render(cheasecardsParent,data)
}


function qoziqornliCardsRoot(data) {
  render(qoziqornliCardsParent, data)
}

function spicyCardsRoot(data) {
  render(spicyCardsParent, data)
}



// tabs 
const tabs = document.querySelectorAll('.tabs-item'),
      rootItems = document.querySelectorAll('.root')

      tabs.forEach((item,id) =>{
        item.addEventListener('click', () => {
          rootItems.forEach((root,i) => {
            if (id === i) {

              tabs[i].classList.add('active')
              root.classList.remove('hidden')
            } else{
              tabs[i].classList.remove('active')
              root.classList.add('hidden')
            }
          })
        })
      })


// open modal

const madolField = document.querySelector('.madol-field')
document.body.addEventListener('click', (e) => {
if (
  e.target.classList.contains('cards-item') ||
  e.target.classList.contains('cards-item__img') ||
  e.target.classList.contains('cards-item__img-image') ||
  e.target.classList.contains('cards-item__text') ||
  e.target.classList.contains('cards-item__text__descr') ||
  e.target.classList.contains(' cards-item__button') 
  ) {
  madolField.classList.remove('hidden')
  const cards = document.querySelectorAll('.cards-item')
  
}
})


// close modal 
const arrowCLose  = document.querySelector('.arrow')
arrowCLose.addEventListener('click', () => {
  madolField.classList.add('hidden')

})

madolField.addEventListener('click', (e) => {
    if (e.target.classList.contains('madol-field')) {
      madolField.classList.add('hidden')
    }
})

window.addEventListener('keyup', (e) => {
  if (e.key  === 'Escape') {
    madolField.classList.add('hidden')
  }
} )






// const addBtn = document.querySelector('.addBtn')

// addBtn.addEventListener('click', () => {
//   const cards = document.querySelectorAll('.cards-item')
//   cards.forEach(card => {
//     const cardsClone = card.cloneNode(true),
//     cardImg = cardsClone.querySelector('.cards-item__img-image'),
//     cardTitle = cardsClone.querySelector('.cards-item__text__title'),
//     cardText = cardsClone.querySelector('.cards-item__text__descr'),
//     cardPrice = cardsClone.querySelector('.price')


//     values.title = cardTitle.textContent;
//     values.img = cardImg.src;
//     values.description = cardText.textContent;
//     vau

//   })

// })





// live search 



const searchInput = document.querySelector('#search')


searchInput.addEventListener('input', () => {
const cardTitles = document.querySelectorAll('.cards-item__text__title')

cardTitles.forEach(title => {
  if (title.textContent.toLowerCase().includes(searchInput.value.toLowerCase().trim())) {
     title.parentElement.parentElement.classList.remove('hidden')
  }else{
    title.parentElement.parentElement.classList.add('hidden')
  }
})

})


korzinOpen.addEventListener("click",()=>{
  korzinmodal.classList.remove("hidden")
  bodywrap.classList.add("hidden")

})
korzinOpen.addEventListener("click",()=>{
  korzinmodal.classList.remove("hidden")
  bodywrap.classList.add("hidden")

})
defaultclose.addEventListener("click",()=>{
  korzinmodal.classList.add("hidden")
  bodywrap.classList.remove("hidden")

})

korzinbooking.addEventListener("click",()=>{
  korzinmodal.classList.add("hidden")
  bodywrap.classList.remove("hidden")
  

})
const calc = document.getElementById("calc");
let current = 1;
function inc() {
  calc.textContent = current + 1 + "-ta";
  current++;
}
function dec() {
if (current > 0) {
  calc.textContent = current - 1 + "-ta";
  current--;

}
}
const typebtn1 = document.getElementById("type1");
const typebtn2 = document.getElementById("type2");

function modalIngich() {
  type1.style.background="white";
  type2.style.background=" #f4f4f4";
}
function modalQalin() {
  type2.style.background="white";
  type1.style.background=" #f4f4f4";
}
const addtoshopper = document.getElementById("addtoshopp")




// // Korzinkaga qoshish & locol set


const getLocol = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : [];


const setToLocol = async (resourse) => {
  const request = await fetch(resourse)
  const data = await request.json()
  return data
} 

function getIDlocol(id) {
  const urlLocol = `http://localhost:7777/barcha-pitsalar/${id}`
setToLocol(urlLocol)
.then(data => locolAdd(data))

}

function locolAdd(data) {
  const addBtn = document.querySelector('.addBtn')

    addBtn.addEventListener('click', () => {
      getLocol.push(data)
      localStorage.setItem('list',JSON.stringify(getLocol))
      madolField.classList.add('hidden')
      window.location.reload()

    })
}
document.body.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('cards-item') ||
    e.target.classList.contains('cards-item__img') ||
    e.target.classList.contains('cards-item__img-image') ||
    e.target.classList.contains('cards-item__text') ||
    e.target.classList.contains('cards-item__text__descr') ||
    e.target.classList.contains(' cards-item__button') 
    ) {
      getIDlocol(e.target.id)
  }
})

const karinkaKardParent = document.querySelector('.modal-pizzas')

const allPricees = document.querySelector('.allPricees')
const productsLength = document.querySelector('.products-length')

function bagLength() {
  productsLength.textContent = getLocol.length
}

function karzinkaRender() {
  let totale = 0;
  getLocol.forEach((item,id)=> {
  const productsLength = document.querySelector('.products-length')
  totale += parseInt(item.price)
  allPricees.textContent = totale.toFixed(3)
karinkaKardParent.innerHTML += `

<div class="pizza-card">
<div class="pizza-tasnif">
  <div class="tasnif-img">
    <img src="${item.image}" alt="${item.title}" />
  </div>
  <div class="tasnif-text">
    <h4 class="tasnif-text__title">${item.title}</h4>
    <p class="tasnif-text__p">${item.xamir}</p>
  </div>
</div>
<div class="modal-pizza__total">
  <div class="amountmodal">
    <span class="minus">
      <span>-</span>
    </span>
    <div><b id="oshirish" class="sanoq">1</b><b>-ta</b></div>
    <span class="plus">
      <span>+</span>
    </span>
  </div>
  <h4 class="modal-price">${item.price}</h4>
</div>
</div>


`
const plus=document.querySelector(".plus")
const minus=document.querySelector(".minus")
const oshish=document.getElementById("oshirish")
let countt=1;
plus.addEventListener("click",()=>{
   oshish.textContent = countt + 1 ;
  countt++;

})
minus.addEventListener("click",()=>{
  if(countt>0){
    oshish.textContent = countt - 1 + "-ta";
    countt--;
  }

})
})
}
const plus=document.querySelectorAll(".plus")
const minus=document.querySelectorAll(".minus")
const oshish=document.getElementById("oshirish")


karzinkaRender()
bagLength()

const modalMessage = document.querySelector('.message-modal_field')
const messageTag = document.querySelector('.message')

function Message(message){
  modalMessage.classList.add('hidden')
  messageTag.textContent = message
}
const closeMessageModal = document.querySelector('.messageClose')

closeMessageModal.addEventListener('click', () => {
  modalMessage.classList.add('hidden')
})

const promokodinput=document.getElementById("prominput")
const salebtn=document.getElementById("prombtn")
let promocodee="bekorchi"

salebtn.addEventListener('click', () => {
  if (promokodinput.value === promocodee) {
    Message('sizga 50.000 som skidka berldi')
    modalMessage.classList.remove('hidden')
    setTimeout(() => {
    modalMessage.classList.add('hidden')
    }, 2500);
  }else{
    Message('skidka berilmadi')
    modalMessage.classList.remove('hidden')
    setTimeout(() => {
    modalMessage.classList.add('hidden')
    }, 2500);
  }

  bodywrap.classList.remove('hidden')
  korzinmodal.classList.add('hidden')



})
const buyurtmapizza=document.querySelector('.buyurtma-pizza')
const defhid=document.querySelector(".modal-default__content")
if(getLocol.length===0){
defhid.classList.remove("hidden")
buyurtmapizza.classList.add("hidden")
 korzinbooking.classList.add("hidden")


}





/* 
                <div class="pizza-card">
                  <div class="pizza-tasnif">
                    <div class="tasnif-img">
                      <img src="" alt="" />
                    </div>
                    <div class="tasnif-text">
                      <h4 class="tasnif-text__title">bbbbb</h4>
                      <p class="tasnif-text__p">bbbb</p>
                    </div>
                  </div>
                  <div class="modal-pizza__total">
                    <div class="amountmodal">
                      <span class="minus">
                        <span>-</span>
                      </span>
                      <div><b class="sanoq">1</b><b>-ta</b></div>
                      <span class="plus">
                        <span>+</span>
                      </span>
                    </div>
                    <h4 class="modal-price">55,000 UZS</h4>
                  </div>
                </div>


*/