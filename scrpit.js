document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const postsContainer = document.getElementById('posts-container');
    const noPostsMessage = document.querySelector('.no-posts');

    postForm.addEventListener('submit', (event) => { 
        event.preventDefault();

        const title = postTitle.value.trim();
        const content = postContent.value.trim();

        if (title && content) {
            // Create a new post element
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>✨ "${title}" ✨</h3>
                <p>${content}</p>
                <small>Posted on ${new Date().toLocaleString()}</small>def predict_image(image_path, model):
    predict = image.load_img(image_path, target_size=(64, 64))
    predict_modified = image.img_to_array(predict)
    predict_modified = predict_modified / 255.0
    predict_modified = np.expand_dims(predict_modified, axis=0)
    
    result = model.predict(predict_modified)
    
    if result[0][0] >= 0.5:
        prediction = "dog"
    else:
        prediction = "cat"
    
    print(f"Prediction: {prediction} (Confidence: {result[0][0]:.2f})")
    
# Example Usage
predict_image(r"C:\path\to\test_image.jpg", classifier)

            `;

            // Remove "No posts yet" message if it exists
            if (noPostsMessage) {
                noPostsMessage.remove();
            }

            // Append the new post to the posts container
            postsContainer.appendChild(postElement);

            // Clear input fields
            postTitle.value = '';
            postContent.value = '';
        }
    });
});


