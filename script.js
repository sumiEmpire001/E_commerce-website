

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("signup-form");
  const stages = form.getElementsByClassName("stage");
  const stageNumbers = document.getElementsByClassName("stage-number");
  const nextButtons = form.getElementsByClassName("next-btn");
  
  let currentStage = 0;
  
  function showStage(stageIndex) {
    stages[currentStage].style.display = "none";
    stageNumbers[currentStage].classList.remove("active");
    stages[stageIndex].style.display = "block";
    stageNumbers[stageIndex].classList.add("active");
    currentStage = stageIndex;
  }
  
  function moveToNextStage() {
    const nextStage = currentStage + 1;
    if (nextStage < stages.length) {
      showStage(nextStage);
    }
  }
  
  for (let i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener("click", moveToNextStage);
  }
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully!"); // Add your form submission code here
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");
    const stages = form.getElementsByClassName("stage");
    const stageNumbers = document.getElementsByClassName("stage-number");
    const nextButtons = form.getElementsByClassName("next-btn");
    
    let currentStage = 0;
    
    function showStage(stageIndex) {
      stages[currentStage].style.display = "none";
      stageNumbers[currentStage].classList.remove("active");
      stages[stageIndex].style.display = "block";
      stageNumbers[stageIndex].classList.add("active");
      currentStage = stageIndex;
    }
    
    function moveToNextStage() {
      if (form.checkValidity(true)) {
        const nextStage = currentStage + 1;
        if (nextStage < stages.length) {
          showStage(nextStage);
        }
      }
      form.classList.add('was-validated');
    }
    
    for (let i = 0; i < nextButtons.length; i++) {
      nextButtons[i].addEventListener("click", moveToNextStage);
    }
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (form.checkValidity()) {
        alert("Form submitted successfully!");
        const formData = new FormData(form);
        for (const pair of formData.entries()) {
          console.log(pair[0] + ': ' + pair[1]);
        }
      } else {
        form.classList.add('was-validated');
      }
    });
  });
  

  $(document).ready(function() {
    // Handle post submission
    $('#post-form').submit(function(event) {
      event.preventDefault();
  
      // Extract form data
      const formData = new FormData(this);
  
      // Perform server-side request to save the post
      // Replace this with your server-side code to handle the post submission
  
      // Clear form values
      $('#post-type').val('video');
      $('#post-content').val('');
      $('#post-file').val('');
    });
  
    // Render posts
    function renderPosts() {
      // Perform server-side request to retrieve posts
      // Replace this with your server-side code to fetch the posts
  
      // Dummy data for demonstration purposes
      const posts = [
        {
          type: 'video',
          content: 'https://www.youtube.com/watch?v=ABC123',
          likes: 10,
          shares: 5,
          comments: 3
        },
        {
          type: 'picture',
          content: 'https://example.com/image.jpg',
          likes: 7,
          shares: 2,
          comments: 1
        },
           {
          type: 'article',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          likes: 3,
          shares: 1,
          comments: 0
        }
      ];
  
      const postContainer = $('#post-container');
      postContainer.empty();
  
      posts.forEach(post => {
        const postElement = `
          <div class="card">
            <div class="card-body">
              <h4>${post.type.charAt(0).toUpperCase() + post.type.slice(1)} Post</h4>
              <p>${post.content}</p>
              <div class="post-actions">
                <button class="btn btn-primary like-btn">${post.likes} Likes</button>
                <button class="btn btn-primary share-btn">${post.shares} Shares</button>
                <button class="btn btn-primary comment-btn">${post.comments} Comments</button>
              </div>
            </div>
          </div>
        `;
  
        postContainer.append(postElement);
       });
    }
  
    // Handle like button click
    $(document).on('click', '.like-btn', function() {
      // Update the like count
      const likeCount = $(this).text().split(' ')[0];
      const newLikeCount = parseInt(likeCount) + 1;
      $(this).text(newLikeCount + ' Likes');
    });
  
    // Handle share button click
    $(document).on('click', '.share-btn', function() {
      // Perform share functionality
      // Replace this with your own logic for sharing the post
    });
  
    // Handle comment button click
    $(document).on('click', '.comment-btn', function() {
      // Perform comment functionality
      // Replace this with your own logic for commenting on the post
    });
  
    // Initial rendering of posts
    renderPosts();
  });





  $(document).ready(function() {
    // Array to store user data
    let users = [];
  
    // Function to render user list
    function renderUserList() {
      const usersElement = $('#users');
      usersElement.empty();
  
      users.forEach(user => {
        const userElement = `<li>${user.name}</li>`;
        usersElement.append(userElement);
      });
    }
  
    // Function to render chat messages
    function renderChatMessages() {
      const chatMessagesElement = $('#chat-messages');
      chatMessagesElement.empty();
  
      messages.forEach(message => {
        const messageElement = `<p><strong>${message.sender}</strong>: ${message.content}</p>`;
        chatMessagesElement.append(messageElement);
      });
  
      // Scroll to the bottom of the chat box
      chatMessagesElement.scrollTop(chatMessagesElement[0].scrollHeight);
    }
  
    // Function to handle sending messages
    function sendMessage() {
      const messageInput = $('#message-input');
      const messageContent = messageInput.val();
  
      if (messageContent !== '') {
        // Create a new message object
        const message = {
          sender: 'User',
          content: messageContent
        };
  
        // Add the messageto the messages array
        messages.push(message);
  
        // Render chat messages
        renderChatMessages();
  
        // Clear the message input
        messageInput.val('');
      }
    }
  
    // Event listener for send button click
    $('#send-button').click(function() {
      sendMessage();
    });
  
    // Event listener for Enter key press in the message input
    $('#message-input').keypress(function(event) {
      if (event.which === 13) {
        event.preventDefault();
        sendMessage();
      }
    });
  
    // Dummy data for demonstration purposes
    const messages = [
      { sender: 'User1', content: 'Hello!' },
      { sender: 'User2', content: 'Hi there!' },
      { sender: 'User1', content: 'How are you?' },
      { sender: 'User2', content: 'I am doing well, thank you!' }
    ];
  
    // Dummy data for user list
    users = [
      { name: 'User1' },
      { name: 'User2' },
      { name: 'User3' }
    ];
  
    // Render user list and chat messages
    renderUserList();
    renderChatMessages();
  });
  
  
