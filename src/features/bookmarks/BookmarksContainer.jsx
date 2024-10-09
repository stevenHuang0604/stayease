import Spinner from "../../ui/Spinner";
import BookmarkItem from "./BookmarkItem";
import { useBookmarks } from "./useBookmarks";

function BookmarksContainer() {
  const { bookmarks, isLoading } = useBookmarks();

  return (
    <div className="p-4 lg:p-8">
      <div className="fvc justify-between">
        <h1 className="text-3xl font-semibold text-violet-700 dark:text-violet-300">
          My Bookmarks
        </h1>

        <p className="text-lg text-slate-800 dark:text-slate-200">
          {bookmarks?.length} hotels saved
        </p>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10">
          {bookmarks.map((bookmark) => (
            <BookmarkItem bookmark={bookmark} key={bookmark.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookmarksContainer;
