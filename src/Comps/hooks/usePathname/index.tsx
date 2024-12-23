import { useLocation } from "react-router-dom";
// import useSelector from 'reselect';

// import { createStructuredSelector } from '#src/models/utils'
// import { useSelector } from '#src/models/hooks';


// import { RootState, Actions, dispatch, store } from '#src/models/store'




// const defaultProps = {
//   idKey: 'default',
// } as {
//   idKey?: string;
//   children?: JSX.Element;
// };
// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_hooks_usePathname = () => {

  
  // useEffect(() => {
    
  // },[]);

  // const selected = useSelector((state) => selector(state, props));

  // const selected = useSelector(
  //   (rootState: RootState) => rootState.model.statevar //capturing state slice (not internal selector)
  // );
  // const selected = useSelector(store.select.model.selectorFunction); //using state and selector (internal selector function)

  const location = useLocation();
  return location.pathname;
};
