const bodytag =  document.querySelector('body')

const theme = window.localStorage.getItem("theme")

if (theme === "dark") {
    bodytag.classList.add("dark");
    bodytag.classList.remove("light");
}