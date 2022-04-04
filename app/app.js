var homeContent = `  <div class="fullsite">
<div class="home-content">
  <div class="hero-image">
    <h1>homework-eight:</h1>
    <p>This is homework-eight</p>
  </div>
  <div class="home-text">
    <h1>homework-eight description:</h1>
    <p>
      For this homework assignment, you will: We need to create a
      project named homework-eight that has at least 4 links in the
      nav bar. We need to use jQuery to link to each of those sites
      while loading it all on one page. We need to make 4 full pages
      that are styled well. Finally, we need to upload to GitHub, add
      the web4 link to the README.md file and submit!
    </p>
    <h1>how it is going:</h1>
    <p>
      As of right now, things seem to be going well. jQuery has taken
      some getting used to. I still have not memerized the code that
      was shown during the class lecture, but I am working on it.
    </p>
  </div>
</div>
</div>`;
var aboutContent = ``;
// var productsContent = ``;
// var contactContent = ``;

function initListeners() {
  $("nav a").click(function (e) {
    let btnID = e.currentTarget.id;
    loadPageContent(btnID);

    // console.log("click" + contentID);
  });
}

function loadPageContent(pageName) {
  let contentID = pageName + "Content";
  $("#app").html(eval(contentID));
}

function initApp() {
  initListeners();
}

$(document).ready(function () {
  // loadPageContent("home");
  initApp();
});
