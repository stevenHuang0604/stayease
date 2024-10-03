import Spinner from "../../ui/Spinner";
import BookmarkItem from "./BookmarkItem";
import { useBookmarks } from "./useBookmarks";

function BookmarksContainer() {
  const { bookmarks, isLoading } = useBookmarks();

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-violet-700">My Bookmarks</h1>

        <p className="text-lg">{bookmarks?.length} hotels saved</p>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-10 grid grid-cols-3 gap-10">
          {bookmarks.map((bookmark) => (
            <BookmarkItem bookmark={bookmark} key={bookmark.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BookmarksContainer;
