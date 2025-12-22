import type { User } from '../types/user';

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <div className="card">
      <h2>{user.fullName}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
