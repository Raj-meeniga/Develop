// =========================================
// MOBILE NAVIGATION
// =========================================

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


if (menuButton && navMenu) {

    menuButton.addEventListener(
        "click",
        (): void => {

            navMenu.classList.toggle("active");

        }
    );

}


// =========================================
// CLOSE MOBILE MENU
// WHEN USER CLICKS A NAVIGATION LINK
// =========================================

const navLinks =
    document.querySelectorAll<HTMLAnchorElement>(
        "#navMenu a"
    );


navLinks.forEach(
    (link: HTMLAnchorElement): void => {

        link.addEventListener(
            "click",
            (): void => {

                if (navMenu) {

                    navMenu.classList.remove(
                        "active"
                    );

                }

            }
        );

    }
);


// =========================================
// CONSULTATION FORM
// =========================================

const consultationForm =
    document.getElementById(
        "consultationForm"
    ) as HTMLFormElement | null;


const formMessage =
    document.getElementById(
        "formMessage"
    ) as HTMLParagraphElement | null;


if (consultationForm) {

    consultationForm.addEventListener(
        "submit",
        (event: SubmitEvent): void => {

            event.preventDefault();


            const nameInput =
                document.getElementById(
                    "name"
                ) as HTMLInputElement | null;


            const phoneInput =
                document.getElementById(
                    "phone"
                ) as HTMLInputElement | null;


            const matterInput =
                document.getElementById(
                    "matter"
                ) as HTMLSelectElement | null;


            const messageInput =
                document.getElementById(
                    "message"
                ) as HTMLTextAreaElement | null;


            if (
                !nameInput ||
                !phoneInput ||
                !matterInput ||
                !messageInput
            ) {

                return;

            }


            const name: string =
                nameInput.value.trim();


            const phone: string =
                phoneInput.value.trim();


            const matter: string =
                matterInput.value;


            const message: string =
                messageInput.value.trim();


            // =========================================
            // VALIDATION
            // =========================================

            if (
                !name ||
                !phone ||
                !matter ||
                !message
            ) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please complete all fields.";

                    formMessage.style.color =
                        "#b42318";

                }

                return;

            }


            // =========================================
            // WHATSAPP
            // =========================================

            const lawyerWhatsAppNumber: string =
                "916303825897";


            const whatsappMessage: string =
                `Hello Advocate Bhupani Venkataswara Rao,

I would like to request a legal consultation.

Name: ${name}

Phone: ${phone}

Legal Matter: ${matter}

Message:
${message}`;


            const whatsappURL: string =
                `https://wa.me/${lawyerWhatsAppNumber}?text=${encodeURIComponent(
                    whatsappMessage
                )}`;


            // =========================================
            // OPEN WHATSAPP
            // =========================================

            window.open(
                whatsappURL,
                "_blank"
            );


            // =========================================
            // SUCCESS MESSAGE
            // =========================================

            if (formMessage) {

                formMessage.textContent =
                    "Your consultation request has been prepared. WhatsApp will open shortly.";

                formMessage.style.color =
                    "#16803c";

            }


            // =========================================
            // CLEAR FORM
            // =========================================

            consultationForm.reset();

        }
    );

}


// =========================================
// CURRENT YEAR
// =========================================

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date()
            .getFullYear()
            .toString();

}


// =========================================
// CLOSE MOBILE MENU WHEN CLICKING
// OUTSIDE THE NAVIGATION
// =========================================

document.addEventListener(
    "click",
    (event: MouseEvent): void => {

        if (!navMenu || !menuButton) {

            return;

        }


        const target =
            event.target as Node;


        const clickedInsideMenu =
            navMenu.contains(target);


        const clickedMenuButton =
            menuButton.contains(target);


        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            navMenu.classList.remove(
                "active"
            );

        }

    }
);


// =========================================
// NAVBAR BACKGROUND ON SCROLL
// =========================================

window.addEventListener(
    "scroll",
    (): void => {

        const header =
            document.querySelector<HTMLElement>(
                ".header"
            );


        if (!header) {

            return;

        }


        if (window.scrollY > 50) {

            header.style.background =
                "rgba(10, 20, 32, 0.98)";

        } else {

            header.style.background =
                "rgba(16, 28, 44, 0.96)";

        }

    }
);