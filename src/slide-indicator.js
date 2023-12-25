
const silde_dest = {
    intro : "translate3d(0, 0, 0)",
    educations: "translate3d(0, -80vh, 0)",
    experiences: "translate3d(-50%, -80vh, 0)",
    moocs: "translate3d(-50%, 0, 0)",
}

const timing = {
    duration: 1000,
    iterations: 1,
  };

const slide_dot_click = (entry) => {
    const origin = document.querySelector(".slide-indicator-active");
    const dest = document.querySelector(`a[data-section="${entry.target.dataset.section}"]`);
    const orig_section = origin.dataset.section;
    const dest_section = dest.dataset.section;
    if (orig_section !== dest_section) {
        const keyframes = [
            { transform: silde_dest[orig_section] },
            { opacity: 0 },
            { opacity: 0 },
            { opacity: 0 },
            { transform: silde_dest[dest_section] }
        ]
        const img_container = document.querySelector(".right-image");
        img_container.animate(keyframes, timing);
        img_container.style.transform = silde_dest[dest_section];
        origin.classList.remove("slide-indicator-active");
        dest.classList.add("slide-indicator-active");
    };
}