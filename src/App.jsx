import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import Index from "./pages/Index";
import Hotels from "./features/hotels/Hotels";
import HotelDetail, {
  loader as hotelLoader,
} from "./features/hotels/HotelDetail";
import Bookmarks from "./pages/Bookmarks";
import MyReservations from "./pages/MyReservations";
import PageNotFound from "./pages/PageNotFound";
import ReservationDetail, {
  loader as reservationLoader,
} from "./features/reservations/ReservationDetail";
import { store } from "./store/store";

/* -------------------------------------------------------------------------- */
/*                               QUERY CLIENT                                 */
/* -------------------------------------------------------------------------- */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60,
    },
  },
});

/* -------------------------------------------------------------------------- */
/*                           ROUTER CONFIGURATION                             */
/* -------------------------------------------------------------------------- */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "hotels",
        element: <Hotels />,
      },
      {
        path: "hotels/:hotelId",
        element: <HotelDetail />,
        loader: hotelLoader,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "reservations",
        element: <MyReservations />,
      },
      {
        path: "reservations/:id",
        element: <ReservationDetail />,
        loader: reservationLoader,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#374151",
            },
          }}
        />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
