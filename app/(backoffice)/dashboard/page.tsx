// dashboard/page.tsx
import Dashboard from "@/components/Dashboard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const {isAuthenticated} = getKindeServerSession()
  const isLoggedIn= await isAuthenticated();




    if (!isLoggedIn) {
    redirect("/login");
    };
  
  return (
    <>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, animi aut magni consequuntur magnam voluptatibus labore nemo quam perspiciatis ad corrupti, iusto laborum. Praesentium alias voluptatum voluptatem hic voluptate veniam debitis minus similique laborum illo. Consectetur, quis quo adipisci dolor accusantium corrupti qui possimus totam doloribus odit quisquam reprehenderit, numquam voluptas animi ratione dolores eius voluptatem voluptatum laudantium cumque aut dicta deserunt. Molestiae, quos velit. Minus, tempora saepe perspiciatis, eos inventore sapiente autem non ex eius exercitationem, recusandae aliquid repudiandae delectus velit asperiores perferendis doloremque voluptates dolorem consequatur dolorum hic! Maiores ipsa doloremque, omnis dolorem similique quasi numquam? Earum corrupti dicta voluptatum asperiores unde animi omnis repudiandae necessitatibus sed distinctio veritatis, ratione nostrum perferendis laborum voluptatibus porro molestiae libero? Eaque, modi temporibus? Quam repudiandae mollitia minima!</div>
      
    </>
  );
}
