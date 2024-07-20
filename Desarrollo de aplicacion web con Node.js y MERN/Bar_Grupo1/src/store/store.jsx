import { configureStore } from "@reduxjs/toolkit";
import { platosApi } from "./service/platos";
import { tragosApi } from "./service/tragos";

export const store = configureStore ({
    reducer: {
        [platosApi.reducerPath]: platosApi.reducer,
        [tragosApi.reducerPath]: tragosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
          .concat(platosApi.middleware)
          .concat(tragosApi.middleware);
      },
})
