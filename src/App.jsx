import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AppLayout from "./ui/AppLayout";
import Auth from "./pages/Auth";
import PageNotFound from "./pages/PageNotFound";
import Index from "./pages";
import Bookmarks from "./pages/Bookmarks";
import MyReservations from "./pages/MyReservations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HotelDetail, {
  loader as hotelLoader,
} from "./features/main/HotelDetail";

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
