import { Routes, Route,Navigate } from 'react-router-dom';
import Sidebar from '../../component/Sidebar/Sidebar';
import ADD from '../../pages/ADD/ADD';
import LIST from '../../pages/LIST/LIST';
import UPDATE from '../../pages/UPDATE/UPDATE';
const ADMIN = () => {
  return (
    <div className="admin-layout">
      <Sidebar/>
      <div className="admin-content">
        <Routes>
          <Route path="/" element={<Navigate to="add" />} />
          <Route path="add" element={<ADD  />} />
          <Route path="list" element={<LIST  />} />
          <Route path="update" element={<UPDATE  />} />
        </Routes>
      </div>
    </div>
  );
};

export default ADMIN;
