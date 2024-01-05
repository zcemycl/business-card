const cards_ = Array.from(document.querySelectorAll(".card-content"));
const space_cards = cards_[1].getBoundingClientRect().left -
    cards_[0].getBoundingClientRect().left;
let parser = new DOMParser();

const btn_animate = () => {
    let cards = Array.from(document.querySelectorAll(".card-content"));
    const lastcard = cards.pop()
    lastcard.classList.add("card-down-animate");
    lastcard.addEventListener("transitionend", () => {
        cards.forEach((card) => {
            card.style.cssText = `--second-translate-x: ${space_cards}px;`
            card.classList.add("card-right-animate");
        })
    }, {once: true})

    cards[1].addEventListener("transitionend", () => {
        cards.unshift(lastcard)
        cards.forEach((card, idx) => {
            if (idx > 0) {
                card.classList.remove("card-right-animate");
                card.style.removeProperty("--second-translate-x");
            }
        })
        const content = document.querySelector('.content');
        content.replaceChildren(...cards);
        lastcard.classList.remove("card-down-animate");
    }, {once: true})

}

const btn_animate2 = () => {
    let cards = Array.from(document.querySelectorAll(".card-content2"));
    let lastcard = cards.pop()
    lastcard.classList.add("last-card-motion");
    lastcard.addEventListener("animationend", () => {
        lastcard.style.cssText = '--opacity: 0; --translateY: 5vh';
        cards.forEach((card) => {
            card.style.cssText = `--second-translate-x: ${space_cards}px;`
            card.classList.add("rest-card-motion");
        })
    }, {once: true})
    

    cards[1].addEventListener("animationend", () => {
        
        cards.forEach((card) => {
            card.style.cssText = `--translateX: ${space_cards}px;`
            card.classList.remove("rest-card-motion");
        })
        lastcard.classList.remove("last-card-motion")
        cards.unshift(lastcard)

        let copies = []
        cards.forEach((card) => {
            // const cardCopy = parser.parseFromString(card.outerHTML, 'text/html');
            // console.log(cardCopy.firstChild)
            let copy = card.cloneNode(true)
            copy.style.cssText = ""
            console.log(copy)
            copies.push(copy)
        })
        console.log(copies)
        const content = document.querySelector('.content2');
        content.replaceChildren(...copies);
    }, {once: true})
    
}