
const [blog, setBlog] = useState(null);
const navigate = useNavigate();
const { id } = useParams();

useEffect(() => {
  const fetchBlog = async () => {
    const response = await fetch(`/api/blogs/${id}`);
    const json = await response.json();

    if (response.ok) {
      setBlog(json);
    }
  };

  fetchBlog();
}, [id]);

const handleClick = async () => {
  await fetch(`/api/blogs/${id}`, {
    method: "DELETE",
  });
  navigate("/");
};