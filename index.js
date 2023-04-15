var root = document.querySelector("main");
var count = 0; // added a variable
var text = "yooo";

let tab = ["yo", "hello", "salam", "shazam"];
// ! ------------------------------------------- Composant Hello -------------------
let Home = {
  view: function () {
    return m("main", [
      m("h1", { class: "title" }, "My first app"),
      // changed the next line
      m(
        "button",
        {
          onclick: function () {
            count++;
          },
        },
        count + " clicks"
      ),
      m("p", {}, "yoooo"),
      m("a", { href: "#!/splash" }, "Splash"),
    ]);
  },
};

// ! ------------------------------------------- Composant Splash -------------------

var Splash = {
  view: function () {
    return m("div", { class: "block" }, [
      m("a", { href: "#!/hello" }, "home"),
      m(
        "h1",
        {
          onclick: function () {
            chatildaa();
          },
        },
        text
      ),

      tab.map(function (user) {
        return m("h2", { class: "h2" }, user);
      }),
    ]);
  },
};
// ! ------------------------------------------- Router -------------------

m.route(root, "/home", {
  "/splash": Splash,
  "/home": Home,
});

var chatildaa = function () {
  m.request({
    method: "GET",
    url: "https://apiildaa.herokuapp.com/chat",
  }).then(function (data) {
    tab = data;
  });
};
