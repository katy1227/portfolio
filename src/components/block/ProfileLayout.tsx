import { profileUser } from "../../types/props";

const ProfileLayout = (props: profileUser) => {
  const { name, about, imgUrl, imgAlt } = props;
  return (
    <div className="profile">
      <img src={imgUrl} alt={imgAlt} className="profileIcon" />
      <div>
        <h3 className="profileName">{name}</h3>
        <div className="font-title">{about}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
