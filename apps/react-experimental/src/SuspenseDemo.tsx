import logger from "@jellydn/ui/utils/logger";
import { Suspense, useId, useState } from "react";
// @ts-expect-error no types yet
import { fetch } from "react-fetch";

import { UserProfile, UserResponse } from "./UserProfile";
import { fetchProfileData } from "./fakeApi";

type Props = {
  userId: number;
};
const FetchingUseProfile = ({ userId }: Props) => {
  logger.info("FetchingUseProfile", userId);
  const user = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return <UserProfile user={user.json()} />;
};

const { user } = fetchProfileData(99);
const FetchingUserWithDelay = () => {
  logger.info("FetchingUserWithDelay");
  const userData = user.read();
  return <UserProfile user={userData as UserResponse} />;
};

const SuspenseDemo = () => {
  const id = useId();
  const [isEnable, setIsEnable] = useState(false);
  const [userId, setUserId] = useState(1);

  const handleClick = (checked: boolean) => {
    setIsEnable(checked);
    if (checked) {
      // set random userId
      setUserId(Math.floor(Math.random() * 5) + 1);
    }
  };

  return (
    <div>
      <label htmlFor={id}>Fetching users?</label>
      <input
        id={id}
        type="checkbox"
        name="isEnable"
        checked={isEnable}
        onChange={(evt) => handleClick(evt.currentTarget.checked)}
      />
      {isEnable && (
        <>
          <FetchingUseProfile userId={userId} />
          <FetchingUseProfile userId={10} />
        </>
      )}

      <Suspense fallback="loading data in 3s...">
        <FetchingUserWithDelay />
      </Suspense>
    </div>
  );
};

export default SuspenseDemo;
