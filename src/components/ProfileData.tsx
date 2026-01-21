import avatar from "../assets/images/image-avatar.webp";

export default function ProfileData() {
  return (
    <section className="profile-data">
      <figure className="profile-avatar">
        <img src={avatar} alt="profile avatar" />
      </figure>
      <span className="username">Greg Hooper</span>
    </section>
  );
}
