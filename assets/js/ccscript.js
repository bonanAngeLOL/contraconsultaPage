toogle = (el) => {
	el.style.display == 'none' ? el.style.display = 'block' : el.style.display = 'none'
}

document.getElementById("hm").addEventListener("click",()=>toogle(document.getElementById("menu_l")))