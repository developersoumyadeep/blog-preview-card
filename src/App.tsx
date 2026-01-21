import BlogContent from "./components/BlogContent";
import BlogImage from "./components/BlogImage";
import Card from "./components/Card";
import ProfileData from "./components/ProfileData";
import Slate from "./components/Slate";

function App() {
  return (
    <>
      <Slate>
        <Card>
          <BlogImage />
          <BlogContent />
          <ProfileData />
        </Card>
      </Slate>
    </>
  );
}

export default App;
