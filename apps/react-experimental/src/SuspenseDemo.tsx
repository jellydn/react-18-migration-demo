import logger from "@jellydn/ui/utils/logger";
// @ts-expect-error no types yet
import { fetch } from "react-fetch";

type Props = {
  userId: number;
};

export interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const UserProfile = ({ user }: { user: UserResponse }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

const SuspenseDemo = ({ userId }: Props) => {
  const user = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  logger.info("SuspenseDemo - render ", user.json());
  return <UserProfile user={user.json()} />;
};

export default SuspenseDemo;
