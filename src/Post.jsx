export function Post(props) {
  return (
    <div>
      <blockquote>
        <p>&ldquo;{props.content}&rdquo;</p>
        <small>{props.author}</small>
      </blockquote>
    </div>
  );
}
