export function showHome() {

    const content = document.querySelector('#content');

    const mainHeadingDiv = document.createElement('div');
    mainHeadingDiv.classList.add('heading-container');
    const bee1 = document.createElement('img');
    bee1.src = require('./images/bee.png');
    bee1.classList.add('decoration', 'bee-left');
    const mainHeading = document.createElement('h1');
    const bee2 = document.createElement('img');
    bee2.src = require('./images/bee.png');
    bee2.classList.add('decoration', 'bee-right');
    mainHeading.textContent = 'Beary\'s Breakfast Bar';
    mainHeadingDiv.appendChild(bee1);
    mainHeadingDiv.appendChild(mainHeading);
    mainHeadingDiv.appendChild(bee2);


    const introDivOuter = document.createElement('div');
    introDivOuter.classList.add('comb-outer');
    const introDivInner = document.createElement('div');
    introDivInner.classList.add('comb-inner');
    const hive = document.createElement('img');
    hive.src = require('./images/honeycomb.png');
    hive.classList.add('decoration', 'hive')
    const introPara = document.createElement('p');
    introPara.textContent = 'Beary\'s has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.';
    const introHeading = document.createElement('h3');
    introHeading.classList.add('customer');
    introHeading.textContent = 'Goldilocks';
    introDivInner.appendChild(introPara);
    introDivInner.appendChild(introHeading);
    introDivOuter.appendChild(introDivInner);


    const hoursDivOuter = document.createElement('div');
    hoursDivOuter.classList.add('comb-outer');
    const hoursDivInner = document.createElement('div');
    hoursDivInner.classList.add('comb-inner');
    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = 'Hours';
    const hoursPara = document.createElement('p');
    hoursPara.classList.add('hours');
    hoursPara.textContent = 'Sunday: 8am - 8pm\nMonday: 6am - 6pm\nTuesday: 6am - 6pm\nWednesday: 6am - 6pm\nThursday: 6am - 10pm\nFriday: 6am - 10pm\nSaturday: 8am - 10pm';
    hoursDivInner.appendChild(hoursHeading);
    hoursDivInner.appendChild(hoursPara);
    hoursDivOuter.appendChild(hoursDivInner);


    const locationDivOuter = document.createElement('div');
    locationDivOuter.classList.add('comb-outer');
    const locationDivInner = document.createElement('div');
    locationDivInner.classList.add('comb-inner');
    const locationHeading = document.createElement('h2');
    locationHeading.textContent = 'Location';
    const locationPara = document.createElement('p');
    locationPara.classList.add('location');
    locationPara.textContent = '123 Forest Drive, Forestville, Maine';
    locationDivInner.appendChild(locationHeading);
    locationDivInner.appendChild(locationPara);
    locationDivOuter.appendChild(locationDivInner)
    

    content.appendChild(mainHeadingDiv);
    content.appendChild(introDivOuter);
    content.appendChild(hoursDivOuter);
    content.appendChild(locationDivOuter);
    content.appendChild(hive);

}