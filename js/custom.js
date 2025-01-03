window.REGISTER_REDIRECT_LINK = {
    registerRedirectUrl: "https://brandeisuniversity.my.site.com/s/event-detail?language=en_US&eventId=a4xPQ000000CiRt"
};

function sanitizePosterName(name) {
    return name
        .replace(/[^a-zA-Z0-9 ]/g, "") // Remove special characters
        .replace(/ /g, "_") // Replace spaces with underscores
        .concat(".pdf"); // Add file extension
}

async function updatePosterLinks() {
    try {
        const response = await fetch("posters.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const availableFiles = await response.json();

        const posterTable = document.querySelector(".posterTable tbody");
        if (!posterTable) {
            console.error("Poster table not found!");
            return;
        }

        const rows = posterTable.querySelectorAll("tr");
        rows.forEach((row, index) => {
            const strongTag = row.querySelector("strong");
            if (!strongTag) return;

            const posterName = strongTag.textContent.trim();
            const sanitizedFileName = sanitizePosterName(posterName);

            if (availableFiles.includes(sanitizedFileName)) {
                // Create a new `[PDF]` link
                const pdfLink = document.createElement("a");
                pdfLink.href = `download/posters/${sanitizedFileName}`;
                pdfLink.target = "_blank";
                pdfLink.textContent = " [PDF]";

                // Append the `[PDF]` link next to the <strong> tag
                strongTag.insertAdjacentElement("afterend", pdfLink);
                pdfLink.insertAdjacentHTML("afterend", "<br />");
            }
        });
    } catch (error) {
        console.error("Error fetching or processing poster list:", error);
    }
}

document.addEventListener("DOMContentLoaded", updatePosterLinks);