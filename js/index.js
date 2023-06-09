// 打字效果
new Typed("#typed", {
  strings: ["Web Developer", "Front-end Developer"],
  typeSpeed: 90,
  delaySpeed: 90,
  backDelay: 700,
  startDelay: 1000,
  loop: true,
});

// projects area
const project = Vue.createApp({
  data() {
    return {
      projects: [
        {
          title: "Foomosa",
          gitHubUrl: "https://github.com/aly-ning/foomosa",
          pageUrl: undefined,
          desc: "臺中美食資訊整合平台，提供餐廳營業資訊及比較店家配合之外送平台餐點價格，合作店家有專屬後臺可以更新菜單、優惠資訊，獲得商業分析",
          img: "img/foomosa.jpg",
          accomplishments: [
            "MySQL 資料庫建置",
            "利用 Boostrap 5、Node.js",
            "使用 AJAX ",
            "串聯 Google 及 Facebook 帳號認證 API",
            "使用 chart.js 及 anychart.js 達成資料可視化",
          ],
          showOverlay: false,
          initialOverlay: false,
        },
        {
          title: "Quiz Game",
          gitHubUrl: "https://github.com/aly-ning/quiz-game",
          pageUrl: "https://aly-ning.github.io/quiz-game/",
          desc: "問答小遊戲",
          img: "img/quiz_game.jpg",
          accomplishments: ["使用 CSS 及 JavaScript 作為切版練習", "RWD"],
          showOverlay: false,
          initialOverlay: false,
        },
      ],
    };
  },
  methods: {
    toggleOverlay(index) {
      this.projects[index].showOverlay = !this.projects[index].showOverlay;
      this.projects[index].initialOverlay = true; // initialOverlay: 防止fade out的動畫在一開始載入頁面時執行
    },
    goToGitHub(url) {
      window.location.href = url; // 導到 github
    },
  },
}).mount(".project-list");

// skills area
const skill = Vue.createApp({
  data() {
    return {
      skills: [
        {
          title: "Front-End Skills",
          logo: {
            JaveScript: "img/logo_js.png",
            Vue: "img/logo_vue.png",
            jQuery: "img/logo_jquery.png",
            Boostrap: "img/logo_boostrap.png",
          },
        },
        {
          title: "Back-End Skills",
          logo: {
            Nodejs: "img/logo_nodejs.png",
            Express: "img/logo_express.png",
            MySQL: "img/logo_mysql.png",
          },
        },
        {
          title: "Tools & Others",
          logo: {
            "Visual Studio Code": "img/logo_vc.png",
            GitHub: "img/logo_github.png",
            "Source Tree": "img/logo_sourcetree.png",
            Figma: "img/logo_figma.png",
            POSTMAN: "img/logo_postman.png",
            MAMP: "img/logo_mamp.png",
          },
        },
      ],
    };
  },
  methods: {
    // 啟用 tooltip
    initTooltips() {
      const tooltips = document.querySelectorAll('[data-mdb-toggle="tooltip"]');
      tooltips.forEach((tooltip) => {
        new mdb.Tooltip(tooltip);
      });
    },
  },
  mounted() {
    this.initTooltips();
  },
}).mount("#vueCarouselInner");

// 監聽網頁滾動事件，header加陰影
var header = document.querySelector("#header>div");
window.addEventListener("scroll", function () {
  // 獲取目前的滾動位置
  var scrollTop = window.scrollY;

  // 如果滾動位置為0，新增陰影class；否則移除陰影class
  if (scrollTop === 0) {
    header.classList.add("no-shadow");
  } else {
    header.classList.remove("no-shadow");
  }
});
