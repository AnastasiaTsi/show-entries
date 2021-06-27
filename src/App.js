import React, { useState, useEffect } from "react";
import { apiGET } from "./redux/slices/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import Datatable from "./components/Datatable";
import Search from "./components/Search";
import Select from "./components/Select";
import { mainDiv, topContainer } from "./styles/genericStyles";
import Loading from "./components/Loading";

const App = () => {
  const dispatch = useDispatch();

  const entries = useSelector((state) => state.api.entries);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(apiGET());
  }, [dispatch]);

  const search = (entries) => {
    const columns = entries[0] && Object.keys(entries[0]);

    return entries.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(text.toLowerCase()) >
            -1 &&
          (category === "" || row.Category === category)
      )
    );
  };

  return (
    <div style={mainDiv}>
      {entries[0] ? (
        <div style={{ padding: "3%" }}>
          <div style={topContainer}>
            <Search onChange={(value) => setText(value.trim())} />
            <Select
              entries={entries}
              onChange={(value) => setCategory(value.trim())}
            />
          </div>
          <Datatable entries={search(entries)} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;
