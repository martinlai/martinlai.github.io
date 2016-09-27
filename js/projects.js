var projects = {
  cubeworld:{
    dispname: "CubeWorld",
    video:"cubeworld.mp4",
    desc:`CubeWorld is a demo built with C++, core OpenGL, and GLSL. I started with the utility classes to initialize and read in shader files. I also needed to program the Camera class to allow the user to
    look around freely by applying linear algebra concepts such as quaternion rotation. I have always been a fan of large worlds - and I wanted the user to experience that sense of scale by being in a field
    of rotating cubes. The demo is available to try for Windows Users (Mac port is incoming), just follow the github link below.`,
    improvements:"I hope to eventually implement more efficient rendering techniques to increase the performance of the application, especially on older machines, and to make a mac-runnable version.",
    technologies:"C++, OpenGL, GLSL, Visual Studio",
    github: "https://github.com/martinlai/CubeWorld"
  },
  resohm:{
    dispname: "ResOhm",
    video:"resohm.mp4",
    desc:`ResOhm is a project I programmed over a weekend, when I wanted a desktop application with a simple user interface for converting resistor colour codes. I wanted to solidify my knowledge of Object Oriented
    Programming, so I made use of design patterns such as the Factory Pattern and used a Dictionary to optimally store my resistor codes and values.`,
    improvements:"Currently the application supports converting from Colours to Resistances - the reverse case, from a resistance to a colour pattern, would be a useful feature to have.",
    technologies:"C#, Visual Studio, Windows Presentation Foundation",
    github: "https://github.com/martinlai/ResOhm"
  },
  libero:{
    dispname: "Libero",
    video:"libero.mp4",
    desc:`Libero is a social fitness android application that my team made during the WearHacks 2016 hackathon. It allows multiple nearby users to compete in real-time, for example counting
    the number of push-ups done in a minute. To track the movement our application interfaced with the Myo Armband, and we had to program a low-pass filter and state machine to accurately identify
    repetitions during exercises.`,
    improvements:`The scale of the application could be expanded to let people from multiple countries to compete in real time, which would require accounting for latency due to distance.
    One of our team members was able to acquire $2000 in funding from Duke University for help in developing our application`,
    technologies:"Java, Android Studio, Myo Armband",
    github: "https://github.com/riehseun/Libero"
  },
  trendify:{
    dispname: "Trendify",
    video:"trendify.mp4",
    desc:`Trendify is a web application made during the AngelHacks Toronto hackathon, which aggregates data queried from several social media sources into a single dashboard, and gives a report
    of the relative number of positive or negative sentiments associated with a keyword query. I primarily worked on the backend server code as well as the Twitter and New York Times API integrations for the application.
    Try it out yourself at http://trendify1.herokuapp.com/`,
    improvements:"While we have the NYT API code, we have not yet integrated it into our application. Other media sources such as Instagram can be queried for sentiment in the future.",
    technologies:"NodeJS, AngularJS, Javascript, HTML, CSS",
    github: "https://github.com/GitSaad/Trendify"
  },
  map:{
    dispname: "LiveAtlas",
    video:"map.mp4",
    desc:`LiveAtlas is a web application made during the NASA SpaceApps Waterloo hackathon, which makes use of the MapBox API and NASA historical climate data to show the weather data for the past two years of
    any location on Earth. Try it out yourself at http://earthwatch.me/.`,
    improvements:"Weather data from more than two years in the past can be aggregated, and more developed functionality for comparing climates in multiple areas can be implemented.",
    technologies:"loltechnologies",
    github: "https://github.com/martinlai/LiveAtlas"
  },
  plant:{
    dispname: "Talk2Plants",
    video:"plant.mp4",
    desc:`Talk2Plants is a embedded hardware/Internet of Things application developed at the Cisco DevNet 2016 hackathon. It won first place in the hackathon as a cost-effective system that allowed
    users to monitor several environment variables such as Temperature, Humidity, and Light levels of a plant remotely by dialing into our automated voice application. The plant system we used to demo has since been
    decomissioned, but you try the app yourself by calling 1-581-222-9849 which will provide the last known environment values.`,
    improvements:"A user dashboard can be created to complement the automated phone application, and alerts can be configured to automatically be sent out via Slack, e-mail or another messaging application when threshold values are surpassed.",
    technologies:"ESP8266 Microcontroller, PHP, Python, Tropo, Firebase",
    github: "https://github.com/m47jiang/T2P"
  }
}
