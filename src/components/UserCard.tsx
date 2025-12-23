import type { User } from '../types/user';

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => { // Component to display user information
  return (
    <div className="card">
      <h2>{user.fullName}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
