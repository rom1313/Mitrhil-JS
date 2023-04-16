var root = document.querySelector("main");
var count = 0; // added a variable
var text = "yooo";
let chatouvert = false;
let tab = [
  { pseudo: "Tom34777", text: "youhouuuuu 🤣🤣🤣" },
  { pseudo: "tom", text: "youhouuuuu 🤣🤣🤣" },
  { pseudo: "tom", text: "youhouuuuu 🤣🤣🤣" },
  { pseudo: "tom", text: "youhouuuuu 🤣🤣🤣" },
  { pseudo: "tom", text: "youhouuuuu 🤣🤣🤣, hey tu me prends pour un naze ? ahah t'a rien vu encore ptdrr !!" },
  { pseudo: "tom", text: "youhouuuuu 🤣🤣🤣" },
  { pseudo: "tom", text: "youhouuuuu 🤣🤣🤣" },
  { pseudo: "tom", text: "youhouuuuu 🤣🤣🤣" },
];
let app = { username: "invité" };
// ! ------------------------------------------- Composant Hello -------------------
let Home = {
  onupdate: function (vnode) {
    console.log("composant a changé");
  },
  view: function () {
    return m("main", [
      // changed the next lin
      m(
        "button",
        {
          onclick: function () {
            count++;
          },
        },
        count + " clicks"
      ),
      m("a", { href: "#!/splash" }, "Splash"),
      m(Chatlogo, { message: "Hello" }),
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
// ! ------------------------------------------- Composant Chatlogo-------------------

var Chatlogo = {
  view: function () {
    return m("img", {
      src: "./asset/img/svg/chat.svg",
      id: "chatlogo",
      onclick: function () {
        if (chatouvert) {
          m.mount(document.querySelector("#blockchat"), null);
          chatouvert = false;
        } else {
          m.mount(document.querySelector("#blockchat"), Chat);
          chatouvert = true;
        }
      },
    });
  },
};
// ! ------------------------------------------- Composant Chat-------------------

var Chat = {
  view: function () {
    return m("div", {}, [
      m("input", { id: "inputchat" }),
      m("div", { id: "chat" }, [
        tab.map(function (elem) {
          return m("div", { id: "blocktext" }, [m("p", { class: "pseudochat" }, elem.pseudo), m("p", { class: "textchat" }, elem.text)]);
        }),
      ]),
    ]);
  },
};

// ! ------------------------------------------- Router -------------------

m.route(root, "/home", {
  "/splash": Splash,
  "/home": Home,
});
// ! ------------------------------------------- Fonction -------------------
var chatildaa = function () {
  m.request({
    method: "GET",
    url: "https://apiildaa.herokuapp.com/chat",
  }).then(function (data) {
    tab = data;
  });
};
// ! ------------------------------------------- Global event -------------------
onkeyup = () => {
  console.log("touche !!!");
  count++;
  /*  m.mount(root, null); */
};
