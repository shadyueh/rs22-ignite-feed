import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Andre Gide"
        content="It is better to be hated for what you are than to be loved for what you are not."
      />
      <Post
        author="John Green"
        content="The only way out of the labyrinth of suffering is to forgive."
      />
      <Post
        author="W.C. Fields"
        content="I am free of all prejudice. I hate everyone equally."
      />
      <Post
        author="Pablo Neruda"
        content="I love you as certain dark things are to be loved,
        in secret, between the shadow and the soul."
      />
    </div>
  );
}