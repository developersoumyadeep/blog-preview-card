import avatar from "../assets/images/image-avatar.webp";

export default function ProfileData({ username }: { username: string }) {
  return (
    <section className="profile-data">
      <figure className="profile-avatar">
        <img src={avatar} alt="profile avatar" />
      </figure>
      <span className="username">{username}</span>
    </section>
  );
}
