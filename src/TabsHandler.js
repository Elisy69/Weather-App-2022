const tabs = document.querySelectorAll(".tab");
const selectedWindow = document.querySelectorAll(".weatherWindows");

export function tabsHandler() {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => tab.classList.remove("pressed"));
      tab.classList.add("pressed");
      const selected = document.querySelector(tab.dataset.option);
      console.log(selected);
      selectedWindow.forEach((window) => window.classList.remove("active"));
      selected.classList.add("active");
    });
  });
}
