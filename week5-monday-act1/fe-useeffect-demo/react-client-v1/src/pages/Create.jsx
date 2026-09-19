
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [author, setAuthor] = useState("mario");
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  const blog = { title, body, author };

  const response = await fetch("/api/blogs", {
    method: "POST",
    body: JSON.stringify(blog),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  if (!response.ok) {
    console.log("Error");
  }
  if (response.ok) {
    setTitle("");
    setBody("");
    setAuthor("");
    console.log("new blog added:", json);
    navigate("/");
  }
};