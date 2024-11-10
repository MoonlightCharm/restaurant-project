export function showContact() {

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
    mainHeading.textContent = 'Contact Us';
    mainHeadingDiv.appendChild(bee1);
    mainHeadingDiv.appendChild(mainHeading);
    mainHeadingDiv.appendChild(bee2);


    const firstContactOuterDiv = document.createElement('div');
    firstContactOuterDiv.classList.add('comb-outer');
    const firstContactInnerDiv = document.createElement('div');
    firstContactInnerDiv.classList.add('comb-inner');
    const firstContactFirstPara = document.createElement('p');
    firstContactFirstPara.classList.add('info');
    firstContactFirstPara.textContent = 'Chef';
    const firstContactSecondPara = document.createElement('p');
    firstContactSecondPara.classList.add('info');
    firstContactSecondPara.textContent = '555-555-5554';
    const firstContactThirdPara = document.createElement('p');
    firstContactThirdPara.classList.add('info');
    firstContactThirdPara.textContent = 'totallyRealEmail@notFake.com';
    const firstContactHeading = document.createElement('h3');
    firstContactHeading.classList.add('person');
    firstContactHeading.textContent = 'Mama Bear';
    firstContactInnerDiv.appendChild(firstContactHeading);
    firstContactInnerDiv.appendChild(firstContactFirstPara);
    firstContactInnerDiv.appendChild(firstContactSecondPara);
    firstContactInnerDiv.appendChild(firstContactThirdPara);
    firstContactOuterDiv.appendChild(firstContactInnerDiv);


    const secondContactOuterDiv = document.createElement('div');
    secondContactOuterDiv.classList.add('comb-outer');
    const secondContactInnerDiv = document.createElement('div');
    secondContactInnerDiv.classList.add('comb-inner');
    const secondContactFirstPara = document.createElement('p');
    secondContactFirstPara.classList.add('info');
    secondContactFirstPara.textContent = 'Manager';
    const secondContactSecondPara = document.createElement('p');
    secondContactSecondPara.classList.add('info');
    secondContactSecondPara.textContent = '555-555-5555';
    const secondContactThirdPara = document.createElement('p');
    secondContactThirdPara.classList.add('info');
    secondContactThirdPara.textContent = 'perfectlyRealEmail@notFake.com';
    const secondContactHeading = document.createElement('h3');
    secondContactHeading.classList.add('person');
    secondContactHeading.textContent = 'Papa Bear';
    secondContactInnerDiv.appendChild(secondContactHeading);
    secondContactInnerDiv.appendChild(secondContactFirstPara);
    secondContactInnerDiv.appendChild(secondContactSecondPara);
    secondContactInnerDiv.appendChild(secondContactThirdPara);
    secondContactOuterDiv.appendChild(secondContactInnerDiv);


    const thirdContactOuterDiv = document.createElement('div');
    thirdContactOuterDiv.classList.add('comb-outer');
    const thirdContactInnerDiv = document.createElement('div');
    thirdContactInnerDiv.classList.add('comb-inner');
    const thirdContactFirstPara = document.createElement('p');
    thirdContactFirstPara.classList.add('info');
    thirdContactFirstPara.textContent = 'Waiter';
    const thirdContactSecondPara = document.createElement('p');
    thirdContactSecondPara.classList.add('info');
    thirdContactSecondPara.textContent = '555-555-5556';
    const thirdContactThirdPara = document.createElement('p');
    thirdContactThirdPara.classList.add('info');
    thirdContactThirdPara.textContent = 'totallyRealEmail@notFake.com';
    const thirdContactHeading = document.createElement('h3');
    thirdContactHeading.classList.add('person');
    thirdContactHeading.textContent = 'Baby Bear';
    thirdContactInnerDiv.appendChild(thirdContactHeading);
    thirdContactInnerDiv.appendChild(thirdContactFirstPara);
    thirdContactInnerDiv.appendChild(thirdContactSecondPara);
    thirdContactInnerDiv.appendChild(thirdContactThirdPara);
    thirdContactOuterDiv.appendChild(thirdContactInnerDiv);


    content.appendChild(mainHeadingDiv);
    content.appendChild(firstContactOuterDiv);
    content.appendChild(secondContactOuterDiv);
    content.appendChild(thirdContactOuterDiv);
}