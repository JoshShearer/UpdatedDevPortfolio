import React, { useCallback, useMemo } from 'react';
// import useSelector from 'reselect';

// import { createStructuredSelector } from '#src/models/utils'
// import { useSelector } from '#src/models/hooks';


import { RootState, Actions, dispatch, store } from '#src/models/store'

// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_hooks_useTheme = () => {
  const applyUserTheme = useCallback(() => {
    console.log("Loading System Theme");
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        const mode = colorScheme === "dark" ? true : false;
        dispatch.models_UI.setDark(mode);
      });
  },[]);
  // useEffect(() => {
    
  // },[]);

  // const selected = useSelector((state) => {
  //   return useMemo(() => {
  //     return selector(state, props);
  //   }, [state, props]);
  // });

  // const selected = useSelector(
  //   (rootState: RootState) => rootState.model.statevar //capturing state slice (not internal selector)
  // );
  // const selected = useSelector(store.select.model.selectorFunction); //using state and selector (internal selector function)


  return applyUserTheme;
};
