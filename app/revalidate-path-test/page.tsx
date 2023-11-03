import { revalidatePath, unstable_cache } from "next/cache";
import { redirect } from "next/navigation";

const getStableRandomNumber3 = unstable_cache(async () => {
  await new Promise((res) => setTimeout(res, 5000));

  return Math.random();
}, ["random-number-3"]);

const RevalidateTagTest = async () => {
  const randomNumber = await getStableRandomNumber3();

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

export default RevalidateTagTest;
