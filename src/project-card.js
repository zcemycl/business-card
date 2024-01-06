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
const projectCardTiming = {duration: 1500, iterations: 1};

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

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
    default_width_index -= 1;
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*scaleContent;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.cssText = `
        --translateX: ${default_width}px; 
        --translateY: ${default_height}px;`
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
