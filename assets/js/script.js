// #region Team members object array

  const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

// #endregion Team members object array



// #region Functions

// Load cards with specified parameter data
function loadCards(cardContainerSelector, cardData) {

  // Get card container DOM element
  const cardContainerElement = document.querySelector(cardContainerSelector);

  // Loop for each item in card data
  for ( let i = 0; i < cardData.length; i++ ) {

    cardContainerElement.innerHTML +=
    `
    
    <!-- #region Card -->
    <div class="col-4">

        <!-- #region Card row -->
        <div class="row g-0">

            <!-- #region Card image column -->
            <div class="col-4">
                
                <img class="img-fluid" src="./assets/${teamMembers[i].img}" alt="Foto di ${teamMembers[i].name}">
                
            </div>
            <!-- #endregion Card image column -->
            
            <!-- #region Card text column -->
            <div class="col-8 p-3 bg-black text-white">
                
                <h5 class="fw-bold">${teamMembers[i].name}</h5>
                
                <div class="pb-2">${teamMembers[i].role}</div>
                
                <a class="text-decoration-none link-info" href="mailto:${teamMembers[i].email}">${teamMembers[i].email}</a>
                
            </div>
            <!-- #endregion Card text column -->

        </div>
        <!-- #endregion Card row -->
        
    </div>
    <!-- #endregion Card -->
    
    `;

  }

}

// #endregion Functions



// #region Script logic

  // Load cards when document completely loaded
  document.addEventListener('DOMContentLoaded', loadCards('#cards-container', teamMembers));

// #endregion Script logic