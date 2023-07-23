import React from 'react';

export default function Button({ text, id, onClick }) {
  return (
    <button
      className="px-3 py-1 hover:outline outline-1 rounded-sm max-md:w-full"
      data-scroll={id}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
