const App = Vue.createApp({
  data() {
    return {
      year: new Date().getFullYear(),
      scrollY: 0,
      navs: [
        {
          navName: '關於我',
          navHref: '#aboutSection',
        },
        {
          navName: '簡介',
          navHref: '#introSection',
        },
        {
          navName: '技能',
          navHref: '#SkillSection',
        },
        {
          navName: '聯絡我',
          navHref: '#tableSection',
        },
      ],
      licenses: [
        '程式語言 (Python)',
        '台大網頁設計基礎班證書',
        '美國精算證照SOA P科',
        '證卷商業務員',
        '高級證卷商業務員',
        '金融市場常識與職業道德',
      ],
      skills: [
        {
          skillGroup: '前端',
          skillList: [
            'HTML',
            'CSS/SCSS',
            'JavaScript',
            'Vue/Vue-Cli',
            'JQuery',
            'Bootstrap',
          ],
        },
        {
          skillGroup: '辦公室應用',
          skillList: [
            'Word',
            'PowerPoint',
            'Excel',
            'Outlook',
            'Python',
            'spss',
          ],
        },
      ],
      projects: [
        {
          title: '門禁專案',
          text: [
            '使用 Vue-cli + Ant Design Vue + Vue-i18n',
            '實際專案透過Axios串接後端API，在此是使用假JSON來創作。',
            '為門禁控制網頁，可以透過網頁操作門禁讀卡系統。',
            '具備多國語系，可操作 CRUD，具備匯入匯出功能。',
          ],
          imgSrc: './img/user-tw.png',
          imgAlt: '門禁專案',
          href: 'https://x870421.github.io/door/#/',
        },
        {
          title: 'todoListAPI',
          text: [
            '利用Axios串接API，讓網頁可以進行註冊、登入，並將你填寫的todo清單儲存置資料庫，以便之後登入可以保存你的資料。',
            ' (由於此API提供為測試及練習使用，因此數據將在每天23:59分清除。)',
          ],
          imgSrc: './img/todoAPI.png',
          imgAlt: '代辦事項照片',
          href: 'https://x870421.github.io/todoListAPI/',
        },
        {
          title: '農產品比價網',
          text: [
            '利用Axios串接json資料，並將資料印在網頁上。',
            '可以透過農產品的總類去篩選，也可以依造價格高低做排序，每15筆資料唯一頁。',
          ],
          imgSrc: './img/parity.png',
          imgAlt: '比價網照片',
          href: 'https://x870421.github.io/parity/',
        },
        {
          title: 'Photo-website',
          text: [
            ' Pexels是一個免費搜尋圖片的網站，利用Pexels提供的專屬API儲存Pexels內容庫。',
            '此網頁可由關鍵字搜尋，立即從網頁中取得Pexels的圖片。',
            '使用工具：React',
          ],
          imgSrc: './img/photo-web.png',
          imgAlt: '相片網站',
          href: 'https://x870421.github.io/photoWebsite/',
        },
      ],
      innerWidth: '',
      courses: [
        {
          label: 'Udemy',
          name: 'Udmey',
          target: 'udemy',
          text: [
            '離散數學與演算法 (Python, JavaScript)',
            '2022網頁開發全攻略',
            '(HTML, CSS, JavaScript, React, SQL, Node, more)',
            'Python資料分析-入門實戰',
          ],
        },
        {
          label: 'Hahow',
          name: 'Hahow',
          target: 'Hahow',
          text: ['Python 入門特訓 - 基礎實作到證照攻略'],
        },
        {
          label: '台大訓練班',
          name: '台大資訊系統訓練班',
          target: 'NTU',
          text: [
            'HTML5, CSS3, jQuery, Bootstrap 網頁設計基礎班',
            'JavaScript ES6 與 React 前端開發：從入門到進階',
          ],
        },
      ],
      scrollSpy: {},
      navActive: '',
      emailForm: {
        textarea: '',
        name: '',
        phone: '',
        email: '',
      },
      msg: {
        style: 'success',
        title: 'hi',
        content: 'hi',
      },
    };
  },
  methods: {
    sideBoxAction(action) {
      this.$refs.sideBox.classList[action]('active');
    },
    hrefAction(e) {
      e.preventDefault();
      hash = e.target.hash.slice(1);
      const top = document.getElementById(hash).offsetTop;
      window.scrollTo({
        top: top - 50,
        behavior: 'smooth',
      });
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    onScroll() {
      this.scrollY = window.scrollY;
      let temp = '';
      for (let i in this.scrollSpy) {
        if (this.scrollY > this.scrollSpy[i]) {
          temp = i;
        }
      }
      this.navActive = temp;
    },
    conuntY() {
      this.navs.forEach((i) => {
        const href = i.navHref.slice(1);
        this.scrollSpy[href] = this.$refs[href].offsetTop - 50;
      });
    },
    sendEmail(e) {
      e.preventDefault();
      const vm = this;

      if (vm.emailForm.name === '' || vm.emailForm.email === '') {
        vm.msg = {
          style: 'danger',
          title: '發送失敗',
          content: '請填寫您的姓名與email',
        };
        $('#liveToast').toast('show');
        return;
      }

      const templateParams = {
        name: vm.emailForm.name,
        textarea: vm.emailForm.textarea,
        phone: vm.emailForm.phone,
        email: vm.emailForm.email,
      };

      emailjs.send('service_1gqxi6l', 'template_dnlwiem', templateParams).then(
        function (response) {
          vm.msg = {
            style: 'success',
            title: 'hi!' + vm.emailForm.name,
            content: '發送成功',
          };
          $('#liveToast').toast('show');

          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          vm.msg = {
            style: 'danger',
            title: 'hi!' + vm.emailForm.name,
            content: '發送失敗!請再試一次',
          };
          $('#liveToast').toast('show');
          console.log('FAILED...', error);
        }
      );
    },
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.conuntY);
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.conuntY);
    this.conuntY();
  },
  created() {
    this.innerWidth = window.innerWidth;
    new WOW().init();
    emailjs.init('IWEhfhoz5IvQcpbiS');
  },
});
App.mount('#app');
