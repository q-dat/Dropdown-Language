import React from "react";
import DropdownLanguage from "./components/DropdownLanguage";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <DropdownLanguage />
      <div className="text-center">
      <p>{t("TestConten")}</p>
      </div>
    </div>
  );
};

export default App;
