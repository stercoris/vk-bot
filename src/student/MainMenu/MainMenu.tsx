import { ButtonColor } from "vk-io";
import { R1IO } from "../../core/R1IO";
import { User } from "../../index";

interface MainMenuProps {
  user: User;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  user: { selectedWeek, subscribed },
}) => (
  <menu>
    <row>
      <button color={ButtonColor.POSITIVE}>Schedule</button>
      <button
        color={
          selectedWeek === "Green" ? ButtonColor.POSITIVE : ButtonColor.NEGATIVE
        }
      >{`${selectedWeek} week`}</button>
    </row>
  </menu>
);
