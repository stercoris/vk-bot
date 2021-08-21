import { IAction } from "core/action/createAction";
import { FindAndCall, IActionBuffer } from "core/actionBuffer/IActionBuffer";
import { MessageContext } from "vk-io";

export const createActionBuffer = <InternalContext>(
  ...actions: IAction<InternalContext, any>[]
): IActionBuffer<InternalContext, any> => {
  const findAndCall: FindAndCall<any, InternalContext> = async ({
    actionName,
    actionParams,
    context,
    internalContext,
  }) => {
    const action = actions.find((a) => a.name === actionName);
    if (!action) return false;

    action.do(actionParams, context, internalContext);

    return true;
  };

  return { findAndCall };
};
