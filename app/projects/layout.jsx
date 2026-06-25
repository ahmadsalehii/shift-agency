import Header from "@/components/Header/Header";

const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default layout;
