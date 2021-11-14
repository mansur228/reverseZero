let header = document.getElementById('header')

window.onscroll = () =>{
    console.log(header.getBoundingClientRect().top + header.getBoundingClientRect().height)
}