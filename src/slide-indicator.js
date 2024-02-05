const slide_dest = {
    intro: [0,0],
    educations: [0,-80],
    experiences: [-50,-80],
    moocs: [-50,0],
}

const slide_dest_left = {
    intro: [-50,-80],
    educations: [-50,0],
    experiences: [0,0],
    moocs: [0,-80]
}

const timing = {
    duration: 1200,
    iterations: 1,
};

const slide_dot_click = (entry) => {
    const origin = document.querySelector(".slide-indicator-active");
    const dest = document.querySelector(`a[data-section="${entry.target.dataset.section}"]`);
    const orig_section = origin.dataset.section;
    const dest_section = dest.dataset.section;
    if (orig_section !== dest_section) {
        const img_container = document.querySelector(".right-image");
        const left_container = document.querySelector(".left-description");

        const [dx,dy] = slide_dest[dest_section];
        const [dxl,dyl] = slide_dest_left[dest_section];

        img_container.style.cssText = `--translateX: ${dx}%; 
            --translateY: ${dy}vh`

        left_container.style.cssText = `--translateX: ${dxl}%; 
            --translateY: ${dyl}vh`

        origin.classList.remove("slide-indicator-active");
        dest.classList.add("slide-indicator-active");
    };
}

const detect_default_resume_indicator_dot = () => {
    const origin = document.querySelector(".slide-indicator-active");
    const orig_section = origin.dataset.section;
    const [ox,oy] = slide_dest[orig_section];
    const [oxl,oyl] = slide_dest_left[orig_section];
    const img_container = document.querySelector(".right-image");
    const left_container = document.querySelector(".left-description");
    img_container.style.transform = `translate3d(${ox}%, ${oy}vh, 0)`;
    left_container.style.transform = `translate3d(${oxl}%, ${oyl}vh, 0)`;
}

const detect_default_navbar_state = () => {
    const content_block = document.querySelector(".content");
    const page = 2;
    content_block.scrollTo(0, page*content_block.clientHeight);
}

window.addEventListener("load", () => {
    detect_default_resume_indicator_dot();
    detect_default_navbar_state();

    const projectCards = document.querySelector(".project-cards");
    const middleCard = document.querySelector(".project-card:nth-child(4)");
    const {width: widtho, left: lefto} = projectCards.getBoundingClientRect(); 
    const {width, left} = middleCard.getBoundingClientRect();

    projectCards.style.cssText = `
        --translateX: ${lefto+widtho/2-left-width/2}px;
    `

})