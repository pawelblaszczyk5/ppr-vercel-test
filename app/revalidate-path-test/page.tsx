import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const RevalidatePathTest = async () => {
  const randomNumber = Math.random();

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <p>Stable random number: {randomNumber}</p>
      <form
        action={async () => {
          "use server";

          revalidatePath("/revalidate-path-test");
          redirect("/revalidate-path-test");
        }}
      >
        <button>Refresh random number</button>
      </form>
    </main>
  );
};

export default RevalidatePathTest;
