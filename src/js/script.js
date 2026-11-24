
// *** ACCORDEON ***

// On récupère les deux accordéons
const accordeons = document.querySelectorAll(
    ".accordeon, .accordeon-vertical"
);

// On parcourt chaque accordéon
accordeons.forEach((accordeon) => {

    // On récupère tous les summary de cet accordéon
    accordeon.querySelectorAll("summary").forEach((summary) => {

        // On écoute les clics
        summary.addEventListener("click", () => {

            // On ferme les autres panneaux
            accordeon.querySelectorAll("details").forEach((det) => {

                if (det !== summary.parentElement) {
                    det.open = false;
                }
            });
        });
    });
});

