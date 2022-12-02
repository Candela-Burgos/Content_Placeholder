const queryId = (id) => document.getElementById(`${id}`);
const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

const updateInfo = () => {
  queryId("header").innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
  queryId("title").innerHTML = "Lorem ipsum dolor sit amet";
  queryId("excerpt").innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  queryId("profile_img").innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  queryId("name").innerHTML = "John Doe";
  queryId("date").innerHTML = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bgText) =>
    bgText.classList.remove("animated-bg-text")
  );
};

setTimeout(updateInfo, 2500);
