import React from "react";
import Image from "next/image";
import CommentPage from "./comment/CommentPage";

type Props = {};

const PostPage = (props: Props) => {
  const picture = "/images/header.jpg";

  return (
    <div className="w-full flex flex-col lg:gap-20 max-md:gap-10 align-middle items-start lg:p-10 p-3">
      <div className="mt-[150px] flex w-full align-middle items-start">
        <h1 className="text-4xl font-bold uppercase lg:text-7xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, ipsum.
        </h1>
      </div>
      <div className="rounded-3xl w-full">
        <Image
          src={picture}
          alt="header image"
          className="rounded-3xl w-full"
          width="5000"
          height="5000"
        />
      </div>
      <div className="w-full flex flex-col gap-20 align-middle items-start">
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit est
          in quo fugit voluptatibus. Quam, quisquam. Quod quidem consequatur
          recusandae, sit ipsa illo doloribus, impedit in omnis ullam suscipit
          dolore odit cum temporibus aliquid eaque assumenda similique deserunt
          adipisci! Cumque libero debitis dicta ex voluptate. Ratione quaerat
          architecto atque minus, molestias tempore unde magni eius accusantium
          exercitationem corporis nobis non, quibusdam alias voluptatum quia
          provident. Expedita, saepe. Sit, asperiores dolore a sequi quos veniam
          ex culpa? Et neque blanditiis obcaecati, perspiciatis dicta sequi
          consectetur, rem tempore reprehenderit, ratione voluptates quidem est
          adipisci saepe magni impedit. Voluptates itaque cum laboriosam iusto
          dicta iure nam nihil incidunt eligendi doloremque, adipisci, rerum,
          numquam sapiente ab? Enim facere molestias totam, eveniet voluptates
          mollitia quam doloremque, itaque excepturi accusamus, at fugiat culpa
          voluptatum cum minima ut eligendi reprehenderit. Assumenda ducimus
          libero quisquam sequi natus voluptatem laboriosam molestias quae
          architecto fugit, nobis atque commodi debitis voluptates ipsam harum
          necessitatibus ex. Distinctio, iusto beatae! Reprehenderit ratione non
          eum molestias voluptatibus temporibus deserunt minima quisquam
          suscipit dicta repellendus, dolores id tempore fuga tenetur amet ut
          laboriosam aliquam corporis consequatur exercitationem! Aspernatur
          odit dolorum, numquam ut iste atque explicabo in voluptatum facilis
          eveniet tenetur dolores facere id autem cum et doloremque saepe ipsum.
          Consequuntur praesentium sunt accusantium, suscipit quia laboriosam
          culpa minus ipsum sit, quod, beatae ipsa commodi doloremque? Totam,
          dignissimos voluptatem! Quis hic autem eius! Enim veniam minima
          voluptatibus natus ullam. Veritatis numquam cupiditate repellendus
          deserunt maiores illum cum soluta voluptatibus! Provident ab dolore
          incidunt fugit perspiciatis at aut libero itaque quis praesentium
          iusto cum quas soluta reprehenderit assumenda porro debitis veritatis
          temporibus, nihil laudantium quidem. Aperiam illum est numquam debitis
          blanditiis dolor recusandae esse molestias labore, vero reiciendis
          veritatis quas ea, aliquam veniam tenetur possimus, unde magni! Omnis
          consectetur, repellendus minima accusamus ratione deleniti quia
          provident ducimus?
        </p>
        <div className="w-full flex gap-5 align-middle items-center">
          <p className="">Date created: 12 - 06 - 2024</p>
          <p className="">Time created: 12pm</p>
        </div>
        <div className="w-full">
          <CommentPage />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
