const posts = [
     
        {
            username: "Ayomide",
            media: "God.jpg",
            likes: 123_123,
            message:  "lol! Javascript is sweet:)",
            time:"11 HOURS AGO"
        },
        {
            username: "Boluwatife",
            media: "kay (1).jpg",
            likes: 123_768,
            message: "Your satisfaction is our piority:)",
            time:"2 MINUTES AGO",
        },
        {
            username: "Oluwaferanmi",
            media: "ife.jpg",
            likes: 123_765,
            message: "always active:)",
            time:"1 HOUR AGO"
    },
    
    {
        username: "oluwanifemhi",
        media: "love.jpg",
        likes:145_667,
        message: "I Love you Dearly:)",
        time:"2 HOURS AGO"
    },

    {
        username: "Olayinka",
        media: "siwe.png",
        likes: 123_345,
        message: "Sweet Dreams dear:)",
        time:"6 HOURS AGO"
    },
]
let post_container = document.querySelector(".post_container");
window.onload = () => {
    posts.forEach(post => {
        post_container.innerHTML += `
        <div class="post">
        <div class="top">
            <div class="dp">
                <img width="30px" src="./God.jpg">
            <div class="profilname">${post.username}</div>
            </div>
            </div>
            <img width="20px" height="10px" src="./dot.png" >
        </div>
        <img width="250px" src="${post.media}" class="post_image" alt="image">
        
        <div class="reaction">
            <div class="reaction_panel">
                <div class="lcs">
                    <img width="25px" src="./siwe.png">
                    <img width="25px" src="./twitter.png">
                    <img width="25px" src="./comment.png">
                </div>
                <img width="20px" src="./user.png">
                
            </div>
            <div class="likes">${post.likes} likes</div>
            <div class="message"><b>${post.username}</b>${post.message}</div>
            <div class="time">${post.time}</div>
            </div>
            <div class="comment">
                <img width="20px" src="./comment.png">
                <input type="text" id="comment_text" placeholder="Add a comment">
                <button class="post_button">Post</button>
            </div>
        </div>
    </div>
`
    })
}
