import DrawerAppBar from "./Navbar";

const Layouts = ({ children }) => {
  return (
    <div>
      <DrawerAppBar />
      {children}
    </div>
  );
};

export default Layouts;
