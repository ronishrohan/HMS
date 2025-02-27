import Navbar from "@/components/Navbar/Navbar";

function layout({ children }) {
  return (
    <div className="size-full flex ">
      <Navbar></Navbar>
      {children}
    </div>
  );
}

export default layout;
