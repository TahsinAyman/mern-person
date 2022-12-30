import { Route, Routes } from "react-router-dom";
import { AddPerson, ViewPerson, UpdatePerson, DeletePerson } from "../controller/PersonController";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<ViewPerson />} />
      <Route path="/add" element={<AddPerson />} />
      <Route path="/update/:id" element={<UpdatePerson />} />
      <Route path="/delete/:id" element={<DeletePerson />} />
    </Routes>
  );
}
