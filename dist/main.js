(()=>{"use strict";const e=document.querySelector("#content"),t=document.createElement("div"),n=document.querySelector("#content"),a=document.createElement("div"),s=()=>{"none"===a.style.display?a.style.display="flex":a.style.display="none","none"===t.style.display?t.style.display="block":t.style.display="none"};(function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="homeBanner";const n=document.createElement("h1");n.id="homeTitle",n.textContent="The Breakfast Only Club";const a=document.createElement("p");a.textContent="Want some food? Come and get it!",a.id="headline",t.appendChild(n),t.appendChild(a);const o=document.createElement("div");o.id="navbar";const i=document.createElement("button");i.textContent="Home",i.autofocus="autofocus";const d=document.createElement("button");d.textContent="Food Menu",i.classList.add("buttons"),d.classList.add("buttons"),i.addEventListener("click",(function(){this.classList.contains("active")?this.classList.remove("active"):(this.classList.add("active"),d.classList.remove("active"))}));let l="";i.addEventListener("click",(()=>{"homepage"===l?i.removeEventListener("click",s):(s(),l="homepage")})),d.addEventListener("click",(function(){this.classList.contains("active")?this.classList.remove("active"):(this.classList.add("active"),i.classList.remove("active"))})),d.addEventListener("click",(()=>{"foodMenu"===l?d.removeEventListener("click",s):(s(),l="foodMenu")})),o.appendChild(i),o.appendChild(d),e.appendChild(t),e.appendChild(o)})(),(()=>{const n=document.createElement("div");n.id="homeImage";const a=document.createElement("h2");a.id="homeText",a.textContent="Lunch? Dinner? Nope. This restaurant is simple. Just breakfast.\n",a.textContent+="We got all kinds of french toast, bagels, pancakes, you name it!\n",a.textContent+="Check out the Food Menu tab for all the best we got to offer.",t.appendChild(a),t.appendChild(n),e.appendChild(t)})(),(()=>{let e=[],t=[],n=[],s=[];const o=["Nutella French Toast","Nutella Bagel","Nutella Pancakes","Nutella Croissant","Sausage Egg Muffin SW","Bacon & Egg Panini"],i=["My personal favourite! Ooozing Nutella with every bite. Can't go Wrong with this one.","","","","",""];for(let d=0;d<6;d++)t[d]=document.createElement("div"),t[d].classList.add("menuItems"),e[d]=document.createElement("div"),e[d].classList.add("menuImages"),e[d].id="menuImages"+d.toString(),t[d].appendChild(e[d]),n[d]=document.createElement("h3"),n[d].classList.add("itemNames"),n[d].textContent=o[d],t[d].appendChild(n[d]),a.appendChild(t[d]),s[d]=document.createElement("h3"),s[d].classList.add("itemHover"),s[d].textContent=i[d],e[d].addEventListener("mouseover",(()=>{t[d].removeChild(n[d])})),e[d].addEventListener("mouseout",(()=>{t[d].appendChild(n[d])}))})(),a.id="menuContainer","none"===a.style.display?a.style.display="flex":a.style.display="none",n.appendChild(a)})();