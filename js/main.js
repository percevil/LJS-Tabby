// todo list

// 1.Add event listeners to each tab
// 2.Find the tab they clicked
// 3.Find the corresponding tab content
// 4.Remove is-selected from other tabs to de-emphasize them
// 5.Remove is-selected from other tab content to hide them
// 6.Add is-selected to the tab they clicked to emphasize it
// 7.Add is-selected to the tab content to show it
// 8.Adding event listeners

const tabby = document.querySelector(".tabby");
const tabs = [...tabby.querySelectorAll(".tab")];
const tabContents = [...tabby.querySelectorAll(".tab-content")];
const tabsList = tabby.querySelector(".tabs");

// 1.Add event listeners to each tab, using forEach loop
// tabs.forEach((tab) => {
//   tab.addEventListener("click", (e) => {
//     // When a user clicks a .tab, we get the target from data-target.
//     const target = tab.dataset.target;
//     // 2.Find the tab they clicked
//     const tabContent = tabby.querySelector("#" + target);
//     // 4. 5. Run loop to remove all 'is-selected' from all tabs, and to hide other tabs.
//     // console.log(tabContent)
//     tabs.forEach((t) => t.classList.remove("is-selected"));
//     // 6. Add is-selected to the tab they clicked to emphasize it
//     tab.classList.add("is-selected");

//     tabContents.forEach((c) => c.classList.remove("is-selected"));
//     tabContent.classList.add("is-selected");
//     // console.log(tabContent);
//   });
// });

tabsList.addEventListener("click", (e) => {
  const tab = e.target;
  // ^ targets tab
  const target = tab.dataset.target;
  // ^ Once we know the clicked tab, we can get the corresponding tab-content through the data-target attribute
  const tabContent = tabby.querySelector("#" + target);

  tabs.forEach((t) => t.classList.remove("is-selected"));
  tab.classList.add("is-selected");
  //  ^ // Selects a tab
  tabContents.forEach((c) => c.classList.remove("is-selected"));
  tabContent.classList.add("is-selected");
  //  ^// Selects the corresponding tab content
});
