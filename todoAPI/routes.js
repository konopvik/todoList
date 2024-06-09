import express from 'express';
import db from './db.js';

const router = express.Router();

// Get all posts
router.get('/posts', (req, res) => {
    res.json(db.data.posts);
});

// Get a single post by ID
router.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = db.data.posts.find(post => post.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// Create a new post
router.post('/posts', async (req, res) => {
    const newPost = {
        id: db.data.posts.length + 1,
        title: req.body.title,
        body: req.body.body
    };
    db.data.posts.push(newPost);
    await db.write();
    res.status(201).json(newPost);
});

// Update an existing post
router.put('/posts/:id', async (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = db.data.posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        db.data.posts[postIndex] = {
            id: postId,
            title: req.body.title,
            body: req.body.body
        };
        await db.write();
        res.json(db.data.posts[postIndex]);
    } else {
        res.status(404).send('Post not found');
    }
});

// Delete a post
router.delete('/posts/:id', async (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = db.data.posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
        db.data.posts.splice(postIndex, 1);
        await db.write();
        res.status(204).send();
    } else {
        res.status(404).send('Post not found');
    }
});

export default router;
