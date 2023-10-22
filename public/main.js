let menuicon = document.getElementById ("menu-icon")
menuicon.onclick= function onMenuClick() {
  var navbar = document.getElementById("navigation-bar");
  var responsive_class_name = 'responsive'
  navbar.classList.toggle(responsive_class_name)
  let h1 = document.querySelector(".container2 h1")
  h1.classList.toggle ("newh1color")
}
// Spin of icon-gear settings on click
document.querySelector(".gear-container ").onclick = function () {
  document.querySelector(".settings-box").classList.toggle("open");
  document
    .querySelector(".gear-container .fa-gear ")
    .classList.toggle("fa-spin");
};
// ####################################
// Add active to the settings box on click
document.addEventListener("click", function handler(event) {
  for (const li of document.querySelectorAll(".settings-box  ul li a")) {
    li.classList.remove("active");
  }
  event.target.classList.add("active");
  event.target.classList.remove("text-white");
});
//
// ####################################
// Animation of the design skills

addEventListener("scroll", () => {
  let content2 = document.querySelector(".design");
  let content2top = content2.offsetTop;
  let content2height = content2.offsetHeight;
  let winheight2 = this.innerHeight;
  let winscrooltop2 = this.pageYOffset;
  if (winscrooltop2 > content2top + content2height - winheight2) {
    let uls = document.querySelectorAll(".options-2 ul li i");
    uls.forEach((el) => {
      el.classList.add("success");
    });
  }
});

// ####################################
// background random image

let landingbackground = document.querySelector(".home");
let arrimgs = [
  "main.css/home-1.jpg",
  "main.css/home-2.jpg",
  "main.css/v2osk-1Z2niiBPg5A-unsplash.jpg",
  "main.css/home-3.jpg",
  "main.css/home-4.jpg",
];
setInterval(() => {
  let randomnumber = Math.floor(Math.random() * arrimgs.length);
  landingbackground.style.backgroundImage =
    "url(" + arrimgs[randomnumber] + ")";
}, 10000);
// ####################################
// animation for skills
let Skills = document.querySelector(".container7");
window.onscroll = function () {
  let Skillstop = Skills.offsetTop;
  let Skillsheight = Skills.offsetHeight;
  let winheight = this.innerHeight;
  let winscrooltop = this.pageYOffset;
  if (winscrooltop > Skillstop + Skillsheight - winheight) {
    document.querySelectorAll(".cont-lang span").forEach((i) => {
      i.style.width = "100%";
      i.style.transition = "3s";
    });
    document.querySelectorAll(".cont-lang .s10").forEach((div) => {
      div.style.width = "10%";
      div.style.transition = "3s";
    });
    document.querySelectorAll(".cont-lang .s15").forEach((div) => {
      div.style.width = "15%";
      div.style.transition = "3s";
    });
    document.querySelectorAll(".cont-lang .s25").forEach((div) => {
      div.style.width = "25%";
      div.style.transition = "3s";
    });
  }
};
// ####################################
//   button of scroll
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
addEventListener("scroll", function () {
  scrollFunction();

  function scrollFunction() {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
});
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//   #####################################
// For the validaton of the form
function validateForm() {
  var name = document.getElementById("name").value;
  if (name == "") {
    document.querySelector(".status").innerHTML = "Name cannot be empty";
    document
      .querySelector(".status")
      .classList.add("alert", "alert-danger", "mt-2");
    return false;
  }
  var email = document.getElementById("email").value;
  if (email == "") {
    document.querySelector(".status").innerHTML = "Email cannot be empty";
    document
      .querySelector(".status")
      .classList.add("alert", "alert-danger", "mt-2");

    return false;
  } else {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector(".status").innerHTML = "Email format invalid";
      document
        .querySelector(".status")
        .classList.add("alert", "alert-danger", "mt-2");

      return false;
    }
  }
  var subject = document.getElementById("subject").value;
  if (subject == "") {
    document.querySelector(".status").innerHTML = "Subject cannot be empty";
    document
      .querySelector(".status")
      .classList.add("alert", "alert-danger", "mt-2");

    return false;
  }
  var message = document.getElementById("message").value;
  if (message == "") {
    document.querySelector(".status").innerHTML = "Message cannot be empty";
    document
      .querySelector(".status")
      .classList.add("alert", "alert-danger", "mt-2");

    return false;
  }
  document.querySelector(".status").innerHTML = "Sending...";
  document
    .querySelector(".status")
    .classList.add("alert", "alert-success", "mt-2");
}
//  ##################################################
// For switching of the photos
let app = document.getElementById("app");
app.addEventListener(
  "click",
  () => {
    document.querySelectorAll(".content-3 .photo").forEach((e) => {
      e.classList.remove("hidden-photo");
    });

    document.querySelector(".content-3").classList.remove("disable-2");
    document.querySelector(".content-3").classList.remove("disable");

    document.getElementById("photo1").classList.add("hidden-photo");
    document.getElementById("photo2").classList.add("hidden-photo");
    document.getElementById("photo3").classList.add("hidden-photo");
    document.getElementById("photo4").classList.add("hidden-photo");
    document.querySelector(".content-3").classList.add("disable");
    document.querySelectorAll(".header-services li").forEach((el) => {
      el.classList.remove("active1");
    });
    app.classList.add("active1");
  },
  true
);
let all = document.getElementById("all");
all.addEventListener("click", () => {
  document.querySelector(".content-3").classList.remove("disable-2");

  document.querySelector(".content-3").classList.remove("disable");

  document.querySelectorAll(".header-services li").forEach((el) => {
    el.classList.remove("active1");

    document.querySelectorAll(".content-3 .photo").forEach((e) => {
      e.classList.remove("hidden-photo");
    });
  });
  all.classList.add("active1");
});
let photo = document.getElementById("photo");
photo.addEventListener("click", () => {
  document.getElementById("photo1").classList.add("hidden-photo");
  document.getElementById("photo2").classList.add("hidden-photo");
  document.getElementById("photo3").classList.add("hidden-photo");
  document.getElementById("photo4").classList.add("hidden-photo");
  document.getElementById("photo5").classList.add("hidden-photo");
  document.getElementById("photo6").classList.add("hidden-photo");
  document.querySelector(".content-3").classList.add("disable-2");
  document.querySelectorAll(".header-services li").forEach((el) => {
    el.classList.remove("active1");
  });
  photo.classList.add("active1");
});
//  ##################################################
