import { Suspense } from "react";
import Cats from "./cats";

export const SuspenseCat = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Cats />
      </Suspense>
    </div>
  );
};
