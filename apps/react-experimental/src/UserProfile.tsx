export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
}
export const UserProfile = ({ user }: { user: UserResponse }) => {
  return (
    <>
      <h4>User #{user.id}</h4>
      <ul>
        <li>
          <strong>Name</strong>: {user.name}
        </li>
        <li>
          <strong>Email</strong>: {user.email}
        </li>
      </ul>
    </>
  );
};
