// Edit this file to update the whole site.
window.CONTENT = {
  name: "Thi Nhu Y Ho",
  title: "Data Science & Linguistics",
  photo: "assets/profile.jpeg",
  bio: "UC Berkeley graduate in Data Science and Linguistics, looking for data analyst roles in any field. I turn messy data into clear answers using Python and SQL, and I'm fluent in English and Vietnamese and studying Chinese (HSK 4), so I understand people and text across cultures. I care most about explaining results so anyone can use them, not just technical readers.",
  skills: [
    { group: "Programming", items: ["Python", "SQL"] },
    { group: "Analysis & Modeling", items: ["Data cleaning", "Regression", "Survival analysis", "Machine learning (scikit-learn)", "Geospatial analysis (GeoPandas)", "Dashboards"] },
    { group: "Databases", items: ["PostgreSQL", "Supabase", "DuckDB"] },
    { group: "Tools", items: ["Excel", "Power BI", "Tableau", "PowerPoint", "Git", "VS Code"] },
    { group: "Languages", items: ["English (fluent)", "Vietnamese (fluent)", "Chinese (HSK 4)", "Linguistics across multiple languages"] }
  ],
  links: {
    github: "https://github.com/yho02",
    linkedin: "https://www.linkedin.com/in/thi-nhu-y-ho-3b736525a/",
    email: "yhotn2003@gmail.com",
    resume: "assets/resume.pdf"
  },
  projects: [
    {
      title: "Language Access and City Service in Los Angeles",
      date: "2026",
      description: "Joined 4.1 million LA 311 service requests (2022-2024) to Census data for 1,091 tracts to test whether neighborhoods with many limited-English households get slower or less city service. They don't: resolution time was the same (about 1% faster per +10 points of limited-English share) and those tracts filed more requests per household, not fewer. The one real difference is how residents report, with more use of the mobile app and less phone.",
      tags: ["Python", "SQL", "DuckDB", "Survival Analysis", "Negative Binomial Regression", "GeoPandas", "Power BI"],
      image: "assets/la311-dashboard.png",
      links: [{ label: "GitHub", url: "https://github.com/yho02/la311-language-access" }]
    },
    {
      title: "San Francisco Airbnb Price Prediction",
      date: "2025",
      description: "Predicted nightly prices for 7,026 San Francisco listings across four Inside Airbnb snapshots, splitting train and test by host to avoid data leakage (a random split inflated R² from 0.76 to 0.91). Gradient Boosting scored best at R² 0.78 with 19% typical error, and listing size and property type were the biggest price drivers.",
      tags: ["Python", "Jupyter", "Scikit-learn", "Random Forest", "Gradient Boosting", "Feature Engineering"],
      image: "assets/airbnb-price-drivers.png",
      links: [{ label: "GitHub", url: "https://github.com/yho02/san-francisco-airbnb-price-prediction" }]
    },
    {
      title: "Do the Two Parties Talk Differently? Congressional Speech Analysis",
      date: "2025",
      description: "Compared 367 House floor speeches to see whether Democrats and Republicans frame the same issues in different words. Republicans spent more time on immigration (27% vs 17%) and Democrats on energy (16% vs 10%), and the two parties described taxes and energy with distinctly different language.",
      tags: ["Python", "NLP", "Topic Modeling", "Word2Vec", "scikit-learn", "gensim"],
      image: "assets/congressional-partisan-words.png",
      links: [{ label: "GitHub", url: "https://github.com/yho02/congressional-speech-nlp" }]
    },
    {
      title: "汉字 Shooter: Chinese Vocabulary Typing Game",
      date: "2026",
      description: "Built a browser game for practicing Chinese vocabulary, where words fall from the sky and you type the pinyin or hanzi before they land. It covers HSK 1-9 word lists and custom vocabulary, with three difficulty levels, a lives system, and a review of missed words.",
      tags: ["JavaScript", "React", "Vite", "GitHub Pages"],
      image: "assets/hanzi-shooter.jpg",
      links: [
        { label: "GitHub", url: "https://github.com/yho02/hanzi-shooter" },
        { label: "Live demo", url: "https://yho02.github.io/hanzi-shooter/" }
      ]
    },
  ],
  experience: [
    {
      role: "B.A. in Data Science and B.A. in Linguistics (double major)",
      org: "University of California, Berkeley",
      dates: "Graduated Dec 2025",
      bullets: [
        "Data: Principles & Techniques of Data Science, Probability for Data Science, Econometrics, Intro to Machine Learning & Data Analytics, Ethics of Data, Data Structures",
        "Language: Natural Language Processing, Syntax, Sociolinguistics, Language & Gender, Language Revitalization"
      ]
    }
  ]
};
