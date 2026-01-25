import { useState } from "react";
import BlogContent from "./components/BlogContent";
import BlogImage from "./components/BlogImage";
import Card from "./components/Card";
import Form, { type FormState } from "./components/Form";
import ProfileData from "./components/ProfileData";
import Slate from "./components/Slate";

function App() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormState>({
    title: "",
    tag: "",
    description: "",
    username: "",
  });
  return (
    <>
      <Slate>
        <Card>
          {!formSubmitted ? (
            <Form
              onSubmit={(formData) => {
                setFormData(formData);
                setFormSubmitted(true);
              }}
            />
          ) : (
            <>
              <BlogImage />
              <BlogContent
                blog={{
                  tag: formData.tag,
                  title: formData.title,
                  description: formData.description,
                  date: new Date(Date.now()),
                }}
              />
              <ProfileData username={formData.username} />
            </>
          )}
        </Card>
      </Slate>
    </>
  );
}

export default App;
