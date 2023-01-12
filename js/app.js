const rootDiv=document.getElementById('root')



// rootDiv.innerHTML=`<h1>I am a web <span class="intro">Developer</span> </h1>`



const routes={
    '/profile':profile,
    '/service':service,
    '/about':about,
    '/contact':contact,
    '/education':education
}
const route=async (event)=>{
event=event|| window.event;
event.preventDefault();
window.history.pushState({},"",event.target.href)
 rootDiv.innerHTML= await routes[window.location.pathname]
// console.log(window.location.pathname)
}

window.onpopstate=()=>{
rootDiv.innerHTML=routes[window.location.pathname]
}
window.route=route;