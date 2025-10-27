#  Geo Detectives
Geo Detectives is a child-friendly geography quiz where players test their world knowledge by answering timed questions about countries, capitals, and landmarks.  
Built with HTML, CSS, and JavaScript, the project uses the Open Trivia Database API to generate fun, educational challenges for children aged 7–12.

![Geo Detectives](docs/responsive-geo.png)

## Rationale
Geo Detectives was created to make geography learning interactive and exciting for children.  
It extends the ideas of my previous project, Bond, by combining creativity, curiosity, and education through gameplay.

## User Goals
- Children want fun and challenging questions that can challenge their knowledge about geography subject.
- Teachers want a tool that’s easy and fun to use in classrooms which create competition within the classroom students by saving palyers scores.
- Clear instructions written in plain English.
- Relevant questions in the quiz.
- To have the chance to share feedback or suggestions about the game experience.
- To experience a fair and transparent scoring system that reflects performance accurately.


  ## User Stories
| User | User Story | Task |
|----|-------------|-----------------------------|
| As a child/student| I want to play quiz with timer & levels to chalange my knowledge about geography subject| Start, choose level, timed question rotation |
| As a parent/teacher/ student | I want to be able to easily contact content creators for feedback or changes. |  Feedback form |
| As a user | I want the score system to be transparent| Display the total score at the end of the game |
| As a user| I want the game to be tempting me to play again and get a better score | End-of-quiz badges and button asking me to play again to get a better score|
| As a user | I want the instructions to be clear, concise and easily accessible| Help and instructions button |
| As a user | I want to receive immediate feedback on my quiz answers| Display a message at the end of the quiz to tell user how they did and encourge them to try again| 

## Targeted Audience
School children (Primary and secondary) who are developing their understanding of continents, countries, and landmarks in an engaging format.
Teachers  looking for a quick, classroom-ready geography quiz that encourages curiosity and teamwork.
Casual learners or quiz enthusiasts who enjoy testing their general knowledge about the world through timed challenges.

## Wirefrmes
Before starting the development of Geo Detectives, I created detailed wireframes using [Balsamiq Wireframes](https://balsamiq.com/) to plan the structure and layout of the website.
These visual mockups helped me organise each section — from the home screen and quiz layout to the results and feedback screens — ensuring a simple and child-friendly experience across all devices.

![Phone Wireframe](docs/phone-wireframe.pdf)<br>
![Ipad Wireframe](docs/ipad-wireframe.pdf)<br>
![Desktop Wireframe](docs/desktop-wireframe.pdf).<br>

## Design Choices
### Typography

To keep the design fun yet readable for children, I used [Google font](https://fonts.google.com/selection) and I selected two Google Fonts that balance playfulness and clarity:
 - Gloria Hallelujah (used for headings and quiz titles).
This handwritten font adds a creative, adventurous tone that feels inviting to younger users. It captures the personality of a child’s travel notebook or explorer’s journal, which fits the Geo Detectives theme.

- Poppins (used for body text, buttons, and feedback messages).
A clean, modern sans-serif that ensures easy readability across devices and screen sizes. Its round, friendly letter shapes make it visually compatible with Gloria Hallelujah.

### Colour Palette

The Geo Detectives colour scheme is inspired by map background image, I used [Coloors Image Picker](https://coolors.co/image-picker). This tool helped me combines warm earthy tones with bright highlights to create a balanced, child-friendly interface.
![Color Scheme](docs/palette.png)

I have also used [Contrast Grid](https://contrastgrid.com/?xAxisData=%255B%257B%2522color%2522%253A%2522%252334190D%2522%257D%252C%257B%2522color%2522%253A%2522%2523D6CDB9%2522%257D%252C%257B%2522color%2522%253A%2522%2523C5B29A%2522%257D%252C%257B%2522color%2522%253A%2522%2523B4977A%2522%257D%252C%257B%2522color%2522%253A%2522%2523BEB0A8%2522%257D%252C%257B%2522color%2522%253A%2522%2523604A3A%2522%257D%255D) to get inspiration for possible colour combination to make the website visually appealing.


![Contrast Grid](docs/contrast-grid-color.png)

| CSS Name                 | HEX       | Comment                                                                       |
| ------------------------ | --------- | ----------------------------------------------------------------------------- |
|     --deep-earth-brown   |  #34190D  | headings and font colour.                                                     |
|     --sand-beige         |#D6CDB9    |  quiz box background.                                                         |
|     --warm-taupe         | #C5B29A   | secondary background color                                                    |
|     --desert-clay        | #B4977A   |buttons and highlights                                                         |
|     --walnut-brown       | #604A3A   | footer background and subheading font colour                                  |
|    --pale-stone          | #BEB0A8   | body background / borders colour                                              |
| Other Colors CSS Hex     |           |                                                                               |
|     --wrong-answer-red   | #ff3333   | Color for wrong answer button                                                 |
|     --right-answer-green | #51BF83   | Color for correct answer button, color for check icon                         |

### Images

I downloaded the Background image from [FREEPIK](https://www.freepik.com/). It is a vintage-style world map used as the website’s background to reflect the theme of exploration and geography. 

### Responsiveness

My website is responsive to different layouts depending on the size of the viewport have been included in the CSS media queries. This allows visitors to experience the website as I intended on device types and screen sizes. The breakpoints I am using are from Bootstrap.

![Breakpoints](docs/break-in-point.png)


## Features

Layout is easy to use and adheres to the best practices in formatting and styling. Players can easily navigate between questions and access additional features such as high scores and contact information.
With a countdown timer, multiple-choice questions and real-time feedback on right and wrong responses, the quiz offers users an engaging experience. This interactive feature increases user engagement and motivates users to take knowledge tests.

### Existing Features


### Future Enhancements

* Multiple player option.
* Online scoreboard that includes all players.
* Share results on Social Media. 
* Option to store the progress and return to the quiz at a later time, allowing to finish it at user's pace and not lose any of the questions already completed.
* Broaden range of animation topics such as principles of animation, software tools, and industry best practices.
* Provide hints or additional resources for challenging questions.
* Time-adjustable quiz where player can select a time limit for each question, all questions or have no limitless time to complete.

[Back to top](#contents)

## Technologies Used

### Languages
- [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML5 "HTML")
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "CSS")
- [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript "JS")

### Libraries & Framework

- [Google Fonts](https://fonts.google.com/ "Google Fonts")
- [Favicon](https://favicon.io/ "Favicon")


### Tools

* [GitHub](https://github.com/ "GitHub")
* [Balsamiq](https://balsamiq.com/wireframes/ "Balsamiq")
* [Image Resize](https://squoosh.app/)
* [Color Contrast](https://contrastgrid.com/)
* [Open Trivia DB](https://opentdb.com/ "Open Trivia DB")
- [Colour Palette](https://coolors.co/)


## Testing





## Deployment

Geo detectives was deployed early in the process to GitHub pages via the following steps:

- Navigate to the repository on GitHub and click on Settings.
- In the side navigation and select Pages.
- In the None dropdown and choose Main.
- Click on the Save button.
- The website is now live at https://sunrise-rab.github.io/geo-detectives/index.html.

Any changes required to the website, they can be made, committed and pushed to GitHub.

### Fork the project
Forking the GitHub repository allows you to create a duplicate of a local repository. This is done so that modifications to the copy can be performed without compromising the original repository.

- Log in to GitHub.
- Locate the repository.
- Click to open it.
- The fork button is located on the right side of the repository menu.
- To copy the repository to your GitHub account, click the button.
  Now you have your own version you can commit, edit, and even make pull requests to the original project.
  
  ### To clone the project
- Log in to GitHub.
- Navigate to the main page of the repository and click Code.
- Copy the URL for the repository.
- Open your local terminal or VS Code.
- Change the current working directory to the location where you want the cloned directory.
- Type git clone, and then paste the URL you copied earlier.
- Press Enter to create your local clone.

## Credits





















  




