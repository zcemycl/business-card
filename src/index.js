const menuItems  = document.querySelectorAll(".menu ul li a");

const removeActiveClass = () => {
    menuItems.forEach((entry) => {
        entry.classList.remove("active");
    })
}

const addActiveClass = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target);
            let cur = document.querySelector(`.menu ul li a[href='#${entry.target.id}']`);
            removeActiveClass();
            cur.classList.add('active');
        }
    })
};

const options = {
    // root: document.querySelector(".scroll-area"),
    // rootMargin: "0px",
    threshold: 0.8
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
    observer.observe(section);
});