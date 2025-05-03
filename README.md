# Linklean
Linklean is a full-stack URL shortening service built with Node.js, Express, EJS, and MongoDB. It offers user authentication, session management, link analytics, and a clean UI. The application is deployed on Render.  <br><br>


> ## **Features**
 - **User Authentication**: <br>Secure signup, login, and logout functionalities using sessions.

 - **URL Shortening**: <br>Generate concise, shareable links with unique short IDs.

 - **Analytics**: <br>Track click timestamps for each shortened URL.

 - **Protected Routes**: <br>Ensure certain routes are accessible only to authenticated users.

 - **Responsive UI**: <br>Built with EJS templates and styled using Tailwind CSS.  <br><br>



> ## **🌐 Live Demo**
Access the live application here: https://linklean.onrender.com  <br><br>



> ## **📦 Installation**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/linklean.git
   cd linklean
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add:

   ```env
   SESSION_SECRET=your_session_secret
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

   The application will run on [http://localhost:3000](http://localhost:3000)  <br><br>


Feel free to customize this README.md further to suit your project's needs. Let me know if you need assistance with anything else!




