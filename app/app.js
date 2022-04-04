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
var learnContent = `<div class="fullsite">
<div class="about-content">
  <h1>about:</h1>
  <p>
    This is a link to w3Schools that I used to learn more about
    jQuery.
  </p>
  <a href=" https://www.w3schools.com/jquery/default.asp">
    https://www.w3schools.com/jquery/default.asp</a
  >
  <div class="w3-image"></div>
  <p>
    I have learned a lot from w3 schools. It is an incredibly useful
    resource for newer and more experienced coders, and it's free!
  </p>
</div>
</div>`;
var futureContent = `<div class="fullsite">
<div class="future-content">
  <h1>my plans for the future:</h1>
  <p>
    I plan on continuing to learn web-development, with an end goal of
    becoming a full-stack developer with experience and knowledge in
    multiple languages and to have experiences in both front end and
    back end web-development. Below, I decided to give my favorite
    project thus far some love, because at the time I hated it.
  </p>
  <h1>my favorite project thus far:</h1>
  <div class="project-img"></div>
  <span>
    Looking back, though Sweet.io at the time was incredibly difficult
    for me, I learned so much from that website. I learned about
    linear gradients, how to add new fonts to your project, how to
    round images, and creative ways of aligning images and text.
    Though it was a pain to do, I look back on it and appreciate it
    for teaching me so much about html and css.
  </span>
</div>
</div>`;
var contactContent = `        <div class="fullsite">
<div class="contact-content">
  <h1>contact me:</h1>
  <input type="text" id="fName" placeholder="first name..." />
  <input type="text" id="fName" placeholder="last name..." />
  <input type="text" id="fName" placeholder="email..." />
  <input type="text" id="fName" placeholder="phone number..." />
  <div class="button">SUBMIT</div>
  <div class="thank-you-image"></div>
</div>
</div>`;

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
  loadPageContent("home");
  initApp();
});
