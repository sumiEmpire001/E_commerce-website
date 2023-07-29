
const botResponses = [
    // Previous responses...
    "Our website supports multiple languages to cater to a global audience.",
    "You can subscribe to our loyalty program to earn points and receive exclusive discounts.",
    "We offer gift cards that make for a perfect present for your loved ones.",
    "Our website has a 'Wishlist' feature where you can save products for future purchase.",
    "We provide detailed product specifications and customer reviews to help you make an informed decision.",
    "We offer different shipping options, including standard, express, and next-day delivery.",
    "To learn more about a specific category, just ask, and I'll provide you with more details.",
    "Our checkout process is secured by SSL encryption, ensuring the safety of your payment information.",
    "If you're having trouble placing an order, you can reach out to our live chat support for immediate assistance.",
    "We run seasonal sales and special offers during holidays, so keep an eye out for great deals.",
    "Our customer support team is available 24/7 to address any concerns you may have.",
    "We have a flexible return policy, allowing you to initiate a return within 30 days of purchase.",
    "Our website offers a comprehensive size guide to help you find the perfect fit for clothing and shoes.",
    "For bulk orders or corporate inquiries, you can contact our sales team for custom quotes.",
    "You can sign up for our newsletter to receive the latest updates, promotions, and exclusive deals.",
    "Our website is optimized for accessibility, making it easier for users with disabilities to shop online.",
    "We have a secure login system that protects your account from unauthorized access.",
    "Our website has a 'Deal of the Day' section where you can find limited-time offers on popular products.",
    "We provide customer support in multiple languages to assist our international customers.",
    "To view your order history, log in to your account and access the 'Order History' section.",
    "We offer a price match guarantee, ensuring you get the best price for your purchase.",
    "Our customer support team can assist you with product recommendations based on your preferences.",
    "We collaborate with well-known brands to offer exclusive products not available elsewhere.",
    "We have a user-friendly return process, and refunds are processed promptly after returns are received.",
    "To get updates on new product arrivals, you can follow us on social media.",
    "At Anempire, we are driven by our passion for providing an exceptional shopping experience. Our mission is to connect buyers and sellers seamlessly, fostering a thriving community of empowered individuals.",
    "Anempire is more than just an e-commerce platform; it's a digital empire where innovation and customer satisfaction reign supreme.",
    "With Anempire, you can explore a vast array of products, from fashion and electronics to home decor and beyond. We have something for everyone!",
    "We take pride in our commitment to sustainability. By shopping on Anempire, you support eco-friendly practices and responsible consumption.",
    "Anempire is built on the foundation of cutting-edge technology, ensuring a smooth and secure shopping experience for all our users.",
    "Join Anempire and become a part of our global community. Together, we can shape the future of e-commerce and redefine the way people shop online.",
  
    // Services
    "At Anempire, we offer a secure and efficient payment gateway, making your transactions safe and hassle-free.",
    "Explore the Anempire Seller Community, where you can find trusted sellers offering unique products that you won't find elsewhere.",
    "Anempire's customer support team is available 24/7 to assist you with any inquiries, orders, or concerns. Your satisfaction is our top priority.",
    "Take advantage of our exclusive loyalty program, where you can earn rewards and enjoy special benefits as a valued Anempire customer.",
    "Our platform is optimized for mobile devices, ensuring a seamless shopping experience on-the-go.",
  
    // Support
    "Need help navigating our platform? Our user-friendly interface is designed to make your shopping journey effortless.",
    "Feel free to reach out to our support team for any assistance or to share feedback. We love hearing from our users!",
    "At Anempire, we understand that each customer is unique. Our support team is committed to providing personalized assistance tailored to your needs.",
    "If you're a seller on Anempire, our seller support team is here to guide you through the process and help you grow your business.",
    "We value your privacy and data security. Rest assured that your personal information is protected when you shop with us.",
  
    // If no specific keyword is matched, provide a random response
    "Anempire is your gateway to an unparalleled shopping experience. Start exploring our vast selection of products today!",
    "Thank you for choosing Anempire. We are excited to be a part of your online shopping journey!",
    "Anempire is more than just an e-commerce platform; it's a community where individuals come together to explore, connect, and create.",
    "We are committed to empowering sellers and buyers alike, providing a platform that fosters growth and prosperity.",
    "With Anempire, your shopping possibilities are limitless. Find the products you love and discover new favorites along the way.",
    "At Anempire, we are driven by our passion for providing an exceptional shopping experience. Our mission is to connect buyers and sellers seamlessly, fostering a thriving community of empowered individuals.",
  "Anempire is more than just an e-commerce platform; it's a digital empire where innovation and customer satisfaction reign supreme.",
  "With Anempire, you can explore a vast array of products, from fashion and electronics to home decor and beyond. We have something for everyone!",
  "We take pride in our commitment to sustainability. By shopping on Anempire, you support eco-friendly practices and responsible consumption.",
  "Anempire is built on the foundation of cutting-edge technology, ensuring a smooth and secure shopping experience for all our users.",
  "Join Anempire and become a part of our global community. Together, we can shape the future of e-commerce and redefine the way people shop online.",

  // Services
  "At Anempire, we offer a secure and efficient payment gateway, making your transactions safe and hassle-free.",
  "Explore the Anempire Seller Community, where you can find trusted sellers offering unique products that you won't find elsewhere.",
  "Anempire's customer support team is available 24/7 to assist you with any inquiries, orders, or concerns. Your satisfaction is our top priority.",
  "Take advantage of our exclusive loyalty program, where you can earn rewards and enjoy special benefits as a valued Anempire customer.",
  "Our platform is optimized for mobile devices, ensuring a seamless shopping experience on-the-go.",

  // Support
  "Need help navigating our platform? Our user-friendly interface is designed to make your shopping journey effortless.",
  "Feel free to reach out to our support team for any assistance or to share feedback. We love hearing from our users!",
  "At Anempire, we understand that each customer is unique. Our support team is committed to providing personalized assistance tailored to your needs.",
  "If you're a seller on Anempire, our seller support team is here to guide you through the process and help you grow your business.",
  "We value your privacy and data security. Rest assured that your personal information is protected when you shop with us.",

  // An Empire Experience
  "Anempire is more than just an online store; it's an experience that brings the joy of shopping to your fingertips.",
  "Discover handcrafted products from artisans around the world, each with a unique story waiting to be shared.",
  "Anempire's search algorithms are designed to help you find the perfect product effortlessly, saving you time and effort.",
  "With Anempire, you can stay up-to-date with the latest trends and hottest deals, ensuring you never miss out on exciting opportunities.",
  "Be part of our vibrant community, where buyers and sellers come together to celebrate creativity, innovation, and culture.",

  // Anempire's Vision
  "Our vision is to create an inclusive and diverse marketplace that empowers entrepreneurs and provides customers with a truly remarkable shopping experience.",
  "We envision a future where Anempire is synonymous with trust, reliability, and excellence in e-commerce.",
  "With a global reach, Anempire aims to connect people from all corners of the world, bridging cultural gaps and fostering international trade.",
  "Anempire's vision is to inspire and support budding entrepreneurs, helping them turn their passions into successful businesses.",
  "We are committed to constant innovation, leveraging the latest technologies to enhance our platform and exceed customer expectations.",

  // Invitation to Join Anempire
  "Join us at Anempire and embark on a journey of endless possibilities. Shop, sell, connect, and create your own digital empire today!",
  "Whether you're a seasoned shopper or a budding entrepreneur, Anempire welcomes you to experience the future of e-commerce.",
  "Become a part of the Anempire movement and let's build a world where digital commerce is a seamless and enriching experience for everyone.",
  "At Anempire, we are not just building a marketplace; we are creating a community of dreamers, doers, and visionaries.",
  "The empire of online shopping awaits you. Step into the world of Anempire and be a part of something extraordinary.",
];

  

  const initialGreetings = [
    "Hello! I am the Empire Chatbot. How can I assist you today?",
    "Hi there! Welcome to our website. How can I help you?",
    "Greetings! How may I be of service to you?",
    "Good day! I'm the Empire Chatbot. What can I do for you?",
    "Hey! How can I assist you in your shopping today?",
    "Hello! I am the Empire Chatbot. How can I assist you today?",
  "Hi there! Welcome to our website. How can I help you?",
  "Greetings! How may I be of service to you?",
  "Good day! I'm the Empire Chatbot. What can I do for you?",
  "Hey! How can I assist you in your shopping today?",
  "Welcome to Anempire! I'm here to answer your questions and provide a delightful shopping experience.",
  "Hi, it's great to see you here! I'm the Empire Chatbot, ready to assist you.",
  "Hello there! As an e-commerce enthusiast, I'm excited to help you find what you're looking for.",
  "Welcome to Anempire, where shopping meets innovation! How can I make your day better?",
  "Hi, I'm the Empire Chatbot. Let's explore the world of e-commerce together!",
  "Greetings from Anempire! I'm here to guide you through an extraordinary shopping journey.",
  "Hello, lovely shopper! I'm the Empire Chatbot, your virtual shopping companion.",
  "Hi there! How can I make your online shopping experience extraordinary?",
  "Greetings, adventurer! Welcome to Anempire, your gateway to the future of e-commerce.",
  "Hello, savvy shopper! Let's discover amazing deals and products at Anempire.",
  "Hi, I'm the Empire Chatbot. Ready to embark on an e-commerce adventure together?",
  "Greetings, shopaholic! Let's find the perfect items that suit your style.",
  "Hello, valued customer! I'm here to assist you with all your shopping needs.",
  "Hi, it's a pleasure to meet you! Let's dive into the world of Anempire's e-commerce excellence.",
  "Greetings, tech-savvy shopper! Let's explore the latest trends and innovations together.",
  "Hello, fashionista! Ready to discover the hottest fashion finds at Anempire?",
  ];
  
  function getRandomInitialGreeting() {
    const randomIndex = Math.floor(Math.random() * initialGreetings.length);
    return initialGreetings[randomIndex];
  }
  
  function getBotResponse(userMessage) {
    // Convert user input to lowercase for case-insensitive comparison
    const lowerUserMessage = userMessage.toLowerCase();
  
    // Check for specific keywords in the user's message and respond accordingly
    if (lowerUserMessage.includes("product")) {
      return "We offer a wide range of products in various categories. Please let me know what specific product you're looking for.";
    } else if (lowerUserMessage.includes("shipping")) {
      return "We offer different shipping options, including standard, express, and next-day delivery. Free shipping is available on orders above $50 within the continental US.";
    } else if (lowerUserMessage.includes("payment")) {
      return "We have a secure payment gateway that supports all major credit cards and PayPal.";
    } else if (lowerUserMessage.includes("return")) {
      return "We have a flexible return policy, allowing you to initiate a return within 30 days of purchase. Please review our return policy on the website for more details.";
    } else if (lowerUserMessage.includes("discount")) {
      return "You can subscribe to our newsletter to receive exclusive discounts and promotions.";
    }
      // Financial Support
  if (lowerUserMessage.includes("shop with us")) {
    return "By making purchases on Anempire, you not only access high-quality products but also contribute directly to our growth and development. Every transaction helps us invest in improving our platform, expanding our product range, and providing even better customer experiences.";
  } else if (lowerUserMessage.includes("spread the word")) {
    return "Share your positive experiences with Anempire among your friends, family, and social media followers. By recommending our platform to others, you play a vital role in expanding our customer base, attracting more sellers, and enhancing the overall ecosystem.";
  } else if (lowerUserMessage.includes("invest in our growth")) {
    return "For those who believe in our vision and want to play a more significant role in shaping the future, we invite you to consider investing in Anempire. Stay tuned for opportunities to participate in funding rounds, as we aim to build a sustainable and prosperous future together.";
  }
  

  // Collaborative Support
  else if (lowerUserMessage.includes("partnership opportunities")) {
    return "Are you a brand or business owner interested in expanding your reach? Let's team up and explore partnership opportunities. By joining forces, we can create synergistic collaborations, mutual growth, and incredible experiences for our customers.";
  } else if (lowerUserMessage.includes("seller community")) {
    return "If you are a seller looking for a reliable platform to showcase your products, consider joining Anempire's vibrant seller community. We provide a supportive environment, powerful tools, and dedicated resources to help you succeed in your e-commerce journey.";
  } else if (lowerUserMessage.includes("feedback and ideas")) {
    return "We value your input and ideas. Help us improve by providing feedback on your experiences, suggesting new features, or highlighting areas where we can enhance our services. Together, we can shape Anempire into the ultimate e-commerce destination.";
  }

  // Social Support
  else if (lowerUserMessage.includes("engage with us")) {
    return "Connect with Anempire on social media platforms, including Facebook, Instagram, Twitter, and YouTube. Like, share, and comment on our posts to help us reach a wider audience and foster an engaged community.";
  } else if (lowerUserMessage.includes("user-generated content")) {
    return "If you've had a positive experience with Anempire, consider creating user-generated content, such as unboxing videos, product reviews, or testimonials. By sharing your stories, you inspire others to trust in our platform and become part of the Anempire community.";
  } else if (lowerUserMessage.includes("customer support")) {
    return "As we continue to grow, we need your assistance in providing excellent customer support. If you are a passionate individual who wants to make a difference, consider joining our support team. Help our customers navigate their shopping experience and resolve their queries with care and professionalism.";
  }

 
  
   // Introduction and Conclusion
   else if (lowerUserMessage.includes("anempire")) {
    return "Welcome to Anempire, an innovative and customer-centric e-commerce platform dedicated to delivering exceptional products and services. As we strive to build a thriving community of empowered individuals, we invite you to join us on this exciting journey. We believe that with your support, we can create a future where Anempire revolutionizes the e-commerce landscape. Together, let's shape the future of online shopping!";
  } else if (lowerUserMessage.includes("future of e-commerce")) {
    return "At Anempire, we firmly believe that the future of e-commerce lies in collaboration, innovation, and community. By supporting us financially, collaborating with us, or engaging with our platform, you become an integral part of our success story. Together, we can create an e-commerce empire that redefines the way people shop online. Join us in shaping a future where convenience, trust, and exceptional experiences are at the heart of e-commerce. Let's embark on this exciting journey together!";
  }
// About An Empire
if (lowerUserMessage.includes("about an empire")) {
    return "Welcome to Anempire, the ultimate e-commerce platform that revolutionizes the way buyers and sellers interact in the digital world. Inspired by the grandeur and efficiency of empires, Anempire brings the experience of a traditional marketplace into the modern age, enabling seamless transactions and fostering genuine connections between buyers and sellers.";
    } else if (lowerUserMessage.includes("user-friendly platform")) {
    return "At Anempire, we have meticulously designed our platform to recreate the vibrant atmosphere of an empire, where buyers have the freedom to interact directly with sellers. Our user-friendly interface provides a virtual space for this exchange, making it convenient, accessible, and tailored to your needs. Just like navigating through the streets of an empire, you can explore different categories, browse various products, and communicate with sellers to ensure you find exactly what you're looking for.";
    } else if (lowerUserMessage.includes("trust and authenticity")) {
    return "We believe that a successful empire thrives on trust and reliability. Therefore, we have implemented robust measures to ensure the highest standards of security and authenticity. Our rigorous seller verification process guarantees that you can shop with confidence, knowing that you are dealing with trusted and verified sellers who offer genuine products.";
    } else if (lowerUserMessage.includes("detailed information")) {
    return "Anempire understands the importance of precise and accurate information. We strive to provide buyers with detailed product descriptions, high-quality images, and customer reviews, enabling you to make informed decisions. This transparency and clarity reflect our commitment to empowering you with all the necessary information to find the perfect product.";
    } else if (lowerUserMessage.includes("enhanced shopping experience")) {
    return "Furthermore, our platform is designed to enhance your overall shopping experience. We offer intuitive search functionalities, personalized recommendations, and a seamless checkout process. With Anempire, you can enjoy the convenience of shopping from the comfort of your own home while still experiencing the charm and personalized attention of a traditional empire.";
    }

    // Services
    else if (lowerUserMessage.includes("services")) {
    return "At Anempire, we offer a wide range of services to ensure a seamless and enjoyable shopping experience for our users. These services include secure transactions, seller verification, detailed product information, personalized recommendations, and intuitive search functionalities. Our goal is to cater to the evolving needs of our buyers and sellers, providing a dynamic and efficient marketplace for all.";
    }

    // Support
    else if (lowerUserMessage.includes("customer support")) {
    return "Our customer support team is dedicated to providing excellent assistance to our valued customers. If you have any questions, concerns, or need help with your shopping experience, don't hesitate to reach out to us. We are here to ensure that you have a smooth and enjoyable journey while exploring the vast offerings of Anempire.";
    } else if (lowerUserMessage.includes("seller support")) {
    return "For our sellers, we provide a supportive environment and dedicated resources to help them succeed in their e-commerce journey. If you are a seller on Anempire, feel free to connect with our seller support team for any assistance or guidance you may need.";
    }
      // About An Empire
  if (lowerUserMessage.includes("about an empire")) {
    return "Welcome to Anempire, the ultimate e-commerce platform that revolutionizes the way buyers and sellers interact in the digital world. Inspired by the grandeur and efficiency of empires, Anempire brings the experience of a traditional marketplace into the modern age, enabling seamless transactions and fostering genuine connections between buyers and sellers.";
  } else if (lowerUserMessage.includes("user-friendly platform")) {
    return "At Anempire, we have meticulously designed our platform to recreate the vibrant atmosphere of an empire, where buyers have the freedom to interact directly with sellers. Our user-friendly interface provides a virtual space for this exchange, making it convenient, accessible, and tailored to your needs. Just like navigating through the streets of an empire, you can explore different categories, browse various products, and communicate with sellers to ensure you find exactly what you're looking for.";
  } else if (lowerUserMessage.includes("trust and authenticity")) {
    return "We believe that a successful empire thrives on trust and reliability. Therefore, we have implemented robust measures to ensure the highest standards of security and authenticity. Our rigorous seller verification process guarantees that you can shop with confidence, knowing that you are dealing with trusted and verified sellers who offer genuine products.";
  } else if (lowerUserMessage.includes("detailed information")) {
    return "Anempire understands the importance of precise and accurate information. We strive to provide buyers with detailed product descriptions, high-quality images, and customer reviews, enabling you to make informed decisions. This transparency and clarity reflect our commitment to empowering you with all the necessary information to find the perfect product.";
  } else if (lowerUserMessage.includes("enhanced shopping experience")) {
    return "Furthermore, our platform is designed to enhance your overall shopping experience. We offer intuitive search functionalities, personalized recommendations, and a seamless checkout process. With Anempire, you can enjoy the convenience of shopping from the comfort of your own home while still experiencing the charm and personalized attention of a traditional empire.";
  }

  // Services
  else if (lowerUserMessage.includes("services")) {
    return "At Anempire, we offer a secure and efficient payment gateway, making your transactions safe and hassle-free. Explore the Anempire Seller Community, where you can find trusted sellers offering unique products that you won't find elsewhere. Anempire's customer support team is available 24/7 to assist you with any inquiries, orders, or concerns. Take advantage of our exclusive loyalty program, where you can earn rewards and enjoy special benefits as a valued Anempire customer. Our platform is optimized for mobile devices, ensuring a seamless shopping experience on-the-go.";
  }

  // Support
  else if (lowerUserMessage.includes("customer support")) {
    return "Our customer support team is dedicated to providing excellent assistance to our valued customers. If you have any questions, concerns, or need help with your shopping experience, don't hesitate to reach out to us. We are here to ensure that you have a smooth and enjoyable journey while exploring the vast offerings of Anempire.";
  } else if (lowerUserMessage.includes("seller support")) {
    return "For our sellers on Anempire, we provide a supportive environment and dedicated resources to help them succeed in their e-commerce journey. If you are a seller, feel free to connect with our seller support team for any assistance or guidance you may need.";
  }

  // An Empire Experience
  else if (lowerUserMessage.includes("an empire experience")) {
    return "Anempire is more than just an online store; it's an experience that brings the joy of shopping to your fingertips. Discover handcrafted products from artisans around the world, each with a unique story waiting to be shared. Anempire's search algorithms are designed to help you find the perfect product effortlessly, saving you time and effort. With Anempire, you can stay up-to-date with the latest trends and hottest deals, ensuring you never miss out on exciting opportunities. Be part of our vibrant community, where buyers and sellers come together to celebrate creativity, innovation, and culture.";
  }

  // Anempire's Vision
  else if (lowerUserMessage.includes("anempire's vision")) {
    return "Our vision is to create an inclusive and diverse marketplace that empowers entrepreneurs and provides customers with a truly remarkable shopping experience. We envision a future where Anempire is synonymous with trust, reliability, and excellence in e-commerce. With a global reach, Anempire aims to connect people from all corners of the world, bridging cultural gaps and fostering international trade. Anempire's vision is to inspire and support budding entrepreneurs, helping them turn their passions into successful businesses. We are committed to constant innovation, leveraging the latest technologies to enhance our platform and exceed customer expectations.";
  }

  // Invitation to Join Anempire
  else if (lowerUserMessage.includes("invitation to join anempire")) {
    return "Join us at Anempire and embark on a journey of endless possibilities. Shop, sell, connect, and create your own digital empire today! Whether you're a seasoned shopper or a budding entrepreneur, Anempire welcomes you to experience the future of e-commerce. Become a part of the Anempire movement and let's build a world where digital commerce is a seamless and enriching experience for everyone. At Anempire, we are not just building a marketplace; we are creating a community of dreamers, doers, and visionaries. The empire of online shopping awaits you. Step into the world of Anempire and be a part of something extraordinary.";
  }
  else if (
    lowerUserMessage.includes("done") ||
    lowerUserMessage.includes("end") ||
    lowerUserMessage.includes("") ||
    lowerUserMessage.includes("thank you") ||
    lowerUserMessage.includes("thanks") ||
    lowerUserMessage.includes("it works") ||
    lowerUserMessage.includes("great job") ||
    lowerUserMessage.includes("awesome") ||
    lowerUserMessage.includes("goodbye")
  ) {
    // Response for ending the conversation
    const responses = [
      "Thank you for chatting with the Empire Chatbot. If you have any more questions or need assistance in the future, feel free to reach out to us. Have a great day!",
      "It was a pleasure assisting you! If you ever need further help or have more questions, don't hesitate to contact us. Happy shopping!",
      "You're welcome! If there's anything else I can do for you, please don't hesitate to ask. Have a wonderful day!",
      "I'm glad I could help! If there's anything else you'd like to know or if you need assistance with anything else, feel free to ask. Have a fantastic day!",
      "Thank you for chatting with me. Remember, I'm always here to assist you with anything you need. Feel free to come back anytime!",
      "If you ever need more information or have any other questions, don't hesitate to reach out. Have a fantastic day!",
      "Farewell! If you need anything else in the future or just want to say hi, don't hesitate to return. Have a wonderful day!",
      "It's been a pleasure conversing with you! Should you need any more information or have any other inquiries, feel free to drop by anytime.",
      "Goodbye for now! Remember, I'm here to help you whenever you need it. Wishing you a fantastic day ahead!",
      "Signing off for now, but I'm just a message away whenever you need assistance. Happy shopping and see you soon!",
      "Thank you for the engaging conversation. If you ever have more questions or just want to chat, I'll be here. Have a splendid day!",
      "You're welcome! If there's anything else you'd like to explore or if you have more questions, feel free to ask. Have a wonderful day!",
      "Glad to hear that it works for you! If there's anything else I can assist you with, don't hesitate to let me know. Have a fantastic day!",
      "Great job exploring Anempire! Should you need further assistance or want to discover more amazing products, feel free to come back anytime. Have a fabulous day!",
      "Thank you for your kind words! I'm delighted to be of service. Should you need anything else, don't hesitate to reach out. Have an awesome day!",
      "Goodbye, and happy shopping! Remember, I'm here to make your e-commerce experience extraordinary. See you again soon!",
      
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
  
    
      
      

  
    // If no specific keyword is matched, provide a random response
    const randomIndex = Math.floor(Math.random() * botResponses.length);
    return botResponses[randomIndex];
  }
  
  const chatBody = document.getElementById('chatBody');
  const userInput = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');
  
  function appendUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerHTML = `<strong>You:</strong> ${message}`;
    chatBody.appendChild(userMessage);
  }
  
  function appendBotMessage(message) {
    const botMessage = document.createElement('div');
    botMessage.className = 'bot-message';
    botMessage.innerHTML = `<strong>Empire Chatbot:</strong> ${message}`;
    chatBody.appendChild(botMessage);
  }
  
  function handleUserInput() {
    const message = userInput.value.trim();
    if (message !== '') {
      appendUserMessage(message);
      userInput.value = '';
      scrollToBottom();
      setTimeout(() => {
        let botResponse;
        if (chatBody.children.length === 2) {
          botResponse = getRandomInitialGreeting();
        } else {
          botResponse = getBotResponse(message);
        }
        appendBotMessage(botResponse);
        scrollToBottom();
      }, 500); // Simulating a delay for the bot response
    }
  }
  
  function scrollToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  
  sendBtn.addEventListener('click', handleUserInput);
  userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleUserInput();
    }
  });
  
  // Initial bot greeting
  const initialGreeting = getRandomInitialGreeting();
  appendBotMessage(initialGreeting, true);

  displaychat();
  