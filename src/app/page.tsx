import PostList from "../components/PostList";
import Header from "../components/Header";

export default function Home() {
  return (
      <div id={"home page"} className=" items-center flex-grow justify-items-center gap-16 ">
            <Header/>
            <PostList/>
      </div>
  );
}
