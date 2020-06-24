import React, { useCallback, useState } from "react";
import BoardRow from "../molecules/table/BoardRow";

const BoardBody = ({ rows, setModalShow, onClick }) => {
  
  return (
    <tbody>
      {rows.map((item, idx) => {
        return <BoardRow idx={idx} body={item} setModalShow={setModalShow} onClick={onClick} />;
        
      })}
    </tbody>
  );
};

export default BoardBody;