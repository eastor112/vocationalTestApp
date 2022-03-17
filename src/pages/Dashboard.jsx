import React, { useState } from 'react';
import Sidebar from '../components/organisms/sidebar/Sidebar';

function Dashboard() {
  const [width, setwidth] = useState(64);

  return (
    <>
      <Sidebar setwidth={setwidth} />

      <main className={`${width === 64 ? 'pt-10 pr-10 ml-72' : ' pt-10 pr-10 pl-24'}`}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quos,
          aliquid tenetur non adipisci dolores deserunt perferendis unde excepturi
          nihil ad laborum architecto temporibus consequatur itaque veritatis minus accusamus eos.
          A laudantium eum molestiae reprehenderit nulla asperiores corporis quis
          dolore reiciendis vero maxime, praesentium provident sit laboriosam
          repellendus quaerat. Repudiandae pariatur exercitationem ad odit ipsam vitae!
          Totam sed fugiat laborum. Reiciendis eveniet velit aliquam suscipit quos
          repudiandae aperiam magnam
          nisi corporis eaque, consequuntur exercitationem quidem nemo rerum atque
          sed a assumenda, officia accusantium, placeat modi quis inventore.
          Molestiae, accusamus at!
          Voluptas, nesciunt voluptatum iure voluptates officia dolorum debitis
          eligendi expedita fugiat libero accusamus aut quibusdam neque dicta consequatur.
          Reprehenderit non impedit cupiditate optio est at voluptatum earum architecto esse cum?
          Similique tenetur facere cupiditate, debitis ut doloremque ipsa corporis
          aperiam voluptate repellendus accusamus tempore eum? Ea, eveniet unde.
          Sapiente consequatur recusandae quia distinctio officiis nulla enim accusantium
          labore quae doloremque.
          Voluptatem perferendis ea inventore dolor expedita, sit at. Obcaecati maiores
          earum eius quod quidem. Odit ipsam earum rem placeat dolore, illum,
          veritatis accusamus, enim quaerat aliquid fugit tenetur. Harum, doloribus.
          Enim illum excepturi ipsam possimus minus voluptate sit consequuntur. A sit
          ab optio debitis, magnam eius, excepturi expedita voluptas, veniam dolore
          aperiam sed in. Voluptatibus sequi reiciendis ipsa alias consectetur.
          Aut consectetur repellat eveniet veniam. Maxime ad deleniti iure ducimus id
          molestiae, totam mollitia ullam recusandae, nihil dolor error voluptatum
          eaque itaque consequatur numquam tempora ab consequuntur omnis similique porro!
          Quo veritatis autem fugit distinctio quisquam hic reprehenderit illum modi
          ullam sequi dolorum harum molestias blanditiis voluptatem voluptate minima
          alias quia, est pariatur laborum nam eos ab mollitia aliquid. Aspernatur.
          Quas impedit beatae blanditiis voluptas incidunt a necessitatibus harum
          quisquam molestias, tempore quasi eaque excepturi! Dignissimos illo odit
          animi, voluptatem eius deleniti sit perspiciatis repellat impedit assumenda
          dicta possimus porro.
        </p>

      </main>
    </>
  );
}

export default Dashboard;
