const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Bananas",
    "nav-item-8": "Oranges",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
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
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"]);
let middle = document.getElementById("middle-img");
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//NAV
const nav =document.querySelector("nav");


const banana = document.createElement('a')

banana.setAttribute('href', '#');

const orange = document.createElement('a')

orange.setAttribute('href', '#');


nav.appendChild(banana);
nav.prepend(orange);
let navItems = document.querySelectorAll("a");

// navItems[0].textContent = siteContent.nav["nav-item-1"];
for (let index = 0; index < navItems.length; index++) {
  navItems[index].textContent = siteContent.nav[`nav-item-${index+1}`];
  navItems[index].style.color = "#0ACF1E";
}

//CTA
let h1 = document.querySelector("h1");
h1.innerHTML = siteContent.cta.h1;

let button = document.querySelector("button");
button.textContent = siteContent.cta.button;



//h4 party
let h4Array = document.querySelectorAll("h4");


h4Array[0].textContent = siteContent["main-content"]["features-h4"];
h4Array[1].textContent = siteContent["main-content"]["services-h4"];
h4Array[2].textContent = siteContent["main-content"]["about-h4"];
h4Array[3].textContent = siteContent["main-content"]["product-h4"];
h4Array[4].textContent = siteContent["main-content"]["vision-h4"];
h4Array[5].textContent = siteContent["contact"]["contact-h4"];
//paragraphs
let paragraphs = document.querySelectorAll("p");

//main paragraphs
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["services-content"];
paragraphs[2].textContent = siteContent["main-content"]["about-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];
//contact paragraphs
paragraphs[5].innerHTML = siteContent["contact"]["address"];
paragraphs[6].textContent = siteContent["contact"]["phone"];
paragraphs[7].textContent = siteContent["contact"]["email"];
//footer
paragraphs[8].textContent = siteContent["footer"]["copyright"];
