const students = [
    {
        name:"Srihari",
        course:"EEE",
        skill:"HTML",
        status:"Learning"
    },
    {
        name:"Loki",
        course:"EEE",
        skill:"CSS",
        status:"Learning"
    },
    {
        name:"Aadhya",
        course:"ECE",
        skill:"DOM",
        status:"Completed"
    },
    {
        name:"Hari",
        course:"FrontEnd",
        skill:"JS",
        status:"Completed"
    }
]


const title = document.getElementById("pageTitle");
const subtitle = document.getElementById("subtitle")

const count = document.getElementById("studentCount")
const container = document.getElementById("profileContainer")

const noticeTitle = document.getElementById("noticeTitle")
const noticeText = document.getElementById("noticeText")

title.textContent = "Welcome to our Student Hub"
subtitle.textContent = "Meet our Learner and explore their skills"

count.textContent = "Total Students are : "+ students.length

students.forEach(function(student){
    const card = document.createElement("div")
    card.className = "profileName"

    const name = document.createElement("h3")
    name.textContent = "Student name : " +student.name

    const course = document.createElement("p")
    course.textContent = "Course : " +student.course

    const skill = document.createElement("span")
    skill.className = "skill"
    skill.textContent = student.skill

    const status = document.createElement("p")
    status.textContent = "Status : "+student.status

    card.appendChild(name)
    card.appendChild(course)
    card.appendChild(skill)
    card.appendChild(status)

    container.appendChild(card)
    
})


noticeTitle.textContent = "Learning Progress"
noticeText.textContent = "Srihari is still learning HTML and CSS"

