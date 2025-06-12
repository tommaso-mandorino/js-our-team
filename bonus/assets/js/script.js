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



// #region DOM elements

  // Add new member form DOM element
  const addNewMemberFormElement = document.getElementById('add-new-member-form');

  // Member name input DOM element
  const memberNameInputElement = document.getElementById('member-name-input');

  // Member role input DOM element
  const memberRoleInputElement = document.getElementById('member-role-input');

  // Member email input DOM element
  const memberEmailInputElement = document.getElementById('member-email-input');

  // Member image input DOM element
  const memberImageInputElement = document.getElementById('member-image-input');

// #endregion DOM elements



// #region Functions

  // #region parseImageURL
  function parseImageURL(imageURL) {

    // IF image URL starts with "http"
    if (imageURL.startsWith('http') === true ) {

      // RETURN same URL
      return imageURL;

    }
    // ELSE
    else {

      // RETURN image assets folder prefix
      return `./assets/${imageURL}`;

    }

  }
  // #endregion parseImageURL

  // #region Load card function
  function loadCard(cardIndex, cardObjectsArray, cardContainerSelector) {

    // Get card container DOM element
    const cardContainerSelectorElement = document.querySelector(cardContainerSelector);

    // Extract member object from members array
    const memberObject = cardObjectsArray[cardIndex];

    // Extract member name from member object
    const memberName = memberObject.name;

    // Extract member role from member object
    const memberRole = memberObject.role;

    // Extract member email from member object
    const memberEmail = memberObject.email;

    // Extract member image from member object
    const memberImage = parseImageURL(memberObject.img);

    cardContainerSelectorElement.innerHTML +=
    `
    
    <!-- #region Card -->
    <div class="col-12 col-lg-6 col-xxl-4">

        <!-- #region Card row -->
        <div class="row g-0">

            <!-- #region Card image column -->
            <div class="col-4">
                
                <img class="col-12" src="${memberImage}" alt="Foto di ${memberName}">
                
            </div>
            <!-- #endregion Card image column -->
            
            <!-- #region Card text column -->
            <div class="col-8 p-3 bg-black text-white">
                
                <h5 class="fw-bold">${memberName}</h5>
                
                <div class="pb-2">${memberRole}</div>
                
                <a class="text-decoration-none link-info" href="mailto:${memberEmail}">${memberEmail}</a>
                
            </div>
            <!-- #endregion Card text column -->

        </div>
        <!-- #endregion Card row -->
        
    </div>
    <!-- #endregion Card -->
    
    `;

  }
  // #endregion Load card function

  // #region Load cards function
  function loadCards(cardObjectsArray, cardContainerSelector) {

    // Loop for each item in card objects array
    for ( let index = 0; index < cardObjectsArray.length; index++ ) {

      loadCard(index, cardObjectsArray, cardContainerSelector);

    }

  }
  // #endregion Load cards function

// #endregion Functions



// #region Script logic

  // Load cards when document completely loaded
  document.addEventListener('DOMContentLoaded', loadCards(teamMembers, '#cards-container'));

  // Add new member on form submit event
  addNewMemberFormElement.addEventListener('submit', (event) => {

    // Prevent default form submit behaviour
    event.preventDefault();

    // Get member name input value
    const memberNameInputElementValue = memberNameInputElement.value;

    // Get member role input value
    const memberRoleInputElementValue = memberRoleInputElement.value;

    // Get member email input value
    const memberEmailInputElementValue = memberEmailInputElement.value;

    // Get member image input value
    const memberImageInputElementValue = memberImageInputElement.value;

    const newMemberInputObject = {
      name: memberNameInputElementValue,
      role: memberRoleInputElementValue,
      email: memberEmailInputElementValue,
      img: memberImageInputElementValue
    };

    // Push the new member into the team members objects array
    teamMembers.push(newMemberInputObject);

    // Load last item of the array
    loadCard(teamMembers.length - 1, teamMembers, '#cards-container');

  });

// #endregion Script logic