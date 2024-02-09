"use client";

import React, { useEffect, useState } from "react";
import SettingsModal from "../modals/SettingsModal";

const ModalProvider = () => {
  const [isMouneted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMouneted) return null;

  return (
    <>
      <SettingsModal />
    </>
  );
};

export default ModalProvider;
