const extract_vertical_horizontal_const = () => {
    const projectCards = document.querySelector(".project-cards");
    const middleCard = document.querySelector(".project-card:nth-child(4)");
    const {width: widtho, left: lefto} = projectCards.getBoundingClientRect(); 
    const {width, left} = middleCard.getBoundingClientRect();

    projectCards.style.cssText = `
        --translateX: ${lefto+widtho/2-left-width/2}px;
    `

    const projectRowCards = document.querySelectorAll(
        ".project-row:nth-child(1) .project-card");
    const projectRows = document.querySelectorAll(".project-row");
    const height_const = projectRows[1].getBoundingClientRect().top -
        projectRows[0].getBoundingClientRect().top;
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

const nav_project_horiz = (x_dir) => {
    let y_rotate, idx_change;
    idx_change = x_dir===1?0:6;
    for (let i=1; i<4; i++) {
        let copies = []
        let cards = Array.from(document.querySelectorAll(
            `.project-row:nth-child(${i}) .project-card`));
        let lastcard = x_dir===1?cards.pop():cards.shift()
        lastcard.classList.add("last-card-motion");
        lastcard.children[0].classList.add("last-card-content-motion");
        lastcard.addEventListener("animationend", () => {
            lastcard.style.cssText = 
                '--opacity: 0; --translateY: 5vh';
            lastcard.children[0].style.cssText = 
                '--rotateX: 0; --rotateY: 0;';
            cards.forEach((card, idx) => {
                y_rotate = -(idx-center_x);
                if (x_dir === 1) y_rotate -= x_dir;
                card.style.cssText = `
                    --second-translate-x: ${x_dir*width_const}px;
                `
                card.children[0].style.cssText = `
                    --rotateX: ${i-center_y-1};
                    --cur_rotateY: ${y_rotate};
                `
                card.classList.add("rest-card-motion");
                card.children[0].classList.add("rest-card-content-motion");
            })
        }, {once: true})

        cards[1].addEventListener("animationend", () => {
            cards.forEach((card, idx) => {
                y_rotate = -(idx-center_x);
                if (x_dir === 1) y_rotate -= x_dir;
                card.style.cssText = `
                    --translateX: ${x_dir*width_const}px;
                `
                card.children[0].style.cssText = `
                    --rotateX: ${i-center_y-1};
                    --rotateY: ${y_rotate};
                `
                card.classList.remove("rest-card-motion");
                card.children[0].classList.remove("rest-card-content-motion");
            })
            lastcard.children[0].classList.remove("last-card-content-motion");
            lastcard.classList.remove("last-card-motion");
            x_dir===1?cards.unshift(lastcard):cards.push(lastcard);

            cards.forEach((card, idx) => {
                y_rotate = -(idx-center_x);
                if (x_dir === 1) y_rotate -= x_dir;
                let copy = card.cloneNode(true)
                copy.style.cssText = ""
                copy.children[0].style.cssText = ""
                if (idx===idx_change) {
                    copy.children[0].style.cssText = `
                        --rotateX: ${i-center_y-1};
                        --rotateY: ${y_rotate};
                    `
                    copy.classList.add("last-card-motion2")
                    copy.children[0].classList.add("last-card-content-motion2")
                }
                copies.push(copy)
            })
            const content = document.querySelector(`.project-row:nth-child(${i})`);
            content.replaceChildren(...copies);

            copies[idx_change].addEventListener("animationend", () => {
                copies[idx_change].classList.remove("last-card-motion2");
                copies[idx_change].children[0].classList.remove("last-card-content-motion2");
                copies[idx_change].style.cssText = "";
                copies[idx_change].children[0].style.cssText = "";
            }, {once: true})
        }, {once: true})
    }
}

const nav_project_vert = (y_dir) => {
    let x_rotate;
    let idx_change = y_dir===1?0:2;
    let copies = [];
    let card_rows = Array.from(document.querySelectorAll('.project-row'));
    let firstrow = y_dir===1?card_rows.pop():card_rows.shift();
    firstrow.classList.add("first-row-card-motion");
    firstrow.addEventListener("animationend", () => {
        firstrow.style.cssText = 
            '--opacity: 0; --translateX: 5vw;';
        card_rows.forEach((row, idx) => {
            x_rotate = idx-center_y
            if (y_dir === 1) x_rotate += y_dir
            row.style.cssText = `
                --first-translate-y: ${y_dir*height_const}px;
            `
            Array.from(row.children).forEach((card, idx2) => {
                card.children[0].style.cssText = `
                    --cur_rotateX: ${x_rotate};
                    --rotateY: ${-(idx2-center_x)};
                `
                card.children[0].classList.add(
                    "first-row-card-content-motion2");
            })
            row.classList.add("first-row-card-motion2");
        })
    }, {once: true})

    card_rows[0].addEventListener("animationend", () => {
        card_rows.forEach((row, idx) => {
            x_rotate = idx-center_y
            if (y_dir === 1) x_rotate += y_dir
            row.style.cssText = `
                --translateY: ${y_dir*height_const}px;
            `
            Array.from(row.children).forEach((card, idx2) => {
                card.children[0].style.cssText = `
                    --rotateX: ${x_rotate};
                    --rotateY: ${-(idx2-center_x)};
                `
                card.children[0].classList.remove(
                    "first-row-card-content-motion2");
            })
            row.classList.remove("first-row-card-motion2");
        })
        firstrow.classList.remove("first-row-card-motion");
        y_dir===1?card_rows.unshift(firstrow):card_rows.push(firstrow);

        card_rows.forEach((row, idx) => {
            x_rotate = idx-center_y;
            let copy = row.cloneNode(true);
            copy.style.cssText = ""
            Array.from(copy.children).forEach((card, idx2) => {
                card.children[0].style.cssText = ""
                if (idx===idx_change) {
                    card.children[0].style.cssText = `
                        --rotateX: ${x_rotate};
                        --rotateY: ${-(idx2-center_x)};
                    `
                    card.children[0].classList.add(
                        "first-row-card-content-motion3");
                }
            })
            if (idx===idx_change){
                copy.classList.add("first-row-card-motion3");
            }
            copies.push(copy)
        })
        const content = document.querySelector(".project-cards");
        content.replaceChildren(...copies);

        copies[idx_change].addEventListener("animationend", () => {
            copies[idx_change].classList.remove("first-row-card-motion3");
            Array.from(copies[idx_change].children).forEach((card, idx) => {
                card.children[0].classList.remove(
                    "first-row-card-content-motion3");
                card.children[0].style.cssText = "";
            })
            copies[idx_change].style.cssText = ""
        }, {once: true})
    }, {once: true})
}

window.addEventListener("resize", () => {
    [height_const, width_const] = extract_vertical_horizontal_const();
})
