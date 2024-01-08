import ninesLogo from '../images/Nines-logo.png'
import rrLogo from '../images/RR5.png'
import etLogo from '../images/Eat-this.png'
import heartLogo from '../images/heart_img.png'


export const projects = [
    {
        name: "Heart Failure Predictive Modeling",
        description: "Executed data preprocessing and exploratory analysis on a heart disease-related dataset, extracting insights to enhance comprehension and optimize data scaling techniques. Selected key features for model building using ANOVA and Chi-Squared tests, and scaled data for modeling depending on the requirements of the model and distribution of the features. Implemented diverse machine learning algorithms for heart disease prediction (Logistic Regression, KNN, SVM, NBC, Neural Network, Decision Tree, Random Forest), rigorously evaluating each using key metrics, confusion matrices, and AUC-ROC graphs to accurately gauge each model’s effectiveness.",
        demoLink: "http://demo1.com",
        codeLink: "https://www.kaggle.com/code/matteomastandrea/heart-failure-classification",
        imageUrl: heartLogo
      },
    {
      name: "Reel Radar",
      description: "Reel Radar: A Django Web App for Personalized Movie Recommendations. Because of my love of film my friends are always asking me for movie recommendations, so I figured why not automate the task. Reel Radar offers a simple yet effective way to discover movies. Powered by Django, it uses an algorithm based on a cosine similarity matrix, drawing from a diverse database of 30,000 movies. Users can input their favorite films, and Reel Radar provides the top 5 recommendations that closely match in terms of director and genre. It's a straightforward, user-friendly tool for anyone looking to explore movies that align with their taste.",
      demoLink: "http://demo1.com",
      codeLink: "https://github.com/matteo353/Reel-Radar",
      imageUrl: rrLogo
    },
    {
        name: "Eat This!",
        description: "Eat This!: A Streamlined Dining Locator for UMass Students - Developed as a collaborative project in our software engineering class, Eat This! is a web application designed to enhance the dining experience of UMass students. Utilizing Node and React, this application adeptly guides users to the optimal dining location based on their current location. The genesis of Eat This! was motivated by a desire to improve upon the existing UMass dining website, which had been prone to glitches. Our team focused on creating an intuitive, user-friendly interface that simplifies the process of finding the best dining options available on campus.",
        demoLink: "http://demo1.com",
        codeLink: "https://github.com/matteo353/EatThis",
        imageUrl: etLogo
      },
    {
        name: "Nines",
        description: "Nines: A Tailored iOS Scoring App for Golf - Nines is an iOS application, crafted using Swift, specifically designed to assist myself and my friends in tracking scores for our preferred variation of golf, aptly named 'Nines.' The app is centered around the unique scoring rules of the game, ensuring accuracy and ease of use during gameplay. Additionally, it features a traditional golf scorecard, catering to conventional golf games as well. Nines is a bespoke solution that allows us to fully engage in our golf games, entrusting the scoring responsibilities to our iPhones. It may never have a user base larger than 3, but that's quite alright with us.",
        demoLink: "http://demo1.com",
        codeLink: "https://github.com/matteo353/Nines-App",
        imageUrl: ninesLogo
      }
  ];

export const timelineElements = [
    {
        id:1,
        title: "UMass Amherst",
        description: "Received a B.S. in computer science and a minor in business with a 3.5 GPA. Extracurricular activities included intramural sports, data science club, and software engineering research.",
        date: "September 2019 - May 2023",
        location: "Amherst, MA",
        buttonText: "view work",
        icon: "school"
    },
    {
        id:2,
        title: "Business Intelligence Engineer Intern",
        description: "Split time between the business intelligence team and the database team. With the business intelligence team, built tableau dashboards visualizing current performance metrics and projecting future trends. While working with the database team, helped manage and optimize an onsite SQL database, update ETL processes, along with aiding in the process of company wide migration to AWS Redshift.",
        date: "July 2022 - August 2022",
        location: "Pet Food Experts",
        buttonText: "view work",
        icon: "work"
    },
    {
        id:3,
        title: "Undergraduate Research Assistant",
        description: "Assisted research team in examining how data visualization impacts the assimilation of information across different mediums. Supported PhD students with pertinent articles and information related to the topic of visual design affects and perceived bias in machine learning models. Explored the efficacy of design layouts and visual elements in enhancing user comprehension of complex data.",
        date: "September 2022 - April 2023",
        location: "UMass Amherst",
        buttonText: "view work",
        icon: "school"
    },
    {
        id:4,
        title: "Industry Research and Data Analytics Intern",
        description: "Took part in a remote internship during my spring semester. Conducted in depth research on green energy firms leveraging artificial intelligence to achieve their operational objectives. Crafted interactive data visualizations using plotly to supplement presentations on the leading start ups in this sector. Placed top 3 in final presentations among all interns",
        date: "February 2023 - May 2023",
        buttonText: "view work",
        location: 'Energy Innovation Capital',
        icon: "work"
    }
]

