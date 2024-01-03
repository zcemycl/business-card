const projectCards = document.querySelector(".project-cards");
const projectRowCards = document.querySelectorAll(".project-row:nth-child(1) .project-card");
const projectCard = document.querySelector(".project-card");
const projectRow = document.querySelector(".project-row");
const height_const = projectCards.clientHeight;
const width_const = projectCard.clientWidth;
const cardGap = projectRowCards[1].getBoundingClientRect().left -
    projectRowCards[0].getBoundingClientRect().left - width_const;
let default_height = 0;
let default_width = 0;
console.log(projectCards, height_const, width_const, cardGap);
console.log(projectRowCards[0].offsetLeft)
console.log(projectRow.getBoundingClientRect(), 
    projectRowCards[0].getBoundingClientRect(),
    projectRowCards[1].getBoundingClientRect())

// projectCards.addEventListener("mouseover", () => {
//     console.log("hihi")
// })

const nav_project_left = () => {
    default_width += (width_const+cardGap);
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.transform = `translate3d(${default_width}px, ${default_height}px, 0) scale(1.3)`
}

const nav_project_right = () => {
    default_width -= (width_const+cardGap);
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.transform = `translate3d(${default_width}px, ${default_height}px, 0) scale(1.3)`
}

const nav_project_top = () => {
    default_height += height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.transform = `translate3d(${default_width}px, ${default_height}px, 0) scale(1.3)`
}

const nav_project_bot = () => {
    default_height -= height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.transform = `translate3d(${default_width}px, ${default_height}px, 0) scale(1.3)`
}
