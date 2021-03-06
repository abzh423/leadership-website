import React from "react";

import Header from "../partials/Header";
import PostSingle from "../partials/PostSingle";
import Footer from "../partials/Footer";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <PostSingle id={id} />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default BlogPost;
