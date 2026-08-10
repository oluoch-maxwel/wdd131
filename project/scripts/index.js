
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        hamburger.textContent = "X";
    } else {
        hamburger.textContent = "☰";
    }
});


// FORM CONTACT PAGE
//contact form thank you message/ Local Storage to show number of submissions


const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    // Get values from the form
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const service = document.querySelector("#service").value;
    const message = document.querySelector("#message").value;

    // Create an object
    const customerRequest = {
        name,
        email,
        phone,
        service,
        message
    };

    // Display the object information
    formMessage.innerHTML = `
        <div class="success-message">

            <h2>Thank You, ${customerRequest.name}!</h2>

            <p>
                Your request for
                <strong>${customerRequest.service}</strong>
                has been received.
            </p>

            <p>
                We will contact you at
                <strong>${customerRequest.email}</strong>.
            </p>

        </div>
    `;

    // Save the object
    localStorage.setItem(
        "customerRequest",
        JSON.stringify(customerRequest)
    );

    // Clear form
    contactForm.reset();

});

//     // Listen for form submission

//     contactForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         // Get user's name

//         const name = document.querySelector("#name").value;

//         // Get selected service

//         const service = document.querySelector("#service").value;


//         // Increase submission count

//         submissionCount++;


//         // Save count

//         localStorage.setItem(
//             "submissionCount",
//             submissionCount
//         );


//         // Display message

//         formMessage.innerHTML = `
//             <div class="success-message">

//                 <h2>Thank You, ${name}!</h2>

//                 <p>
//                     Your request for
//                     <strong>${service}</strong>
//                     has been received.
//                 </p>

//                 <p>
//                     This is submission number
//                     <strong>${submissionCount}</strong>.
//                 </p>

//                 <p>
//                     We will get back to you shortly.
//                 </p>

//             </div>
//         `;


//         // Clear form

//         contactForm.reset();

//     });

// }