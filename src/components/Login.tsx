'use client';

import React, { useState } from 'react';
import { adminCredentials, addBlogPost, addGalleryImage, article, photos } from '../data/database';
import { Lock, Plus, Image, FileText } from 'lucide-react';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('posts');
  const [loginError, setLoginError] = useState('');
  
  // Form states
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    image: '',
    author: 'Travel Enthusiast',
    tags: ''
  });
  
  const [newImage, setNewImage] = useState({
    title: '',
    description: '',
    url: '',
    category: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === adminCredentials.username && password === adminCredentials.password) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    const tagsArray = newPost.tags.split(',').map(tag => tag.trim());
    const post = {
      ...newPost,
      tags: tagsArray
    };
    
    addBlogPost(post);
    setNewPost({
      title: '',
      content: '',
      image: '',
      author: 'Travel Enthusiast',
      tags: ''
    });
    alert('Blog post added successfully!');
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    addGalleryImage(newImage);
    setNewImage({
      title: '',
      description: '',
      url: '',
      category: ''
    });
    alert('Gallery image added successfully!');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center p-5 bg-light">
        <div className="card p-4" style={{ width: '400px' }}>
          <div className="d-flex justify-content-center mb-4">
            <Lock className="h-12 w-12 text-danger" />
          </div>
          <h2 className="text-center mb-4">Admin Login</h2>
          
          {loginError && (
            <div className="alert alert-danger">
              {loginError}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                id="username"
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button
              type="submit"
              className="btn btn-danger w-100"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-4 text-center text-muted">
            <p>Hint: Username is "admin" and password is "japan2025"</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <h1 className="text-center mb-4 text-dark">Admin Dashboard</h1>
        
        {/* Tabs */}
        <div className="d-flex justify-content-center mb-4">
          <button
            className={`btn mx-2 ${activeTab === 'posts' ? 'btn-outline-danger' : 'btn-outline-secondary'}`}
            onClick={() => setActiveTab('posts')}
          >
            <FileText className="me-2" />
            Blog Posts
          </button>
          <button
            className={`btn mx-2 ${activeTab === 'gallery' ? 'btn-outline-danger' : 'btn-outline-secondary'}`}
            onClick={() => setActiveTab('gallery')}
          >
            <Image className="me-2" />
            Gallery
          </button>
        </div>
        
        <div className="card p-4">
          {activeTab === 'posts' ? (
            <div>
              <div className="d-flex justify-content-between mb-4">
                <h2 className="h5">Manage Blog Posts</h2>
                <div>Total Posts: {article.length}</div>
              </div>
              
              <form onSubmit={handleAddPost} className="mb-4">
                <h3 className="h6 mb-3 d-flex align-items-center text-dark">
                  <Plus className="me-2" />
                  Add New Post
                </h3>
                
                <div className="row mb-4">
                  <div className="col-md-6">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label className="form-label">Image URL</label>
                    <input
                      type="url"
                      className="form-control"
                      value={newPost.image}
                      onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="form-label">Content</label>
                  <textarea
                    className="form-control"
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    required
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label className="form-label">Tags (comma separated)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newPost.tags}
                    onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                    placeholder="Tokyo, Food, Culture"
                    required
                  />
                </div>
                
                <button type="submit" className="btn btn-danger w-100">
                  Add Blog Post
                </button>
              </form>
              
              <div>
                <h3 className="h6 mb-3 text-dark">Existing Posts</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Date</th>
                      <th>Tags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {article.map(post => (
                      <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.date}</td>
                        <td>
                          {post.tags.map((tag, index) => (
                            <span key={index} className="badge bg-danger me-1">
                              {tag}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>
              <div className="d-flex justify-content-between mb-4">
                <h2 className="h5">Manage Gallery</h2>
                <div>Total Images: {photos.length}</div>
              </div>
              
              <form onSubmit={handleAddImage} className="mb-4">
                <h3 className="h6 mb-3 d-flex align-items-center text-dark">
                  <Plus className="me-2" />
                  Add New Image
                </h3>
                
                <div className="row mb-4">
                  <div className="col-md-6">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newImage.title}
                      onChange={(e) => setNewImage({...newImage, title: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label className="form-label">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newImage.category}
                      onChange={(e) => setNewImage({...newImage, category: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="form-label">Image URL</label>
                  <input
                    type="url"
                    className="form-control"
                    value={newImage.url}
                    onChange={(e) => setNewImage({...newImage, url: e.target.value})}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    value={newImage.description}
                    onChange={(e) => setNewImage({...newImage, description: e.target.value})}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-danger w-100">
                  Add Gallery Image
                </button>
              </form>
              
              <div>
                <h3 className="h6 mb-3 text-dark">Existing Images</h3>
                <div className="row">
                  {photos.map(image => (
                    <div key={image.id} className="col-md-4 mb-4">
                      <div className="card">
                        <img src={image.url} alt={image.title} className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title">{image.title}</h5>
                          <p className="card-text">{image.tags}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsLoggedIn(false)}
            className="btn btn-secondary"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
