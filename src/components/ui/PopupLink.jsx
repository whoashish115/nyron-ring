"use client";

import { WIDGET_WINDOW_NAME } from "@/lib/constants";

export default function PopupLink({ href, className, children }) {
  const openPopup = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;

    const popup = window.open(
      href,
      WIDGET_WINDOW_NAME,
      "popup=yes,width=380,height=420"
    );

    if (popup) {
      event.preventDefault();
      popup.focus();
    }
  };

  return (
    <a href={href} target="_blank" rel="noopener" onClick={openPopup} className={className}>
      {children}
    </a>
  );
}
