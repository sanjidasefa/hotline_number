const hearticon = document.querySelectorAll(".heart");
for (const num of hearticon) {
  num.addEventListener("click", function () {
    const i = document.getElementById("love");
    let count = parseInt(i.textContent);
    count = count + 1;
    i.textContent = count;
  });
}

const calling = document.querySelectorAll(".call");
for (const call of calling) {
  call.addEventListener("click", function () {
    const card = this.closest('.hotline')
    const name = card.querySelector('h1').innerText
    const callNumber = card.querySelector('h2').innerText;
    alert(`calling..`);
    const coins = document.getElementById("coin");
    let money = parseInt(coins.textContent);
    if (money < 20) {
      alert("not enough coin");
      return;
    }
    money -= 20;
    coins.textContent = money;
    alert("call connected");
    const time = new Date().toLocaleTimeString();
    const historySide = document.getElementById("call-history");
    const newSide = document.createElement("div");
    // newSide.classList.add("flex" ,"justify-between","bg-gray-100","rounded-xl", "p-4" ,"gap-1", "mt-2", "mb-2")
    newSide.innerHTML =
          `<div class="flex justify-between bg-slate-400 p-4 gap-1 mt-2 mb-2 rounded-xl md:w-48">
          <div>
           <h1 class="font-semibold text-lg md:text-sm">${name}</h1>
           <p class="text-[#5C5C5C]">${callNumber}</p>
          </div>
          <div>
            <p>${time}</p>
          </div>`;
    historySide.append(newSide)  
});
}

document.getElementById("clear-history").addEventListener("click", function () {
  const history = document.getElementById("call-history");
  history.innerHTML = "";
});

const copy = document.querySelectorAll(".copy");
const counting=document.getElementById("copy-count")
for (const btn of copy) {
  let count =0;
  btn.addEventListener('click',function(){
    const copied = this.closest('.hotline');
    const num = copied.querySelector('.copy-num').innerText;
    navigator.clipboard.writeText(num)
     .then(function(){
      count++;
      counting.innerText= count;
      alert("copied : " +num)
    })
     .catch(function(err){
      alert("fail : " +err);
     })
  })
}