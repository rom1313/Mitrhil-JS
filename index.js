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
  onupdate: function (vnode) {},
  view: function () {
    return m("div", [m(Chatlogo, { message: "Hello" })]);
  },
};

// ! ------------------------------------------- Composant Splash -------------------

var Splash = {
  view: function () {
    return m("h1", { id: "textsplash" }, "Heeloo splash");
  },
};
// ! ------------------------------------------- Composant Nav -------------------

var Nav = {
  view: function () {
    return m("div", { class: "blocknav" }, [
      m("a", { href: "#!/home" }, "Home"),
      m("a", { href: "#!/splash" }, "Splash"),
      m("a", { href: "#!/splash" }, "Shop"),
    ]);
  },
};
m.mount(document.querySelector("#navcomponent"), Nav);
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
  oninit: function (vnode) {
    setTimeout(() => {
      document.querySelector("#chat").lastChild.scrollIntoView();
    }, 100);
  },
  view: function () {
    return m("div", {}, [
      m(
        "span",
        {
          id: "spanchat",
          onclick: function () {
            document.querySelector("#chat").firstChild.scrollIntoView();
          },
        },
        "⬆"
      ),
      m("input", {
        id: "inputchat",
        oninput: function (e) {
          console.log(e.target.value);
        },
        onkeyup: function (e) {
          if ((e.code === "Enter" && e.target.value != "") || (e.code === "NumpadEnter" && e.target.value != "")) {
            let objet = { pseudo: `${app.username}`, text: `${e.target.value}` };
            tab.push(objet);
            console.table(tab);
            setTimeout(() => {
              document.querySelector("#chat").lastChild.scrollIntoView();
            }, 100);
            e.target.value = "";
          }
        },
      }),
      m(
        "div",
        {
          id: "chat",
          onclick: function (e) {},
        },
        [
          tab.map(function (elem) {
            return m("div", { id: "blocktext" }, [m("p", { class: "pseudochat" }, elem.pseudo), m("p", { class: "textchat" }, elem.text)]);
          }),
        ]
      ),
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
onkeyup = (e) => {
  /*  m.mount(root, null); */

};
