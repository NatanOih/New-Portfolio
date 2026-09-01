import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-10 px-4 text-center text-gray-500">
      <small className="text-xs block pb-2">
        &copy; {currentYear} Natan Oihman. All rights reserved.
      </small>
    </footer>
  );
}
