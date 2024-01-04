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
const projectCardTiming = {duration: 1500, iterations: 1};

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const nav_project_left = () => {
    default_width_index += 1;
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");

    projectCards_.style.cssText = `
        --translateX: ${default_width}px; 
        --translateY: ${default_height}px;`

    // sleep(500).then(() => {
    //     Array.from(projectCards_.children).forEach(row => {
    //         let cards = Array.from(row.children);
    //         const lastone = cards.pop();
    //         // const firstone = cards.shift();
    //         // console.log(lastone, firstone)
    //         cards.unshift(lastone);
    //         row.replaceChildren(...cards)
    //     })
    // });

}

const nav_project_right = () => {
    default_width_index -= 1;
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.cssText = `
        --translateX: ${default_width}px; 
        --translateY: ${default_height}px;`
}

const nav_project_top = () => {
    default_height_index += 1
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.cssText = `
        --translateX: ${default_width}px; 
        --translateY: ${default_height}px;`
}

const nav_project_bot = () => {
    default_height_index -= 1
    let default_width = default_width_index*width_const;
    let default_height = default_height_index*height_const/3*1.3;
    let projectCards_ = document.querySelector(".project-cards");
    projectCards_.style.cssText = `
        --translateX: ${default_width}px; 
        --translateY: ${default_height}px;`
}

window.addEventListener("resize", () => {
    [height_const, width_const] = extract_vertical_horizontal_const();
})
