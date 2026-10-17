const API_URL = "https://jsonplaceholder.typicode.com/users"

//Selecting Elements
const title = document.getElementById("pageTitle")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")

const loadBtn = document.getElementById("loadBtn")
const status = document.getElementById("status")

const profileCount = document.getElementById("profileCount")
const profileContainer = document.getElementById("profileContainer")



//Store API data 

let allUsers = [];

//Change the Heading
title.textContent = "Explore User Profile"

//Fetch the Data from Api

async function loadProfile(){


    status.textContent = "Loading Profiles..."
    loadBtn.disabled = true


    try{
        const response = await fetch(API_URL)
        if(!response.ok){
            throw new Error("Unable to Load Profile")
        }
        
        const users = await response.json()
        allUsers = users
        status.textContent = "Profile Loaded"
        profileCount.textContent = "Proifles Displayed : "+users.length

    }
    catch(error){
        const message = document.createElement("p")
        message.className = "empty-message"
        message.textContent = "Couldn't load Profiles. Check your internet and try again"


        profileCount.textContent = "Profile Displayed : 0"
        status.textContent = "Unable to Fetch Data"
        console.log(error);
        
    }finally{
        loadBtn.disabled = false
    }
}

