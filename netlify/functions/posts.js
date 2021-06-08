// Goal: Provide a function to return all posts and their details from Firebase.

// allows us to use firebase
let firebase = require(`./firebase`)

// /.netlify/functions/posts
exports.handler = async function(event) {
  // define an empty Array to hold the return value from our lambda
  let returnValue = []

  // establish a connection to firebase in memory
  let db = firebase.firestore()

  // perform a query against firestore for all posts, wait for it to return, store in memory
  let postsQuery = await db.collection(`posts`).orderBy(`created`, `desc`).get()

  // retrieve the documents from the query
  let posts = postsQuery.docs

  // loop through the post documents
  for (let postIndex=0; postIndex < posts.length; postIndex++) {
    // get the id from the document
    let postId = posts[postIndex].id

    // get the data from the document
    let postData = posts[postIndex].data()

    // create an Object to be added to the return value of our lambda
    let postObject = {
      id: postId,
      item: postData.item,
      userName: postData.userName,
      imageUrl: postData.imageUrl,
      originalPrice: postData.originalPrice,
      sellingPrice: postData.sellingPrice,
      desc: postData.desc
    }

    // add the Object to the return value
    returnValue.push(postObject)
  }

  // return value of our lambda
  return {
    statusCode: 200,
    body: JSON.stringify(returnValue)
  }
}