import React from 'react';
import { Link } from 'react-router-dom';

function VocationalTestResultPage() {
  return (
    <>
      <h3 className="pt-20 pl-20 text-xl font-semibold">
        VocationalTestResultPage
      </h3>

      <div className="flex flex-col pl-20">
        <Link className="text-blue-700 hover:text-blue-500 hover:underline" to="/career/1">Career information 1</Link>
        <Link className="text-blue-700 hover:text-blue-500 hover:underline" to="/career/1">Career information 2</Link>
        <Link className="text-blue-700 hover:text-blue-500 hover:underline" to="/career/1">Career information 3</Link>
        <Link className="text-blue-700 hover:text-blue-500 hover:underline" to="/career/1">Career information 4</Link>
      </div>

    </>
  );
}

export default VocationalTestResultPage;
