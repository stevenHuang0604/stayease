import Spinner from "../../ui/Spinner";
import BookmarkItem from "./BookmarkItem";
import { useBookmarks } from "./useBookmarks";

function BookmarksContainer() {
  const { bookmarks, isLoading } = useBookmarks();

  return (
    <div>
      <h1 className="text-2xl font-medium text-violet-700">My Bookmark</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        bookmarks.map((bookmark) => (
          <BookmarkItem bookmark={bookmark} key={bookmark.id} />
        ))
      )}
    </div>
  );
}

export default BookmarksContainer;
