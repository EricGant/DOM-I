const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const newNavItem1 = document.createElement('a')
const newNavItem2 = document.createElement('a')
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.querySelectorAll('nav a')
links[0].textContent = "Services"
links[1].textContent = "Product"
links[2].textContent = "Vision"
links[3].textContent = "Features"
links[4].textContent = "About"
links[5].textContent = "Contact"
console.log(links)
links.forEach((item) => {
  item.style.color = 'green'})

document.querySelector('nav').appendChild(newNavItem1)
newNavItem1.textContent = 'Help'
newNavItem1.href = 'a'
newNavItem1.style.color = 'green'
document.querySelector('nav').prepend(newNavItem2)
newNavItem2.textContent = 'Testpage'
newNavItem2.href= 'a'
newNavItem2.style.color = 'green'

let codeimg = document.querySelector('#cta-img')
codeimg.setAttribute('src', siteContent['cta']["img-src"])

let headerone = document.querySelector('h1')
headerone.textContent="DOM Is Awesome"

let buttonone = document.querySelector('button')
buttonone.textContent = "Get Started"

let maincontent = document.querySelector('.main-content')
let topcontent = maincontent.querySelector('.top-content')
console.log(topcontent)
const headertop = topcontent.querySelectorAll('h4')
const ptop = topcontent.querySelectorAll('p')
const imgmain = maincontent.querySelector('.middle-img')

const bottomcontent = maincontent.querySelector('.bottom-content')
const headerbot = bottomcontent.querySelectorAll('h4')
const pbot = bottomcontent.querySelectorAll('p')

const contacts = document.querySelector('.contact')
const headercont = contacts.querySelectorAll('h4')
const pcont = contacts.querySelectorAll('p')

const foot = document.querySelector('footer')
const pfoot = foot.querySelector('p')



headertop[0].textContent="Features"
headertop[1].textContent="About"
ptop[0].textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
ptop[1].textContent="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
imgmain.setAttribute('src', siteContent['main-content']["middle-img-src"])

headerbot[0].textContent = 'Services'
headerbot[1].textContent = 'Product'
headerbot[2].textContent = 'Vision'
pbot[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
pbot[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis." 
pbot[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

headercont.textContent = "Contact"
pcont[0].textContent = "123 Way 456 Street Somewhere, USA"
pcont[1].textContent = "1 (888) 888-8888"
pcont[2].textContent = "sales@greatidea.io"

pfoot.textContent = "Copyright Great Idea! 2018"