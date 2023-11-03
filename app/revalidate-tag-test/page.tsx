import { revalidateTag, unstable_cache, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";

const getStableRandomNumber2 = unstable_cache(
  async () => {
    await new Promise((res) => setTimeout(res, 2000));

    return Math.random();
  },
  ["random-number-2"],
  { tags: ["random-number-2"] }
);

const RevalidateTagTest = async () => {
  unstable_noStore();

  const randomNumber = await getStableRandomNumber2();

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <p>Stable random number: {randomNumber}</p>
      <form
        action={async () => {
          "use server";

          revalidateTag("random-number-2");
          redirect("/revalidate-tag-test");
        }}
      >
        <button>Refresh random number</button>
      </form>
    </main>
  );
};

export default RevalidateTagTest;
