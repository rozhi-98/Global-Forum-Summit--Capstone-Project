const speakersContainer = document.querySelector('.featured-speakers-body');

const speakersArr = [
  {
    name: 'Mina Al Oraibi',
    title: 'Editor-in-Chief, The National (UAE)',
    description:
      'Mina Al-Oraibi is an Iraqi-British journalist and analyst. She was a Yale World fellow and senior fellow at the Institute for Strategic Effectiveness (ISE).',
    img: 'images/Mina al-Oraibi.jpg',
  },

  {
    name: 'Ammar al Hakim',
    title: 'President, National Hikma Movement',
    description:
      ' Bruce Walker Ferguson is an educator, entrepreneur and investor with a lifelong interest in technology-based innovation. He joined the American University of Iraq, Sulaimani (AUIS) as president in 2016.',
    img: 'images/Ammar Al Hakim.jpg',
  },

  {
    name: 'Bruce Walker Ferguson',
    title: 'President, American University of Iraq, Sulaimani',
    description:
      ' Bruce Walker Ferguson is an educator, entrepreneur and investor with a lifelong interest in technology-based innovation. He joined the American University of Iraq, Sulaimani (AUIS) as president in 2016.',
    img: 'images/bruce ferguson.jpg',
  },

  {
    name: 'Barham Salih',
    title: 'Former President, Government of Iraq',
    description:
      'Dr. Barham Salih is President of the Republic of Iraq. He is also the founder and former Chairman of the Board of Trustees of the American University of Iraq, Sulaimani.',
    img: 'images/Barham Salih.jpg',
  },
  {
    name: 'Jane Arraf',
    title: 'Journalist',
    description:
      'Jane Arraf is a journalist based in the Middle East for National Public Radio (NPR). She previously worked with the Christian Science Monitor, Al Jazeera English and as CNN’s Baghdad Bureau Chief and Senior Correspondent.',
    img: 'images/jane arraf.jpg',
  },
  {
    name: 'Denise Natali',
    title:
      'Assistant Secretary, Bureau of Conflict and Stabilization Operations, US Government',
    description:
      'Dr. Denise Natali is Assistant Secretary for the Bureau of Conflict and Stabilization Operations at the US Department of State.',
    img: 'images/Denise Natali.jpg',
  },
];

const createMarkup = (data) => {
  const markUp = `
  <div class="speaker">
            <img
              src="${data.img}"
              alt="${data.name}"
              class="speaker-img"
            />
            <div class="speaker-details">
              <h4 class="name">${data.name}</h4>
              <p class="title">${data.title}</p>
              <p class="description">
              ${data.description}
              </p>
            </div>
          </div>
    `;
  return markUp;
};

const injectMarkup = () => {
  let speakers = '';

  speakersArr.forEach((obj) => {
    speakers += createMarkup(obj);
  });
  speakersContainer?.insertAdjacentHTML('afterbegin', speakers);
};

injectMarkup();
