function scrollAndTocHandler() {
return {
    showScrollTop: false,
    tocOpen: false,
    lastScrollY: window.scrollY,
    initScroll() {
    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        // Button nur bei nach oben scrollen UND wenn weiter unten
        this.showScrollTop =
        currentScrollY > 120 && currentScrollY < this.lastScrollY;

        this.lastScrollY = currentScrollY;
    });
    },
};
}