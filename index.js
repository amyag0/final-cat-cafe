fetch('http://localhost:3000/arrayOfCats')
.then(response=>response.json())
.then(function(arrayOfCats){
    
arrayOfCats.forEach ( function (firstCatInArray){
    const catCollection = document.querySelector('#cat-collection');
        const catCard = document.createElement('div');
            catCard.className = "card";
            catCard.id = `${firstCatInArray.id}`;
        
        //~~stuff in each card~~
        const catName = document.createElement('h2');
        catName.className = "cat-card-stuff";
        catName.textContent =`${firstCatInArray.name}`;
        const catImg = document.createElement('img');
        catImg.className = "cat-card-stuff";
        catImg.src = `${firstCatInArray.image}`
        const catLikeSection = document.createElement('div');
        catLikeSection.className = "cat-card-stuff";
        const catLikes = document.createElement('span');
        catLikes.className="likes";
        catLikes.textContent = `${firstCatInArray.likes}`+ " likes ";
        const likeButton = document.createElement('button');
        likeButton.className="like-button";
        likeButton.id=`${firstCatInArray.id}`;
        likeButton.textContent="🐾 ";
        likeButton.addEventListener("click", function(){
            `${firstCatInArray.likes++}`;
            catLikes.textContent=`${firstCatInArray.likes} Likes `
        })
        const catBreed = document.createElement('span');
        catBreed.className= "cat-card-stuff";
        catBreed.textContent= "Breed: "+`${firstCatInArray.breed}`;
            //------------------>ADDDING MOUSEOVER EVENT
            catCard.onmouseenter = function( event ) {
                let target = event.target;
                target.className= "card-hover";
                let thisCatName=`#${firstCatInArray.name}`;
                const actualCat = document.querySelector(thisCatName);
                actualCat.style.background="#a4caec";
            }
            catCard.onmouseleave= function(event){
                let target = event.target;
                target.className= "card";
                let thisCatName=`#${firstCatInArray.name}`;
                const actualCat = document.querySelector(thisCatName);
                actualCat.style.background= "";
            }
        catCard.append(catName, catImg, catLikeSection, catBreed);
        catLikeSection.append(catLikes, likeButton);
        catCollection.append(catCard);
    })
})
//--------------------->Array For Cat Comments
fetch('https://cataas.com/api/cats?tags=cute')
.then(response=>response.json())
.then(function(catCommentArray){
    const catComments = catCommentArray.slice(0,3)
    catComments.forEach(function(tagObject){
        const catCommentSection = document.querySelector('#comments-on-cafe')
        const catCommentList = document.createElement('li')
        catCommentList.textContent = tagObject.tags
        catCommentSection.append(catCommentList)
    })
        //adding comments to the comment form
    const commentForm = document.querySelector('#comment-form');
    commentForm.addEventListener("submit", function(eventObject){
        eventObject.preventDefault()
        const commentSection = document.querySelector('#comments-on-cafe')
        const inputField = document.querySelector("#comment");
            const newComment = document.createElement("li");
            newComment.textContent = inputField.value;
            commentSection.append(newComment)
    })
})
// fetch('http://localhost:3000/arrayOfCats')
// .then(response=>response.json())
// .then(function(arrayOfCats){
//     console.log(arrayOfCats)

//     const firstCatInArray = arrayOfCats[0];
//     const catCollection = document.querySelector('#cat-collection');

//     function renderEachCatIntoCollection(firstCatInArray){

//         const catCard = document.createElement('div');
//             catCard.className = "card";
//             catCard.id = `${firstCatInArray.id}`;
        
//         //~~stuff in each card~~
//         const catName = document.createElement('h2');
//         catName.className = "cat-card-stuff";
//         catName.textContent =`${firstCatInArray.name}`;
//         catCard.append(catName);

//         const catImg = document.createElement('img');
//         catImg.className = "cat-card-stuff";
//         catImg.src = `${firstCatInArray.image}`
//         catCard.append(catImg);

//         const catLikeSection = document.createElement('div');
//         catLikeSection.className = "cat-card-stuff";

//         const catLikes = document.createElement('span');
//         catLikes.className="likes";
//         catLikes.textContent = `${firstCatInArray.likes}`+ " likes ";
//         catLikeSection.append(catLikes);

//         const likeButton = document.createElement('button');
//         likeButton.className="like-button";
//         likeButton.id=`${firstCatInArray.id}`;
//         likeButton.textContent=" 🐾 ";
//         catLikeSection.append(likeButton);

//         likeButton.addEventListener("click", function(){
//             `${firstCatInArray.likes++}`;
//             catLikes.textContent=`${firstCatInArray.likes} Likes `
//         })
//         catCard.append(catLikeSection);

//         const catBreed = document.createElement('span');
//         catBreed.className= "cat-card-stuff";
//         catBreed.textContent= "Breed: "+`${firstCatInArray.breed}`;

//             //------------------>ADDDING MOUSEOVER EVENT 
//             catCard.onmouseenter = function( event ) {
//                 let target = event.target;
//                 target.className= "card-hover";
//                 console.log("ping:)")//hover works
                
//                 let thisCatName=`#${firstCatInArray.name}`;
//                 console.log(thisCatName);//

//                 const actualCat = document.querySelector(thisCatName);
//                 console.log(actualCat);

//                 actualCat.style.background="#ccefff";
            
//             }

//             catCard.onmouseleave= function(event){
//                 let target = event.target;
//                 target.className= "card";
//                 console.log("gone!")//hover works
                
//                 let thisCatName=`#${firstCatInArray.name}`;
//                 console.log(thisCatName);//

//                 const actualCat = document.querySelector(thisCatName);
//                 console.log(actualCat);

//                 actualCat.style.background= "";
//             }
        

//         catCard.append(catBreed);

//         catCollection.append(catCard);


//     }
//         console.log(arrayOfCats.forEach(renderEachCatIntoCollection));
//         console.log(catCollection);

    
// })

// //--------------------->Array For Cat Comments 
// fetch('https://cataas.com/api/cats?tags=cute')
// .then(response=>response.json())
// .then(function(catCommentArray){

//     const catComments = catCommentArray.slice(0,3)  //only getting 3 comments from the whole array and putting them into a new array
//     console.log(catComments)

//     //creating these elements for EACH element in the new array 
//     catComments.forEach(function(tagObject){
//         const catCommentSection = document.querySelector('#comments-on-cafe')
        
//         const catCommentList = document.createElement('li')
//         catCommentList.textContent = tagObject.tags
        
//         console.log(catCommentList)

//         catCommentSection.append(catCommentList)
//     })
        
//     //adding comments to the comment form   
//     const commentForm = document.querySelector('#comment-form');
//     commentForm.addEventListener("submit", function(eventObject){

//         eventObject.preventDefault()
        
//         const commentSection = document.querySelector('#comments-on-cafe')
//         const inputField = document.querySelector("#comment"); 
            
//             const newComment = document.createElement("li");               
//             newComment.textContent = inputField.value;
            
//             commentSection.append(newComment)
//     })
// })
    























