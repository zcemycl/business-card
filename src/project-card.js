const extract_vertical_horizontal_const = () => {
    const projectCards = document.querySelector(".project-cards");
    const middleCard = document.querySelector(".project-card:nth-child(4)");
    const {width: widtho, left: lefto} = projectCards.getBoundingClientRect(); 
    const {width, left} = middleCard.getBoundingClientRect();

    projectCards.style.cssText = `
        --translateX: ${lefto+widtho/2-left-width/2}px;
    `

    const projectRowCards = document.querySelectorAll(".project-row:nth-child(1) .project-card");
    const height_const = projectCards.clientHeight;
    const width_const = projectRowCards[1].getBoundingClientRect().left -
        projectRowCards[0].getBoundingClientRect().left;
    return [height_const, width_const];
}

let [height_const, width_const] = extract_vertical_horizontal_const();
let default_height_index = 0;
let default_width_index = 0;
const scaleContent = 1;
const center_y = 1;
const center_x = 3;
const rotate_y_const = 10;
const rotate_x_const = 10;

const nav_project_left = () => {
    default_width_index += 1;
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*scaleContent;
    let projectCards_ = document.querySelector(".project-cards");

    projectCards_.style.cssText = `
        --translateX: ${default_width}px; 
        --translateY: ${default_height}px;`
}

const nav_project_right = () => {
    const x_dir = 1;
    for (let i=1; i<4; i++) {
        let copies = []
        let cards = Array.from(document.querySelectorAll(
            `.project-row:nth-child(${i}) .project-card`));
        let lastcard = cards.pop()
        lastcard.classList.add("last-card-motion");
        lastcard.addEventListener("animationend", () => {
            lastcard.style.cssText = 
                '--opacity: 0; --translateY: 5vh';
            cards.forEach((card, idx) => {
                card.style.cssText = `
                    --second-translate-x: ${width_const}px;
                `
                card.children[0].style.cssText = `
                    --rotateX: ${i-center_y-1};
                    --cur_rotateY: ${-(idx-center_x+x_dir)};
                `
                card.classList.add("rest-card-motion");
                card.children[0].classList.add("rest-card-content-motion");
            })
        }, {once: true})

        cards[1].addEventListener("animationend", () => {
            cards.forEach((card, idx) => {
                card.style.cssText = `
                    --translateX: ${width_const}px;
                `
                card.children[0].style.cssText = `
                    --rotateX: ${i-center_y-1};
                    --rotateY: ${-(idx-center_x+x_dir)};
                `
                card.classList.remove("rest-card-motion");
                card.children[0].classList.remove("rest-card-content-motion");
            })
            lastcard.classList.remove("last-card-motion");
            cards.unshift(lastcard)

            cards.forEach((card, idx) => {
                let copy = card.cloneNode(true)
                copy.style.cssText = ""
                copy.children[0].style.cssText = ""
                if (idx===0) {
                    copy.children[0].style.cssText = `
                        --rotateX: ${i-center_y-1};
                        --rotateY: ${-(idx-center_x)};
                    `
                    copy.classList.add("last-card-motion2")
                    copy.children[0].classList.add("last-card-content-motion2")
                }
                copies.push(copy)
            })
            const content = document.querySelector(`.project-row:nth-child(${i})`);
            content.replaceChildren(...copies);

            copies[0].addEventListener("animationend", () => {
                copies[0].classList.remove("last-card-motion2");
                copies[0].children[0].classList.remove("last-card-content-motion2");
                copies[0].children[0].style.cssText = "";
            }, {once: true})
        }, {once: true})
    }
}

const nav_project_top = () => {
    default_height_index += 1
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*scaleContent;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.cssText = `
        --translateX: ${default_width}px; 
        --translateY: ${default_height}px;`
}

const nav_project_bot = () => {
    default_height_index -= 1
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*scaleContent;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.cssText = `
        --translateX: ${default_width}px; 
        --translateY: ${default_height}px;`
}

window.addEventListener("resize", () => {
    [height_const, width_const] = extract_vertical_horizontal_const();
})
