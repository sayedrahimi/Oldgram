const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const sectionEl = document.getElementById('section')
let itmes = ''

for(let i = 0; i < posts.length; i++){
    
    itmes += `<div class="avatar">
                    <img src="${posts[i].avatar}" class="small-image">
                    <div>
                        <h3>${posts[i].name}</h3>
                        <p>${posts[i].location}</p>
                    </div>
                </div>
                <img src="${posts[i].post}" class="post">
                <div class="reaction">
                    <img src="images/icon-heart.png" class="small-image " id="first-child">
                    <img src="images/icon-comment.png" class="small-image">
                    <img src="images/icon-dm.png" class="small-image">
                </div>
                <div class="container">
                    <h4>${posts[i].likes}</h4>
                    <p><span class="bold">${posts[i].username}</span>${posts[i].comment}</p>
                </div>`
}
sectionEl.innerHTML = itmes

