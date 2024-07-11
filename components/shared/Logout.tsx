import { doLogout } from "@/app/actions";
import { Button } from "../ui/button";

const Logout = () => {
  return (
    <form action={doLogout}>
      <Button size="sm" type="submit">
        Logout
      </Button>
    </form>
  );
};

export default Logout;
