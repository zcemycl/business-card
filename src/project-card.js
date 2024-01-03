const extract_vertical_horizontal_const = () => {
    const projectCards = document.querySelector(".project-cards");
    const projectRowCards = document.querySelectorAll(".project-row:nth-child(1) .project-card");
    const height_const = projectCards.clientHeight;
    const width_const = projectRowCards[1].getBoundingClientRect().left -
        projectRowCards[0].getBoundingClientRect().left;
    return [height_const, width_const];
}

let [height_const, width_const] = extract_vertical_horizontal_const();
let default_height_index = 0;
let default_width_index = 0;

const nav_project_left = () => {
    default_width_index += 1;
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.transform = `translate3d(${default_width}px, ${default_height}px, 0) scale(1.3)`
}

const nav_project_right = () => {
    default_width_index -= 1;
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.transform = `translate3d(${default_width}px, ${default_height}px, 0) scale(1.3)`
}

const nav_project_top = () => {
    default_height_index += 1
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.transform = `translate3d(${default_width}px, ${default_height}px, 0) scale(1.3)`
}

const nav_project_bot = () => {
    default_height_index -= 1
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.transform = `translate3d(${default_width}px, ${default_height}px, 0) scale(1.3)`
}

window.addEventListener("resize", () => {
    [height_const, width_const] = extract_vertical_horizontal_const();
    console.log(height_const, width_const)
})
