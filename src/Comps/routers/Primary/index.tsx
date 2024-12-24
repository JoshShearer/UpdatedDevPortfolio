import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Pages_landing,
  Pages_projectsPage,
  Pages_resumePage,
  Pages_contactPage,
  Pages_aboutPage,
  Pages_technicalPage,
  Pages_notFound,
} from "#src/Pages";
import { Comps_routers_Root } from "#src/Comps";

export const routes =
  createRoutesFromElements(
    <Route path="" element={<Comps_routers_Root />}>
      <Route key="landing" path="/" element={<Pages_landing />} />
      <Route key="projects" path="/projects" element={<Pages_projectsPage />} />
      <Route key="about" path="/about" element={<Pages_aboutPage />} /> 
      <Route key="resume" path="/resume" element={<Pages_resumePage />} />
      <Route key="contact" path="/contact" element={<Pages_contactPage />} />
      <Route key="technical" path="/technical" element={<Pages_technicalPage />} />
      <Route key="notFound" path="*" element={<Pages_notFound />} />
    </Route>
  )
  export const Comps_routers_Primary = createBrowserRouter(routes);

// export const Comps_routers_Limited = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="" element={<Comps_routers_Root />}>
//       <Route path="/" element={<Pages_landing />} />
//       <Route path="/thankyou" element={<Pages_thankYou />} />
//       <Route path="/mushrooms/news" element={<Pages_news />} />
//       <Route path="/mushrooms/news/:title/:id" element={<Pages_article />} />
//       <Route path="/login" element={<Pages_signIn />} />
//       <Route path="/signup" element={<Pages_signUp />} />
//       <Route path="/forgotPw" element={<Pages_forgotPw />} />
//       <Route path="/thankyou" element={<Pages_thankYou />} />
//       <Route path="*" element={<Pages_notFound />} />
//     </Route>
//   )
// );
