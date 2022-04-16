import faker from "@faker-js/faker";
import logger from "@jellydn/ui/utils/logger";

// Borrow from https://codesandbox.io/s/romantic-architecture-ht3qi?file=/src/fakeApi.js:0-1610
// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
function wrapPromise<T>(promise: Promise<T>) {
  let status = "pending";
  let result: T;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

function fetchUser(id: number) {
  logger.info("fetch user...");
  return new Promise((resolve) => {
    setTimeout(() => {
      logger.info("===== fetched user =====");
      resolve({
        id,
        name: faker.name.findName(),
        email: faker.internet.email(),
      });
    }, 3000);
  });
}

export function fetchProfileData(userId: number) {
  return {
    user: wrapPromise(fetchUser(userId)),
  };
}
