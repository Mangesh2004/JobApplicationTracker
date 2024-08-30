import Link from "next/link";

export default function Sidenav() {
  const Menu = [
    {
      name: "Add Applications",

      path: "/dashboard/AddApplication",
    },
    {
      name: "Show all Applications",

      path: "/dashboard/llapplications",
    },
  ];
  return (
    <div>
      <div className="h-screen p-5 shadow-lg border bg-slate-500 md:w-64 hidden md:block fixed pt-6">
        {Menu.map((m, i) => (
          <Link href={m.path} key={i}>
            <div
              className="flex gap-2 mb-2 p-3  hover:bg-black hover:text-white rounded-xl  text-xl"
            >
              <h2> {m.name} </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// {`flex gap-2 mb-2 p-3 hover:bg-purple-600 hover:text-white rounded-3xl ${
//     path === m.path ? "bg-purple-600 text-white" :""
//   }`