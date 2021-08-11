import { ButtonColor } from "vk-io";

export type Button = JSX.ButtonPayload;

export type CreateButton = (
  name: "button",
  props: Button | null,
  ...children: string[]
) => JSX.ButtonPayload;

export const ParseButton: CreateButton = (name, props, children) => {
  // base button component

  const getDefaultColorAndContent = (): JSX.ButtonPayload => ({
    label: children[0],
    color: ButtonColor.PRIMARY,
  });

  const payload = props as unknown as JSX.ButtonPayload;

  const button: JSX.ButtonPayload = {
    ...getDefaultColorAndContent(),
    ...payload,
  };

  return button;
};
