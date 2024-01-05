const cards_ = Array.from(document.querySelectorAll(".card-content"));
const space_cards = cards_[1].getBoundingClientRect().left -
    cards_[0].getBoundingClientRect().left;
let parser = new DOMParser();

const btn_animate = () => {
    let copies = []
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
        cards.unshift(lastcard);
        let copy; 
        const content = document.querySelector('.content');
        cards.forEach((card, idx) => {
            if (idx===0) {
                copies.push(card)
            } else {
                copy = card.cloneNode(true)
                copy.style.cssText = ""
                copy.classList.remove("card-right-animate");
                copies.push(copy)
            }
        })
        content.replaceChildren(...copies);
        copies[0].classList.remove("card-down-animate");
    }, {once: true})
}

const btn_animate2 = () => {
    let copies = []
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

        cards.forEach((card, idx) => {
            let copy = card.cloneNode(true)
            copy.style.cssText = ""
            if (idx===0) 
                copy.classList.add("last-card-motion2")
            copies.push(copy)
        })
        const content = document.querySelector('.content2');
        content.replaceChildren(...copies);

        copies[0].addEventListener("animationend", () => {
            copies[0].classList.remove("last-card-motion2");
        }, {once: true})    
    }, {once: true})
}