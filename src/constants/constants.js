export const projects = [
  {
    title: "Covid Tracker PWA",
    description:
      "React Progressive Web application built from scratch without CRA or any template serving covid data through web scrapping content using nodejs , puppetter",
    learning:
      "Webpack, Babel, Service Workers ,Workbox, Puppetter , PWA , Caching using SW, Mapbox",
    image: "/images/covidTrackerPWA.webp",
    tags: [
      "PWA",
      "Webpack",
      "Babel",
      "Service Workers",
      "Workbox",
      "Puppetter",
      "Mapbox",
      "API Caching",
    ],
    source: "https://ind-covid-tracker.herokuapp.com/",
    visit: "https://github.com/Aadarsh8178/Covid_Tracker",
    id: 0,
  },
  {
    title: "React GraphQL Reading List",
    description: "You can perform read, create, delete operation on book",
    learning: "GraphQL, Apollo Client, MongoDB",
    image: "/images/graphql.webp",
    tags: ["GraphQL", "Apollo Client", "React", "MongoDB", "Nodejs", "Express"],
    source: "https://bpc-reading-list.herokuapp.com/",
    visit: "https://github.com/Aadarsh8178/Graphql",
    id: 1,
  },
  {
    title: "Angular Recipe Book",
    description:
      "You can create a recipe by going into recipe section you have to save data from manage dropdown in the navbar to save it to the firebase and later fetch using fetch data option in manage dropdown.",
    learning:
      "Angular , Learnt Angular basics , Data binding, Directives , Services , Dependency injection, Routing, Observables, Angular Forms , Pipes ,Making HTTP requests , Authentication, NgRx , Firebase ",
    image: "/images/angular_recipe.webp",
    tags: [
      "Angular",
      "NgRx",
      "Angular Forms",
      "Routing in Angular",
      "Firebase",
    ],
    source: "https://dazzling-cori-8bfcfa.netlify.app/",
    visit: "https://github.com/Aadarsh8178/Recipe-app-angular",
    id: 2,
  },
  {
    title: "Vuejs Stock Trader",
    description:
      "You have some initial amount using which you can buy stocks in the stocks section which will be reflected in your portfolio after ending the day in the navbar stock price will change and you can sell your stocks to earn profit , data will be saved if you click on save & load dropdown and select save and can be fetched later on clicking load data from firebase ",
    learning:
      "Vuejs , Learnt Basics of Vuejs, Data binding, Directives ,Forms , Animations and Transitions, Routing, Vuex, Vue-resource for HTTP calls",
    image: "/images/vue_stock_trader.webp",
    tags: ["Vuejs", "Vuex", "Routing in Vuejs"],
    source: "https://vue-stock-trader.vercel.app/",
    visit: "https://github.com/Aadarsh8178/vue-stock-trader",
    id: 3,
  },
  {
    title: "Nodejs UpRuntime  (Fullstack + CLI Tool)",
    description:
      "Web app to sign up a user and create checks to do uptime monitoring for HTTP/HTTPS sites. Self Made Token Authentication logic and self created template logic using vanilla javascript",
    learning: `
      Nodejs , No Npm modules , CLI Tool for admin, Self Created Template logic , Javascript , Bootstrap,
      `,
    image: "/images/upruntime.webp",
    tags: ["Nodejs", "Node Core Modules"],
    visit: "https://github.com/Aadarsh8178/UpRuntime-fileStorage-",
    id: 4,
  },
  {
    title: "Nextjs Looks",
    description:
      "You can add items to favourites and then cart on selecting single item you will see option to buy which will redirect you to actual product link, data will be saved in local storage of browser, the site is incomplete and made for just learning purpose (next js) . No CSS framework is used all styles and transtions are custom css and the design is inspired by existing e-commerce sites (myntra, vegnonveg, H&M)",
    learning:
      "Nextjs , File Structure Routing in Next js, Dynamic routes , Pure CSS, React Context Api, React Hooks",
    image: "/images/nextjs_looks.webp",
    tags: ["Nextjs", "CSS", "React Context Api", "React Hooks"],
    source: "https://bpc-gully-wear.vercel.app/",
    visit: "https://github.com/Aadarsh8178/GullyWear",
    id: 5,
  },
  {
    title: "React Burger Builder",
    description:
      "You can customise your burger from controls given and order it after signing in order will be reflected in orders page",
    learning:
      "React , Class based React components, LifeCycle of React Components, Higher Order function , Error handling, React-Router, Redux , Redux Thunk , Firebase Realtime database, Firebase Authentication",
    image: "/images/react_burger_builder.webp",
    tags: [
      "React",
      "Redux",
      "Redux Thunk",
      "React-Router",
      "Firebase Authentication",
      "Firebase",
    ],
    source: "https://burger-builder-react-2d2be.firebaseapp.com/",
    visit: "https://github.com/Aadarsh8178/React-Burger-Builder",
    id: 6,
  },
  {
    title: "Nodejs Weather App",
    description:
      "You can input your location and it will give you weather report for it, this was the very first project that I build during starting of my programming journey",
    learning:
      "Nodejs, Event loop , Express, HBS templates, Handling Errors, Callback Chaining, Promises, Application deployment , Environment variables",
    image: "/images/weather_app.webp",
    tags: ["Nodejs", "Express"],
    source: "https://bpc-weather-application.herokuapp.com/",
    visit: "https://github.com/Aadarsh8178/nodejs-weather-webserver",
    id: 7,
  },
  {
    title: "Nodejs Task Manager",
    description:
      "a web app which can be used to sign In a user profile and attach tasks and there status",
    learning: `
      include authentication using jwt tokens,
       Worked on mongodb using mongoose added middleware,
       implemented schema,
       Implemented REST API with express,
       learnt postman and setting up environments in postman,
       file upload , validatind file uploads,
       Sending email using sendgrid
      `,
    image: "/images/nodejs.webp",
    tags: [
      "Nodejs",
      "Express",
      "MongoDB",
      "JWT",
      "Mongoose",
      "Postman",
      "Sendgrid",
    ],
    visit: "https://github.com/Aadarsh8178/task-manager-API",
    id: 8,
  },
  {
    title: "Nodejs Chat App",
    description:
      "You can add your display name and create a room or join an existing room to chat with other people in the room ",
    learning: `
      Nodejs , WebSockets, Socket.io
      `,
    image: "/images/chat_app.webp",
    tags: ["Nodejs", "WebSockets", "Socket.io"],
    source: "https://bpc-chat-app.herokuapp.com/",
    visit: "https://github.com/Aadarsh8178/Chat-app",
    id: 9,
  },
  {
    title: "Github Finder",
    description:
      "Vanilla Javascript web app using core js concepts,uses Github API ,auto load data on scroll.",
    learning: `
     Javascript , Bootstrap 
      `,
    image: "/images/github_finder.webp",
    tags: ["Javascript", "Bootstrap"],
    source: "https://bpc-github-finder.herokuapp.com/",
    visit: "https://github.com/Aadarsh8178/Github-Finder",
    id: 10,
  },
];

export const ExperienceTimeLineData = [
  {
    year: "2020",
    duration: "May - Aug",
    text: "Freelance Developer",
    company: "Social Rect",
    tech: ["Reactjs", "Nextjs", "React Hook Form", "Firebase", "Bootstrap"],
  },
  {
    year: "2020",
    duration: "June - Aug",
    text: "Software Engineer Intern",
    company: "Zedblox",
    tech: [
      "Reactjs",
      "React Hook Form",
      "Bootstrap",
      "Material UI",
      "Styled Component",
      "Mapbox",
      "Google Maps",
    ],
  },
  {
    year: "2020",
    duration: "Oct - Jan",
    text: "Jr. Software Engineer ",
    company: "Casa Melhor",
    tech: ["Vuejs", "Bootstrap", "Threejs", "React Three Fiber"],
  },
  {
    year: "2021",
    duration: "Jan - May",
    text: "SDE 1 Intern",
    company: "Exxat Systems",
    tech: ["Angular", "C#", ".NET"],
  },
  {
    year: "2021",
    duration: "June - Aug",
    text: "SDE 1",
    company: "Exxat Systems",
    tech: ["Angular", "C#", ".NET"],
  },
  {
    year: "2021",
    duration: "Sep - *",
    text: "Fullstack Developer",
    company: "Level AI",
    tech: ["React","Redux","Zustand","Styled Components","Antd","Hasura","Cubejs","Nodejs","DRF"]
  }
];

export const EducationTimeLineData = [
  {
    year: "2017",
    duration: "2017 May - 2021 May",
    text: "Computer Engineering",
    institution: "Delhi Technological University",
    marks: "CGPA : 8.07/10",
  },
  {
    year: "2016",
    duration: "2016 March - 2017 March",
    text: "Non Med. Science",
    institution: "Deepanshu Public School",
    marks: "Percentage : 90.8%",
  },
];
export const companies = [
  {
    desc: [
      "Solved more than 200 Work Items including bugs, user stories and tasks",
      "Optimized app by removing template function calls and duplicate code by introducing services",
      "Developed Api on .Net Framework",
    ],
    link: "https://exxat.com/",
    logo: "",
    name: "Exxat Systems",
    time: "Jan 2021 - Current",
    title: "SDE 1",
  },
  {
    desc: [
      "Integrated map services from google and mapbox ,made style component based SVG structure",
      "Worked With React , Redux , Bootstrap , MaterialUI ,Google Maps ,Mapbox ,Styled Component",
    ],
    link: "https://zedblox.com/",
    logo: "",
    name: "Zedblox",
    time: "July 2020 - Aug 2020",
    title: "Software Engineer",
  },
  {
    desc: [
      "Implemented Vuejs app with dynamic page flow controlled from backend.",
      "Utilised Vue-router,axios and made generic components.",
      "Made an iframe based customizable widget",
    ],
    link: "https://www.casamelhor.in",
    logo: "",
    name: "Casa Melhor",
    time: "Oct 2021 - Jan 2021",
    title: "Junior Software Engineer",
  },
];
export const testimonials = [
  {
    desc: "Aadarsh is a very focused and smart person. He has always delivered before timelines. He has a knack for coding. He single handed oh delivered a complex platform.",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b6252.appspot.com/o/1613375161677.jfif?alt=media&token=3d4779f8-79cd-4c80-b392-d2060cf11287",
    linkedin: "https://www.linkedin.com/in/aastha-rajpal-abb06abb/",
    name: "Aastha Rajpal",
    subdesc: "Aastha Rajpal OYO- EMEA | DTU 2017",
  },
  {
    desc: "Adarsh was able to develop a full-stack product from scratch, perfectly as per our client’s requirements. His level of knowledge regarding the complex tech stack that was needed for this project was truly exceptional. Would vouch for him as a skilled and professional software engineer.",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b6252.appspot.com/o/1609671651270.jfif?alt=media&token=5fc26df3-58a5-41e6-a242-73c44126121a",
    linkedin: "https://www.linkedin.com/in/prayagmukhi/",
    name: "Prayag Mukhi",
    subdesc: "Building Products and helping Scale Businesses.",
  },
];
export const work = [
  {
    desc: "Web app to facilitates the purchase or sale of private securities. Full stack apllication with firebase backend",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b6252.appspot.com/o/Screenshot%20(49).png?alt=media&token=f5c62594-fed0-4cf5-ac13-91056c720e6f",
    link: "http://sharesbay.com/",
  },
  {
    desc: "React app with firebase firestore integration",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b6252.appspot.com/o/arisa.jpeg?alt=media&token=527e7893-e6b9-4e1e-ab85-3aae92c19d86",
    link: "https://www.arisa.io",
  },
  {
    desc: "Job Portal with admin panel, email services. Full stack apllication with firebase backend",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b6252.appspot.com/o/Screenshot%20(50).png?alt=media&token=38906db3-ffd6-46fc-bb52-1f47fa267022",
    link: "https://jobs.thewallstreetschool.com/",
  },
  {
    desc: "Next js server side rendered web app",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b6252.appspot.com/o/Screenshot%20(52).png?alt=media&token=0f1d338f-7f78-4aba-be4b-29af9595bb52",
    link: "https://socialrect.com/",
  },
  {
    desc: "Next js server side rendered web app",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b6252.appspot.com/o/maticstarter.jpeg?alt=media&token=26c806dc-269f-4adf-962c-ee04ad691a5b",
    link: "https://hungry-brahmagupta-11929f.netlify.app/",
  },
];

export const articles = [
  {
    title:
      "Uploading and Downloading Multiple Files and Handling CORS error on Firebase",
    img: "/images/react-firebase.webp",
    link: "https://vaadarsh8178.medium.com/uploading-and-downloading-multiple-files-and-handling-cors-error-on-firebase-405779abe543",
  },
  {
    title: "Handling Custom SVGs in React using Styled Components",
    img: "/images/stylecomponents.webp",
    link: "https://vaadarsh8178.medium.com/handling-custom-svgs-in-react-using-styled-components-30d2739ff4cb",
  },
  {
    title: "Optimising API Calls In React",
    img: "/images/react-optimization.webp",
    link: "https://vaadarsh8178.medium.com/optimising-api-calls-in-react-ec55fd9e39f",
  },
];
