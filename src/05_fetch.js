/**
 * Yo, let's practice our API knowledge.
 */

const NicosRepositories = `https://api.github.com/users/minimumviableperson/repos`;

// 1. This ^ is an endpoint that returns Nico's github repositories.
// Write a function called `getNamesOfNicosRepos`. It should:
//  - fetch data from the NicosRepositories endpoint.
//  - only keep the .name property of each repository.
//  - return all Nico's repo names as an array of strings.

async function getNamesOfNicosRepos() {
    let NicoRepoNamesArr = []
    const response = await fetch('http://api.github.com/users/minimumviableperson/repos');
    const repos = await response.json();
    NicoRepoNamesArr = repos.map(repo => repo.name);
    return NicoRepoNamesArr
}

console.log(getNamesOfNicosRepos())
// 2. Create a JSON server. Add a /posts endpoint to it, which returns a list of posts.
// A post is: {
//   id: number,
//   title: string,
//   text: string
// }
// 2.1 Write a function called createPost that:
// - takes a post as an argument
// - save your post in the JSON server
// - console.log the newly created post from the response (it must contain the new post's id);
async function createPost(post) {
    const {id, title, text} = post
    const response = await fetch('http://localhost:3000/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
            title: title,
            text: text
        })
    });
    const newPost = await response.json();
    return console.log(newPost);
}

// createPost({
//     "id": 4,
//     "title": "post4",
//     "text": "text-4"
//   })
