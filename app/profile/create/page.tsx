import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const createProfileAction = async (formData : FormData) => {
  "use server"
  const firstname = formData.get('firstname') as string
  //validate
  //Insert to db
  //return
  console.log(firstname)
}

const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-lg max-w-lg">
        <form action={createProfileAction}>
          <div className="mb-2">
            <Label htmlFor="firstname">First Name</Label>
            <Input name="firstname" type="text" />
          </div>
          <Button type="submit" size={"lg"}>
            Create Profile
          </Button>
        </form>
      </div>
    </section>
  );
};
export default CreateProfile;
