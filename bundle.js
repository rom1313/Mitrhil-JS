(() => {
  var e = document.querySelector("main"),
    t = 0,
    n = "yooo",
    a = ["yo", "hello", "salam", "shazam"],
    c = {
      view: function () {
        return m("main", [
          m("h1", { class: "title" }, "My first app"),
          m(
            "button",
            {
              onclick: function () {
                t++;
              },
            },
            t + " clicks"
          ),
          m("p", {}, "yoooo"),
          m("a", { href: "#!/splash" }, "Splash"),
        ]);
      },
    },
    l = {
      view: function () {
        return m("div", { class: "block" }, [
          m("a", { href: "#!/hello" }, "home"),
          m(
            "h1",
            {
              onclick: function () {
                h();
              },
            },
            n
          ),
          a.map(function (o) {
            return m("h2", { class: "h2" }, o);
          }),
        ]);
      },
    };
  m.route(e, "/home", { "/splash": l, "/home": c });
  var h = function () {
    m.request({ method: "GET", url: "https://apiildaa.herokuapp.com/chat" }).then(function (o) {
      a = o;
    });
  };
})();
