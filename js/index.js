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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Inserted link names
Array.from(document.querySelectorAll('nav a')).map((link, index) => {
  link.appendChild(document.createTextNode(siteContent['nav'][`nav-item-${index+1}`]));
});

// Inserted h1 text
let header1 = document.getElementsByTagName('h1')[0];
let headerArr = siteContent['cta']['h1'].split(' ');
header1.appendChild(document.createTextNode(headerArr[0]));
header1.appendChild(document.createElement('br'));
header1.appendChild(document.createTextNode(headerArr[1]));
header1.appendChild(document.createElement('br'));
header1.appendChild(document.createTextNode(headerArr[2]));

// Inserted button text
document.getElementsByTagName('button')[0].appendChild(document.createTextNode(siteContent['cta']['button']));

// Added img src for cta image
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

// Inserted h4 text for all h4 content headers
let h4Headers = Object.keys(siteContent['main-content']).filter(key => key.includes('h4'));
Array.from(document.querySelectorAll('.main-content h4')).map((header, index) => {
  header.appendChild(document.createTextNode(siteContent['main-content'][h4Headers[index]]));
});

// Inserted p text for all content p
let content = Object.keys(siteContent['main-content']).filter(key => key.includes('content'));
Array.from(document.querySelectorAll('.main-content p')).map((paragraph, index) => {
  paragraph.appendChild(document.createTextNode(siteContent['main-content'][content[index]]));
});

// Added img src for middle image
document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

// Inserted h4 text for contact header
document.querySelectorAll('.contact h4')[0].appendChild(document.createTextNode(siteContent['contact']['contact-h4']));

// Inserted p text for contact info
let contactKeys = Object.keys(siteContent['contact']).filter(key => !key.includes('h4'));
Array.from(document.querySelectorAll('.contact p')).map((paragraph, index) => {
  paragraph.appendChild(document.createTextNode(siteContent['contact'][contactKeys[index]]));
});

// Inserted p text for footer
document.querySelector('footer p').appendChild(document.createTextNode(siteContent['footer']['copyright']));

// Added new nav links
let linkThis = document.createElement('a');
linkThis.appendChild(document.createTextNode('This'));
document.getElementsByTagName('nav')[0].prepend(linkThis);

let linkThat = document.createElement('a');
linkThat.appendChild(document.createTextNode('That'));
document.getElementsByTagName('nav')[0].appendChild(linkThat);

// Changed navigation text to green
document.querySelectorAll('nav a').forEach(link => link.style.color = 'green');