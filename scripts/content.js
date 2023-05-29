const entireText = document.body.innerText;
const dateElement = document.getElementsByClassName("information")[0];

if (entireText && dateElement) {
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = entireText.matchAll(wordMatchRegExp);
    
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 80);
    const badge = document.createElement("p");
    
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    dateElement.insertAdjacentElement("afterend", badge);
}