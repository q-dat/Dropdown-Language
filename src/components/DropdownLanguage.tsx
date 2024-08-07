/* eslint-disable @typescript-eslint/no-explicit-any */
import i18next from "i18next";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Dropdown } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { lngs } from "../contants";

const DropdownLanguage: React.FC<{}> = () => {
  const { t, i18n } = useTranslation();

  const SwitchLanguge = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = Object.values(lngs).find(
    (lng) => lng.key === i18next.language
  ) || { key: "en", countryCode: "US" };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className="flex items-center justify-center gap-2">
          <ReactCountryFlag countryCode={currentLanguage.countryCode} svg />
          {t(`LanguageSwitch.${currentLanguage.key}` as any)}
        </Dropdown.Toggle>
        <Dropdown.Menu className="justify-center">
          <Dropdown.Item
            onClick={() => SwitchLanguge(lngs.en.key)}
            tabIndex={0}
            className={i18next.language === lngs.en.key ? "bg-neutral-200" : ""}
          >
            <ReactCountryFlag countryCode={lngs.en.countryCode} svg />{" "}
            {t("LanguageSwitch.en")}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => SwitchLanguge(lngs.vi.key)}
            tabIndex={0}
            className={i18next.language === lngs.vi.key ? "bg-neutral-200" : ""}
          >
            <ReactCountryFlag countryCode={lngs.vi.countryCode} svg />{" "}
            {t("LanguageSwitch.vi")}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownLanguage;
