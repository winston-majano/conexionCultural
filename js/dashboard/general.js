const activePage = window.location.pathname;
let conten_dashboard = document.getElementById('conten-dashboard');  
const navLink = document.querySelector('nav a').forEach(link => {
    if(link.href.includes(`${activePage}`)){




        console.log(`${activePage}`);
    }
});