import { Routes, Route } from "react-router-dom";
import  Sidebar from "./SideBar/Index"
import Items from "./Routes/Items"
import { SIDEBAR_DATA as dummyData } from "./Data";

const SideBar: React.FC = () => {
  return (
    <div id="main">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Items page="Home" />} />
          {dummyData &&
            dummyData.map((item : any, index: number) => (
              <Route
                key={index}
                path={item.path}
                element={<Items page={item.name} />}
              />
            ))}
        </Routes>
      </Sidebar>
    </div> 
  )
}
export default SideBar;
