import { useState, type ChangeEvent } from "react";

export type FormState = {
  title: string;
  description: string;
  tag: string;
  username: string;
};

type Props = {
  onSubmit: (formState: FormState) => void;
};

export default function Form({ onSubmit }: Props) {
  const [formState, setFormState] = useState<FormState>({
    title: "",
    description: "",
    tag: "",
    username: "",
  });

  console.log(formState);

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const onDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        description: event.target.value,
      };
    });
  };

  const onTagChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        tag: event.target.value,
      };
    });
  };

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        username: event.target.value,
      };
    });
  };

  const handleFormSubmit = () => {
    if (
      formState.tag.trim().length === 0 ||
      formState.title.trim().length === 0 ||
      formState.description.trim().length === 0 ||
      formState.username.trim().length === 0
    ) {
      console.log("Errors exist");
    } else {
      onSubmit(formState);
    }
  };

  return (
    <form className="form">
      <h2>Create new blog</h2>
      <div className="labelled_input">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={formState.title}
          onChange={onTitleChange}
        />
      </div>
      <div className="labelled_input">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={formState.description}
          onChange={onDescriptionChange}
        />
      </div>
      <div className="labelled_input">
        <label htmlFor="tag">Tag</label>
        <input
          type="text"
          id="tag"
          value={formState.tag}
          onChange={onTagChange}
        />
      </div>
      <div className="labelled_input">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formState.username}
          onChange={onUsernameChange}
        />
      </div>
      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
}
