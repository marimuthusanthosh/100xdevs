import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true; // send cookies

// ✅ Auth check wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    axios.get("http://localhost:4000/profile")
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <p>Loading...</p>;
  return isAuth ? children : <Navigate to="/login" replace />;
}

// ✅ Pages
function Login() {
  const [username, setUsername] = useState("john");
  const [password, setPassword] = useState("123456");

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:4000/login", { username, password });
      window.location.href = "/feed";
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>Don’t have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

function Signup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await axios.post("http://localhost:4000/signup", { username, name, password });
    alert("Signup success, please login");
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

function Profile() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:4000/profile").then((res) => setData(res.data));
  }, []);
  if (!data) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

type Post = {
  id: number;
  author: string;
  content: string;
};

function Feed() {
  const [feed, setFeed] = useState<Post[]>([]);
  useEffect(() => {
    axios.get("http://localhost:4000/feed").then((res) => setFeed(res.data.posts));
  }, []);
  return (
    <div>
      <h2>Feed</h2>
      {feed.map((post) => (
        <p key={post.id}><b>{post.author}:</b> {post.content}</p>
      ))}
    </div>
  );
}

function Share() {
  const [content, setContent] = useState("");
  const handleShare = async () => {
    await axios.post("http://localhost:4000/share", { content });
    alert("Post shared!");
  };
  return (
    <div>
      <h2>Share Post</h2>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleShare}>Post</button>
    </div>
  );
}

type Message = {
  from: string;
  text: string;
};

function Messages() {
  const [msgs, setMsgs] = useState<Message[]>([]);
  useEffect(() => {
    axios.get("http://localhost:4000/messages").then((res) => setMsgs(res.data.messages));
  }, []);
  return (
    <div>
      <h2>Messages</h2>
      {msgs.map((m, i) => (
        <p key={i}><b>{m.from}:</b> {m.text}</p>
      ))}
    </div>
  );
}

function Notifications() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/notifications").then((res) => setNotes(res.data.notifications));
  }, []);
  return (
    <div>
      <h2>Notifications</h2>
      {notes.map((n, i) => <p key={i}>{n}</p>)}
    </div>
  );
}

function Navbar() {
  const logout = async () => {
    await axios.post("http://localhost:4000/logout");
    window.location.href = "/login";
  };
  return (
    <nav>
      <Link to="/feed">Feed</Link> | <Link to="/profile">Profile</Link> |
      <Link to="/share">Share</Link> | <Link to="/messages">Messages</Link> |
      <Link to="/notifications">Notifications</Link> |
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

// ✅ App Router
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
        <Route path="/share" element={<ProtectedRoute><Share /></ProtectedRoute>} />
        <Route path="/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/feed" />} />
      </Routes>
    </Router>
  );
}

export default App;
