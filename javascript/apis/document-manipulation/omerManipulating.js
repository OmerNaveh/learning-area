const link = document.querySelector('a');
link.textContent= "Omer Here";
link.href="https://www.google.co.il/?hl=iw";
const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);
const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);



