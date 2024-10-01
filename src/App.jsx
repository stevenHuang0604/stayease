import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import Index from "./pages";
import Hotels from "./features/hotels/Hotels";
import HotelDetail, {
  loader as hotelLoader,
} from "./features/hotels/HotelDetail";
import Bookmarks from "./pages/Bookmarks";
import MyReservations from "./pages/MyReservations";
import Auth from "./pages/Auth";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/app",
    element: <AppLayout />,
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
        path: "hotels/:id",
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
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
