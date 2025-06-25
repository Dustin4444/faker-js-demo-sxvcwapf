import './styles.css';

import { fakerEN, fakerDE, fakerZH_CN } from '@faker-js/faker';

const appDiv: HTMLElement = document.querySelector('#app');
for (const faker of [fakerEN, fakerDE, fakerZH_CN]) {
  const fullName = faker.person.fullName();
  appDiv.innerHTML += `
<div class="card">
  <div class="card__image">
    <img src="${faker.image.url({
      width: 640,
      height: 640,
    })}" alt="Background image for ${fullName}"/>
  </div>
  <div class="card__profile">
    <img src="${faker.image.avatar()}" alt="Avatar image of ${fullName}"/>
  </div>
  <div class="card__body">
    <h2>${fullName}</h2>
    <p>${faker.phone.number()}</p>
    <p>${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}</p>
  </div>  
</div>
`;
}
