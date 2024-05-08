import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { CreatePost } from "../create_post/CreatePost";
import { PageNotFound } from "../common";
import { ProtectedRoute } from "./ProtectedRoute";

export const RoutesList: FC = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/create'
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
};
