import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Input from "./components/Input/Input";
import axios from "axios";
import Done from "./components/Done/Done";

export const SearchContext = React.createContext("");

interface searchValueDate {
  title: string;
  id: number;
}
function App() {
  const [searchValue, setSearchValue] = useState<searchValueDate[]>([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get<searchValueDate[]>(
        "https://65c3afef39055e7482c16929.mockapi.io/card"
      )
      .then((res) => {
        setSearchValue(res.data);
      });
  }, [searchValue]);

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Input />
        <p className="text">Tasks to do - {searchValue.length}</p>
        {searchValue.map((item, id) => (
          <Card
            onClick={setValue}
            key={item.id}
            id={item.id}
            title={item.title}
          />
        ))}
        <p className="text">Done - {value.length}</p>
        {value.map((item, id) => (
          <Done key={id} title={item} />
        ))}
      </SearchContext.Provider>
    </div>
  );
}

export default App;
