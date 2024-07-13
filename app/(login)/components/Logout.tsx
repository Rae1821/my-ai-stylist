import { doLogout } from "@/app/actions";
import { Button } from "../../../components/ui/button";

const Logout = () => {
  return (
    <form action={doLogout}>
      <Button size="sm" variant="outline" type="submit">
        Logout
      </Button>
    </form>
  );
};

export default Logout;
