import createTabbedEditor from "@/components/visualizations/editor/createTabbedEditor";

import GeneralSettings from "./GeneralSettings";
import ColorsSettings from "./ColorsSettings";
import FormatSettings from "./FormatSettings";
import BoundsSettings from "./BoundsSettings";

export default createTabbedEditor([
  { key: "General", title: __("General"), component: GeneralSettings },
  { key: "Colors", title: __("Colors"), component: ColorsSettings },
  { key: "Format", title: __("Format"), component: FormatSettings },
  { key: "Bounds", title: __("Bounds"), component: BoundsSettings },
]);
