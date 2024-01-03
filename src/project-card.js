const projectCards = document.querySelector(".project-cards");
const height_const = projectCards.clientHeight;
let default_height = 0;
console.log(projectCards, projectCards.clientHeight);

// projectCards.addEventListener("mouseover", () => {
//     console.log("hihi")
// })

const nav_project_top = () => {
    default_height += height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.transform = `translateY(${default_height}px) scale(1.3)`
}

const nav_project_bot = () => {
    default_height -= height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.transform = `translateY(${default_height}px) scale(1.3)`
}
