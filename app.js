const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/users/:userId/posts', async (req, res) => {
    try {
        const userId = req.params.userId;
        const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        if (posts.data.length === 0) {
            return res.status(404).send('There are no posts for the requested user');
        } // Return code 404 if no posts are found

        const postsAndComents = await Promise.all( posts.data.map(async (post) => {
                    const commentsRetrieved = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
                    const comments = commentsRetrieved.data.slice(0, 5); // Only get 5 comments
                    return { ...post, comments: comments};
                }) //Each returns a promise
        ); // Get the comments (max 5) for a given postID
        
        res.json(postsAndComents);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // This runs in the server side
});
