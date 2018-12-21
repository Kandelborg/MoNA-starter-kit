interface NiceCheckboxProps {
  rootID: string;
  id: string;
  name: string;
  value: string;
  label: string;
}

interface I18nProps {
  t: (lngString: string) => string;
}
