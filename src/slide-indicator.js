
const slide_dest = {
    // intro : "translate3d(0, 0, 0)",
    // educations: "translate3d(0, -80vh, 0)",
    // experiences: "translate3d(-50%, -80vh, 0)",
    // moocs: "translate3d(-50%, 0, 0)",
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

const generate_keyframes = (ox, oy, dx, dy) => {
    return keyframes = [
        { transform: `translate3d(${ox}%, ${oy}vh, 0)`, opacity: 1 },
        { transform: `translate3d(${(ox+dx)/2}%, ${oy}vh, 0)`, opacity: 0 },
        { transform: `translate3d(${(ox+dx)/2}%, ${(oy+dy)/2}vh, 0)`, opacity: 0 },
        { transform: `translate3d(${dx}%, ${dy}vh, 0)`, opacity: 1 }
    ]
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
        const [ox,oy] = slide_dest[orig_section];
        const [dxl,dyl] = slide_dest_left[dest_section];
        const [oxl,oyl] = slide_dest_left[orig_section];

        const right_keyframes = generate_keyframes(ox, oy, dx, dy);
        const left_keyframes = generate_keyframes(oxl, oyl, dxl, dyl);
        
        img_container.animate(right_keyframes, timing);
        img_container.style.transform = `translate3d(${dx}%, ${dy}vh, 0)`;

        left_container.animate(left_keyframes, timing);
        left_container.style.transform = `translate3d(${dxl}%, ${dyl}vh, 0)`

        origin.classList.remove("slide-indicator-active");
        dest.classList.add("slide-indicator-active");
    };
}

window.addEventListener("load", () => {
    const origin = document.querySelector(".slide-indicator-active");
    const orig_section = origin.dataset.section;
    const [ox,oy] = slide_dest[orig_section];
    const [oxl,oyl] = slide_dest_left[orig_section];
    const img_container = document.querySelector(".right-image");
    const left_container = document.querySelector(".left-description");
    img_container.style.transform = `translate3d(${ox}%, ${oy}vh, 0)`;
    left_container.style.transform = `translate3d(${oxl}%, ${oyl}vh, 0)`;
})