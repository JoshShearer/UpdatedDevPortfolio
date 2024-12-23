import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Pages_landing,
  Pages_signIn,
  Pages_signUp,
  Pages_notFound,
  Pages_thankYou,
} from "#src/Pages";
import { Comps_routers_Root } from "#src/Comps";

export const routes =
  createRoutesFromElements(
    <Route path="" element={<Comps_routers_Root />}>
      <Route key="landing" path="/" element={<Pages_landing />} />
      <Route key="signIn" path="/login" element={<Pages_signIn />} />
      <Route key="signUp" path="/signup" element={<Pages_signUp />} />
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
