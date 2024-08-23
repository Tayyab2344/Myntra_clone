import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemSliceActions } from "../store/ItemSlice";
import { fetchStatusAction } from "../store/FetchStatusSlice";

const Fetching = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchingDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinished());

        if (Array.isArray(items) && items.length > 0) {
          dispatch(ItemSliceActions.addInitialItem(items[0]));
        } else {
          console.error("Expected an array of items");
        }
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", error);
        }
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return null;
};

export default Fetching;
