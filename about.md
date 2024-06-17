---
layout: page
title: About
subtitle: Why I breathe oxygen?
permalink: /about/
---

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

body {
  background-color: $dorian;
  font-family: Inconsolata, sans-serif;
}

.main-content{
    font-weight: bold;
    font-size: large;
}
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: black;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 31px;
  }
  
  /* Full-width containers */
  .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .container::before {
  left: 60px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 15px;
  }
  
  /* Make all right containers behave like the left ones */
  .right {
  left: 0%;
  }
}
</style>
</head>
<body>
 <img src="https://raw.githubusercontent.com/kaushal07wick/portfolio/gh-pages/assets/images/op_1.svg" alt="me" width="300" height="400">

  <div class="base-content">
    <div class="main-content">
        <h2>🫵Hi there!</h2>
        I am a Software Engineer with a passion for Machine Learning and Robotics. 
        I learn low level stuff and make some projects too.
        Below are my past experiences😊
 </div>
</div>
<br>
<br>
<br>
<br>
<div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>TurboML : Mar, 2024</h2>    
      <h4>Technical Writer</h4>  
      <p><strong>Beta tester</strong>: Identified bugs, exceptions, and tested examples for framework. Coordinated roadmap planning and documentation structure.
      • <strong>API Documentation</strong> to cover 25+ streaming algorithms and 10+ Tutorials notebooks, bridging the gap between technical and non-technical audiences.</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>LanceDB (YC W22) : Jan, 2024</h2>
      <h4>ML Consultant</h4>
      <p>Increased <a href="https://lancedb.com/">LanceDB</a> popularity and usage by 60% through engaging Colab notebooks, <a href="https://medium.com/@kaushalc64">Medium</a> blogs, and thorough audits.
      • Collaborated on integration projects to elevate LanceDB’s technological capabilities.</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>FISClouds : Nov, 2024</h2>
      <h4>ML Engineer</h4>
      <p>Designed <strong>Recommender Systems</strong> for movie theaters, utilizing <strong>Neural Collaborative Filtering</strong> and historical data stored on GCP.
    • Led cross-functional team to transition ML infrastructure to <strong>Google’s Vertex</strong> platform, enhancing data storage and management processes.</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>Grene Robotics : Mar, 2023</h2>
      <h4>Software Engineer</h4>
      <p>Developed system software for <strong>Autonomous Drone</strong> and configure it based on the business viewpoint.
      • Designed and implemented an advanced system for object detection, obstacle avoidance, and navigation, enabling drones to fly at speeds up to <strong>90 km/h</strong> with precision and safety.</p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
    <div class="content">
      <h2>RRC, IIIT Hyderabad : Jun, 2023</h2>
      <h4>Research Intern</h4>
      <p>Worked with <a href="https://www.iiit.ac.in/people/faculty/Harikumar/">Harikumar Kandath</a> Developing Novel <strong>Decision Neural Networks</strong> for safe landing of autonomous drones in urban cluttered environments.</p>
    </div>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>AI LAB - UNIVERSITY OF HYDERABAD : Aug, 2022</h2>
      <h4>IASC-INSA-NASI Summer Researrch Fellow</h4>
      <p>Worked under <a href="https://scis.uohyd.ac.in/People/profile/an_profile.php">Dr. Atul Negi</a> on Multilingual Scene-Text Recognition systems. • Experimented with various STRs and wrote a <a href="https://drive.google.com/file/d/12KXMY9y_2D7Ws6j6vP4KBHV1QrJhfZNN/view">Survey Paper</a> on the same</p>
    </div>
  </div>
</div>
  <div class="container left">
    <div class="content">
      <h2>Technocolabs Softwares : Jun, 2022</h2>
      <h4>Data Analyst Intern</h4>
      <p>Led the team in designing and implementing <strong>ETL Pipelines</strong>, tracking milestones for successful project deployment.
      • Managed engineering teams with efficiency and precision, fostering a culture of continuous improvement</p>
    </div>
  </div>
  <style>
    .align-content {
        text-align: left; /* Change to 'center' or 'right' as needed */
    }
</style>


</body>
</html>

