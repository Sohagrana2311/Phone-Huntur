const dataFratching = (search) =>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
.then(res => res.json())
.then(data => loadData(data.data))
}

// creat element and cppandchail
const loadData = (data) =>{
    const deatailBtn = document.getElementById('show-more')
    const container = document.getElementById('content')
        container.innerText = '';
    const warning = document.getElementById('waring')
 if(data.length === 0){
      warning.classList.remove('d-none')
      deatailBtn.classList.add('d-none')
 }
 else{
    data = data.slice(0, 20)
    data.forEach(phone => {
        
        const ele = document.createElement('div')
        ele.innerHTML = `
        <div class="col">
                  <div class="card">
                    <img src="${phone.image}" class="card-img-top p-4 w-75" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe asperiores ea dicta, illo omnis ipsam temporibus soluta voluptatum! Illo expedita, dolorem iste debitis at quas facilis culpa a adipisci blanditiis!</p>
                      <button>show Details</button>
                    </div>
                  </div>
                </div>
        `
        container.appendChild(ele)
        warning.classList.add('d-none')
        if(data.length===20){

            deatailBtn.classList.remove('d-none')
        }
        else{
            deatailBtn.classList.add('d-none')

        }
     });  
     
 }
 spnnier(false)

}

// search area 

const displayData =() =>{
    spnnier(true)
const inputFeild = document.getElementById('inputFeild')
const inputValue = inputFeild.value
    dataFratching(inputValue)
    inputFeild.value = ''
}

const spnnier = (isLoading) =>{
    const spnnier = document.getElementById('spnnier')
    if(isLoading){
        spnnier.classList.remove('d-none');
    }
    else {
        spnnier.classList.add('d-none');
    }

}


