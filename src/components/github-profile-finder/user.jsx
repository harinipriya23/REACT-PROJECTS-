export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    created_at,
    name,
    login,
    public_repos
  } = user;
  const createdDate = new Date(created_at);
  return (
    <div>
      <div className=" border-solid border-2 border-rose-400 m-3 p-4">
        <img src={avatar_url} alt="User" />
      </div>
      <div className=" flex flex-col gap-2">
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          user joined on {""}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div>
        followers : {followers}
      </div>
      <div>
        following : {following}
      </div>
      <div>
        public_repos : {public_repos}
      </div>
      </div>
    </div>
  );
}
